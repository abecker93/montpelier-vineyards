import React from 'react';
import Layout from '../components/utils/Layout'

// TODO  - need to install email js and setup configuration
// https://dev.to/allanmelo/send-emails-from-a-contact-form-in-react-with-emailjs-and-recaptcha-1oc

const About = () => {

    return (
        <React.Fragment>
            <Layout>
                <section
                    className="flex flex-col-reverse md:flex-row items-center pt-5"
                >
                    <div>
                        <div
                            className="font-medium text-marv text-3xl leading-10 pt-5 md:pt-0"
                        >
                        It's All In The Family
                            <div
                                className="font-normal text-lg text-black leading-8 pt-2"
                            >
                                The Becker family started making organic wine back in 1992 on our small back yard organic vineyard in Port Huron, Michigan. The first grapes from those vines were crushed by the feet of my infant son Christopher, and since this time we dreamed of producing quality organic wines. We moved to Vermont in 1997 and started establishing an organic vineyard. Our goal is to produce small-batch organically farmed wines by hand
                            </div>
                        </div>
                    </div>
                    <img
                        src="https://media.graphcms.com/LkNJP9FRACGrr6eyPxEb"
                        alt="Montpelier Vineyards — squishing grapes"
                        className="md:w-2/5 md:pl-8 mx-auto"
                    />
                </section>
                <div
                    className="text-center text-lg py-8"
                >
                    Montpelier Vineyard’s goal is to produce great tasting organic wines in Vermont. We believe that good wine begins in the vineyard, and that with healthy soil and vigorous vines we can create spirited wines.
                </div>
                <section className="pb-20">
                    <h3
                        className="text-3xl text-center text-marv font-medium leading-10"
                    >Why Organic, Why Biodynamic?</h3>
                    <br/>
                    <div
                        className="font-normal text-lg text-black leading-8 pt-2"
                    >
                        We believe that exceptional wines are made in the vineyard and finished in the cellar. As such, quality wines can only be made from quality grapes. We believe that the land itself contributes to the distinctive ecosystem of the grapevine and each region produces uniquely flavored grapes and thus wines. We follow biodynamic principles in the vineyard and our winery. We apply horn manure to the soil and spray our vines with minute quantities of ground quartz, to stimulate growth in the vineyard. We adhere to the biodynamic calendar for bottling and racking our wines.
                    </div>
                    <br/>
                    <div
                        className="font-normal text-lg text-black leading-8 pt-2"
                    >
                        Soil and weather have the biggest impact on grapevine growth and therefore on the quality and quantity of grapes. High quality grapes thrive on poor soil as the grapevine’s roots are forced to grow deeper in order to seek out water and nutrients. A shortage of water forces the vines to develop grapes, not foliage, which results in smaller berries that have a full flavor. Colder weather means a shorter growing season and more acidity in the wine.
                    </div>
                    <br />
                    <div
                        className="font-normal text-lg text-black leading-8 pt-2"
                    >
                        In addition to these climate, weather, and soil conditions, each region has its own unique microbes and yeasts that live on the skin of the grape and contribute to the terroir of the wine. Large amounts of pesticides and fungicides can affect the development of these unique microbes and change the flavor that would have been produced.
                    </div>
                    <br />
                    <div
                        className="font-normal text-lg text-black leading-8 pt-2"
                    >
                        The authentic way to produce a wine that possesses the genuine flavor of the land and clear terroir is to grow grapes organically. We use sustainable, organic and biodynamic farming practices and take those principles into the winery as well. We walk the vineyard daily and carefully tend to each vine. We control grass and weeds using organic mulch at the base of the vines along with hand hoeing. Our relationship to the vines produces strong vines and high quality grapes. Combining our farming practices with our unique location translates into wines of distinction.
                    </div>
                </section>
                <section>
                    
                </section>
            </Layout>
        </React.Fragment>
    )
}

export default About