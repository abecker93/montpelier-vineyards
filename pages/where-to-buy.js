import React from 'react';
import Layout from '../components/utils/Layout'
// import DomShipping from '../components/utils/DomShipping'
import PurchaseLocations from '../components/utils/PurchaseLocations'
import { gql, GraphQLClient } from 'graphql-request'
import Link from 'next/link'

const WhereToBuy = (props) => {

    const {
        locations
    } = props

    return (
        <React.Fragment>
            <Layout>
                <section className="py-5">
                    <h2
                        className="text-marv text-3xl text-center"
                    >Where to buy our wine</h2>
                    <div className="text-center text-marv text-lg py-2">
                        You can find our fine wines in restaurants and retail locations!
                    </div>
                </section>
                <section
                    className="text-marv text-xl grid md:grid-cols-3 justify-items-center pb-5"
                >
                    <Link
                        href="/where-to-buy#retail"
                    >
                        <a
                        >Restaurants & Retailers</a>
                    </Link>
                    <Link
                        href="/where-to-buy#local"
                    >
                        <a
                        >Local Pickup</a>
                    </Link>
                    <Link
                        href="/where-to-buy#ship"
                    >
                        <a
                        >Domestic Shipping</a>
                    </Link>
                </section>
                <section
                    id="retail"
                    className="py-5"
                >
                    <PurchaseLocations
                        locations={locations}
                    />
                </section>
                <section
                    id="local"
                    className="py-5"
                >
                    <h2
                        className="text-center text-marv text-3xl py-2 leading-10"
                    >
                        Local wine pick-up and delivery available!
                    </h2>
                    <div
                        className="text-center font-normal text-lg text-black leading-8"
                    >
                        If you would like to order wine for pick up here at the winery or have it delivered locally, click on the buy wine button choose pick-up or local delivery
                    </div>
                    <Link
                        href="https://vinoshipper.com/shop/montpelier_vineyards_llc"
                    >
                        <a
                            className="flex justify-center py-2"
                            passHref
                        >
                            <button
                                className="bg-marv text-beige py-1.5 2xl:py-2 px-4 rounded-full text-lg 2xl:text-2xl"
                            >
                                Shop now with VinoShipper
                            </button>
                        </a>
                    </Link>
                </section>
                <section id="ship" className="pt-5 pb-20">
                    <h2
                        className="text-center text-marv text-3xl py-2 leading-10"
                    >
                        We can now ship our wines to 37 states!
                    </h2>
                    <div
                        className="text-center font-normal text-lg text-black leading-8"
                    >
                        Alaska, Arizona, Colorado, Washington DC, Florida, Georgia, Hawaii, Iowa, Idaho, Illinois, Indiana, Kansas, Louisiana, Massachusetts, Maryland, Maine, Minnesota, Missouri, North Carolina, North Dakota, Nebraska, New Hampshire, New Mexico, Nevada, New York, Ohio, Oklahoma, Oregon, Pennsylvania, South Carolina, Tennessee, Texas, Virginia, Washington, Wisconsin, West Virginia, Wyoming
                    </div>
                    <div
                        className="flex lg:justify-center lg:py-10"
                    >
                        <img
                            src="/domestic-shipping.png"
                            alt="Montpelier Vineyards domestic shipping"
                            className="md:w-3/5 mx-auto"
                        />
                    </div>
                    <section>
                        <h3
                            className="text-center text-marv text-2xl py-2 leading-10"
                        >Shipping, local delivery, or winery pickup Information</h3>
                        <ul
                            className="list-disc font-normal text-lg text-black leading-8"
                        >
                            <li>
                                Please note that shipping and taxes are applied during checkout and are not included in the listed bottle prices.
                            </li>
                            <li>
                                Méthode Champenoise white 2018 is disgorged on demand and take two weeks to process. After you place your order, specify how you would like the wine finished; Brut Zero, Brut, or Sec. Email us at dkbecker@montpeliervineyards.com
                            </li>
                            <li>
                                Orders placed Monday through Sunday will be processed and shipped the following week.
                            </li>
                            <li>
                                When you place your order you will receive a confirmation of your order and payment from VinoShipper. Once your order has shipped, you will receive an additional notification with tracking information.
                            </li>
                            <li>
                                We do not ship to Vermont; however, we do offer local delivery and winery pickup. After you place your order for local delivery and winery pickup, email me to make arrangements for pickup or delivery
                            </li>
                            <li>
                                For any questions please contact us directly, <a href="mailto:dkbecker@montpeliervineyards.com">dkbecker@montpeliervineyards.com</a>
                            </li>
                        </ul>
                    </section>
                </section>
            </Layout>
        </React.Fragment>
    )
}

export async function getServerSideProps(context) {

    // const client = new GraphQLClient('https://api-us-east-1.graphcms.com/v2/cku68bqqj27iv01xn6g6se7dc/master')
    const client = new GraphQLClient(process.env.GRAPH_CMS_API_ENDPOINT)

    // query PurchaseLocations() {
    const query = gql`
        query {
        purchaseLocations{
            id
            locationTitle
            locationType
            locationWebsite
            phoneNumber
            locationAddress
            locationGeoCoords {
                latitude
                longitude
            }
        }
    }`
    
    // const data = await graphClient.request(query)
    const data = await client.request(query)

    const locations = data.purchaseLocations
    
    return {
        props: {
            locations
        }
    }
    
}

export default WhereToBuy