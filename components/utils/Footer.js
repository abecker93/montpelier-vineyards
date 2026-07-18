import React from 'react';
import Layout from './Layout'

const Footer = () => {

    return (
        <footer className="bg-brown w-full py-8">
            <Layout>
                <section className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-5">
                            <a href="http://www.facebook.com/MontpelierVineyards" target="_blank" rel="noreferrer noopener">
                                <img src="/facebook-logo.png" alt="Montpelier Vineyards — Facebook" className="w-10" />
                            </a>
                            <a href="https://www.instagram.com/montpelier.vineyards/" target="_blank" rel="noreferrer noopener">
                                <img src="/instagram-logo.png" alt="Montpelier Vineyard — Instagram" className="w-10" />
                            </a>
                            <a href="https://www.wunderground.com/personal-weather-station/dashboard?ID=KVTMONTP6" target="_blank" rel="noreferrer noopener">
                                <img src="/weather-underground-logo.png" alt="Montpelier Vineyard — Weather Underground" className="w-10" />
                            </a>
                        </div>
                        <address className="not-italic text-seaweed pt-5 leading-7">
                            Montpelier Vineyards
                            <br/>
                            2446 Elm Street
                            <br/>
                            Montpelier, Vermont 05602
                            <br/>
                            802-522-4479
                        </address>
                    </div>
                    <div className="text-center md:text-right md:text-xl text-marv">
                        <a
                            className="inline-block py-3 px-8 rounded-xl bg-marv text-beige"
                            href="mailto:dkbecker@montpeliervineyards.com">
                            Contact us!
                        </a>
                    </div>
                </section>

                <section className="flex flex-wrap items-center justify-center gap-8 pt-8">
                    <a href="http://www.vermontgrapeandwinecouncil.com/" target="_blank" rel="noreferrer noopener">
                    <img
                        src="/vt-grape-wine-council.webp"
                        className="w-32"
                        alt="Vermont Grape Wine Council logo"
                    />
                    </a>
                    <a href="https://nofavt.org/" target="_blank" rel="noreferrer noopener">
                    <img
                        src="/vt-certified-organic.gif"
                        className="w-20"
                        alt="Vermont Certified Organic logo"
                    />
                    </a>
                    <a href="https://www.realorganicproject.org/" target="_blank" rel="noreferrer noopener">
                    <img
                        src="/rop-logo-regular.png"
                        className="w-20"
                        alt="Real Organic Project"
                    />
                    </a>
                </section>

                <div className="text-black text-center font-normal pt-5">
                    ©Montpelier Vineyards 2026
                </div>
            </Layout>
        </footer>
    );
}

export default Footer;
