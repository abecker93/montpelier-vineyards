import React from 'react';
import Layout from '../components/utils/Layout'
import { gql, GraphQLClient } from 'graphql-request'
import Event from '../components/utils/Event'

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
                    className="pt-5"
                >
                    <img
                        src="https://media.graphassets.com/output=format:jpg/cgTBHUIQISYIcvSv2r3A?_ga=2.251210438.190919827.1634691739-722458239.1630371733"
                        alt="A selection of wines and meads. Doesn't it look good?"
                        className="mx-auto w-full"
                    />
                </div>
                <section
                    className="pt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 pb-20"
                >
                    {events.length > 0 ?
                        events.map((event) => <Event key={event.id} event={event} />)
                        :
                        <div
                            className="text-3xl"
                        >Sorry, no upcoming events at this moment.</div>
                    }
                </section>
            </Layout>
        </React.Fragment>
    )
}


export async function getServerSideProps(context) {

    const client = new GraphQLClient(process.env.GRAPH_CMS_API_ENDPOINT)

    const query = gql`
        query UpcomingEvents($now: DateTime!) {
            events(stage: PUBLISHED, where: {dateAndTime_gt: $now}, orderBy: dateAndTime_ASC) {
                id
                eventTitle
                eventDescription
                dateAndTime
                address
                eventPhoto {
                    url
                }
            }
        }`

    const data = await client.request(query, { now: new Date().toISOString() })

    return {
        props: data
    }
}

export default Tastings
