import React from 'react';
import Layout from '../components/utils/Layout'
import { gql } from 'graphql-request'
import Event from '../components/utils/Event'
import { client } from '../components/utils/Gql'

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
                        src="https://us-east-1.graphassets.com/AWxF0qBdS8y0dm0Wg5V2gz/cgTBHUIQISYIcvSv2r3A"
                        alt="A selection of wines and meads. Doesn't it look good?"
                        className="mx-auto w-full"
                    />
                </div>
                <section
                    className="pt-10 pb-20"
                >
                    {events.length > 0 ?
                        events.map((event) => <Event key={event.id} event={event} />)
                        :
                        <div
                            className="text-2xl text-center max-w-3xl mx-auto leading-9"
                        >There aren't any currently scheduled tastings, but feel free to contact us to schedule one for yourself!</div>
                    }
                </section>
            </Layout>
        </React.Fragment>
    )
}


export async function getServerSideProps(context) {
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
