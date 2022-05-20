import React from 'react';
import Layout from '../components/utils/Layout'
import { gql, GraphQLClient } from 'graphql-request'
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
                        src="https://media.graphcms.com/output=format:jpg/URsR4QRUQ9ujFDYHZsoJ?_ga=2.251210438.190919827.1634691739-722458239.1630371733"
                        alt="Montpelier Vineyards — group photo, picking grapes"
                        className="mx-auto h-96"
                    />
                </div>
                <section
                    className="pt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 pb-20"
                >
                    {wines?.map((wine) => {
                        return (
                            <>
                                <div className="items-stretch">
                                    <div
                                        className="flex items-stretch"
                                    >
                                        {wine.organicBool && (
                                            <img
                                                src="vt-certified-organic.gif"
                                                className="w-12 h-12 self-center"
                                                alt={wine?.wineName + "- Certified Organic"}
                                            />
                                        )}
                                        <h4
                                            className={cx("text-marv text-xl self-center", {
                                                ['pl-4']: wine?.organicBool
                                            })}
                                        >{wine?.wineName}</h4>
                                    </div>
                                    <div
                                        className="pt-2 flex"
                                    >
                                        <div className="text-marv font-bold leading-8 flex">Alcohol:
                                            <p
                                                className="ml-1 text-black font-normal"
                                            >
                                                {wine?.alcohol}
                                            </p>
                                        </div>
                                        <div className="ml-1 text-marv font-bold leading-8 flex">Type:
                                            <p
                                                className="ml-1 text-black font-normal"
                                            >
                                                <span>{wine?.beverageType.join(", ")}</span>
                                            </p>
                                        </div>
                                    </div>
                                        <div className="pt-1 text-marv font-bold leading-8">
                                            Variety:
                                            <span className="ml-1 text-black font-normal">
                                                {wine?.grapeVariety}
                                            </span>
                                        </div>
                                        <div
                                            className="pt-1 text-marv font-bold leading-8"
                                        >
                                            Winemaking notes:
                                            <span
                                                className="ml-1 text-black font-normal"
                                            >
                                                {wine?.winemakingNotes}
                                            </span>
                                    </div>
                                    <div
                                        className="pt-1 text-marv font-bold leading-8"
                                    >
                                        Tasting notes:
                                        <span
                                            className="ml-1 text-black font-normal"
                                        >
                                            {wine?.tastingNotes}
                                        </span>
                                    </div>
                                    <div
                                        className="pt-2"
                                    >
                                        <a
                                            className="bg-marv text-beige py-1.5 2xl:py-2 px-4 rounded-full text-lg 2xl:text-2xl"
                                            href={wine?.techSheet?.url}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >Download the tech sheet</a>
                                    </div>
                                </div>
                                <div className="self-center">
                                    <img
                                        src={wine?.wineImage?.url}
                                        className="mx-auto h-96"
                                        alt={wine?.wineName}
                                    />
                                </div>
                            </>
                        )
                    })}
                </section>
            </Layout>
        </React.Fragment>
    )
}

// export async function getStaticProps(context) {
export async function getServerSideProps(context) {

    const client = new GraphQLClient(process.env.GRAPH_CMS_API_ENDPOINT)

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
