import React from 'react';
import Layout from '../components/utils/Layout'
import { gql } from 'graphql-request'
import { client } from '../components/utils/Gql'
import cx from 'classnames'

const OurWines = (props) => {

    const {
        wines
    } = props;

    return (
        <React.Fragment>
            <Layout>
                <div
                    className="text-lg xl:text-2xl 2xl:text-3xl text-marv pt-5 text-center"
                >
                    Vermont-grown organic grapes artfully fermented in our state capital, Montpelier!
                </div>
                <div
                    className="pt-5"
                >
                    <img
                        src="https://us-east-1.graphassets.com/AWxF0qBdS8y0dm0Wg5V2gz/URsR4QRUQ9ujFDYHZsoJ"
                        alt="Montpelier Vineyards — group photo, picking grapes"
                        className="mx-auto max-h-80 w-full object-cover object-top"
                    />
                </div>
                <section
                    className="pt-10 pb-20 divide-y divide-marv divide-opacity-25"
                >
                    {wines?.map((wine) => {
                        return (
                            <article
                                key={wine.id}
                                className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                            >
                                <div>
                                    <div className="flex items-center">
                                        {wine.organicBool && (
                                            <img
                                                src="vt-certified-organic.gif"
                                                className="w-12 h-12 self-center"
                                                alt={wine?.wineName + "- Certified Organic"}
                                            />
                                        )}
                                        <h4
                                            className={cx("text-marv text-2xl leading-8", {
                                                ['pl-4']: wine?.organicBool
                                            })}
                                        >{wine?.wineName}</h4>
                                    </div>
                                    <div className="pt-3 flex flex-wrap gap-x-6 gap-y-1">
                                        <div className="text-marv font-bold leading-8">
                                            Alcohol:
                                            <span className="ml-1 text-black font-normal">
                                                {wine?.alcohol}
                                            </span>
                                        </div>
                                        <div className="text-marv font-bold leading-8">
                                            Type:
                                            <span className="ml-1 text-black font-normal">
                                                {wine?.beverageType?.join(", ")}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="pt-2 space-y-4">
                                        <p className="text-marv font-bold leading-8">
                                            Variety:
                                            <span className="ml-1 text-black font-normal">
                                                {wine?.grapeVariety}
                                            </span>
                                        </p>
                                        <p className="text-marv font-bold leading-8">
                                            Winemaking notes:
                                            <span className="ml-1 text-black font-normal">
                                                {wine?.winemakingNotes}
                                            </span>
                                        </p>
                                        <p className="text-marv font-bold leading-8">
                                            Tasting notes:
                                            <span className="ml-1 text-black font-normal">
                                                {wine?.tastingNotes}
                                            </span>
                                        </p>
                                    </div>
                                    {wine?.techSheet?.url && (
                                    <div className="pt-6">
                                        <a
                                            className="bg-marv text-beige py-1.5 2xl:py-2 px-4 rounded-full text-lg 2xl:text-2xl"
                                            href={wine?.techSheet?.url}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >Download the tech sheet</a>
                                    </div>
                                    )}
                                </div>
                                <div className="self-center">
                                    {wine?.wineImage?.url && (
                                    <img
                                        src={wine?.wineImage?.url}
                                        className="mx-auto max-h-96 w-full object-contain"
                                        alt={wine?.wineName}
                                    />
                                    )}
                                </div>
                            </article>
                        )
                    })}
                </section>
            </Layout>
        </React.Fragment>
    )
}

// export async function getStaticProps(context) {
export async function getServerSideProps(context) {
    const query = gql`
        query {
            wines {
                alcohol
                beverageType
                grapeVariety
                id
                vintage
                wineName
                winemakingNotes
                tastingNotes
                wineImage {
                    url
                }
                organicBool
                techSheet {
                    url
                }
            }
        }`

    const data = await client.request(query)

    return {
        props: data
    }

}

export default OurWines
