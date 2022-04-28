// page for tastings information, right now just placeholder
   
import React from 'react';
import Layout from '../components/utils/Layout'

const Tastings = (props) => {

    const {
        events
    } = props;

    return (
        <React.Fragment>
            <Layout>
                <div
                    className="text-lg xl:text-2xl 2xl:text-3xl text-marv pt-5 text-center"
                >
                    Drink some wine you dirty wine sluts!
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
                    {events?.map((event) => {
                        return (
                            <>
                                <div className="items-stretch">
                                    <div
                                        className="flex items-stretch"
                                    >
                                        <h4
                                            className={cx("text-marv text-xl self-center")}
                                        >{event?.eventTitle}</h4>
                                    </div>
                                    <div
                                        className="pt-2 flex"
                                    >
                                        <div className="text-marv font-bold leading-8 flex">Location:
                                            <p
                                                className="ml-1 text-black font-normal"
                                            >
                                                {event?.description}
                                            </p>
                                        </div>
                                        <div className="ml-1 text-marv font-bold leading-8 flex">Address:
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
                                                {wine?.dateAndTime}
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
             address
             eventDescription
             eventTitle
             dateAndTime
           }
         }
        }`

    const data = await client.request(query)

    return {
        props: data
    }
  }

export default Tastings
