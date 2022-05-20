// page for tastings information, right now just placeholder
// page for tastings information, right now just placeholder
   
import React from 'react';
import Layout from '../components/utils/Layout'
import { gql, GraphQLClient } from 'graphql-request'
import cx from 'classnames'
import moment from 'moment';

const Tastings = (props) => {

    const {
        events
    } = props

    return (
        <React.Fragment>
            <Layout>
                <div
                    className="text-lg xl:text-2xl 2xl:text-3xl text-marv pt-5 text-center"
                >
                    Interested in trying before you buy? Stop by one of these wine tastings to find out what you like best
                </div>
                <div
                        className="font-normal text-lg text-black leading-8 pt-2"
                >
                Tastings and tours are not being offered on premises at this time. Once this changes, on-site tastings and vineyard tours will be offered by appointment only. Interested in a free tasting? Check out the options below!
                </div>
                <div
                    className="pt-5"
                >
                    <img
                        src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/qXk4j2AvSZehxxl8g4C8"
                        alt="A selection of wines and meads. Doesn't it look good?"
                        className="mx-auto h-96"
                    />
                </div>
                <section
                    className="pt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 pb-20"
                >
                    {events?.map((event) => {
                        return (
                            <>
                                <div className="items-stretch">
                                    <div
                                        className="flex items-stretch"
                                    >
                                        <h4
                                            className="text-marv text-xl self-center"
                                        >{event?.eventTitle}</h4>
                                    </div>
                                    <div
                                        className="pt-2"
                                    >
                                        <div className="text-marv font-bold leading-8 flex">Description:
                                            <p
                                                className="ml-1 text-black font-normal"
                                            >
                                                {event?.eventDescription}
                                            </p>
                                        </div>
                                        <div className="text-marv font-bold leading-8 flex">Address:
                                            <p
                                                className="ml-1 text-black font-normal"
                                            >
                                                <span>{event?.address}</span>
                                            </p>
                                        </div>
                                    </div>
                                        <div className="pt-1 text-marv font-bold leading-8">
                                            Date and Time:
                                            <span className="ml-1 text-black font-normal">
                                                {moment(event?.dateAndTime).format('lll')}
                                            </span>
                                        </div>
                                </div>
                            </>
                        )
                    })}
                </section>
            </Layout>
        </React.Fragment>
    )
}


export async function getServerSideProps(context) {

    const client = new GraphQLClient(process.env.GRAPH_CMS_API_ENDPOINT)

    const query = gql`
        query {
            events {
                eventTitle
                eventDescription
                dateAndTime
                address
            }
        }`

    const data = await client.request(query)

    return {
        props: data
    }
}

export default Tastings   
