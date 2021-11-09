import React from 'react';
import Layout from './Layout'
import Contact from '../forms/Contact'
import Link from 'next/link'

const Footer = () => {


    return (
            <section className="bg-brown bottom-0 w-full py-8">
                <Layout>
                    <section
                        className="grid lg:grid-cols-2"
                    >
                        <div>
                        <div className="flex items-center">
                            <Link
                                href="http://www.facebook.com/MontpelierVineyards"
                            >
                                <a
                                    alt="Montpelier Vineyards — Facebook"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >    
                                    <button>
                                        <img
                                            src="/facebook-logo.png"
                                            alt="Montpelier Vineyards — Facebook"
                                            className="w-10"
                                        />
                                    </button>
                                </a>
                            </Link>
                            <Link
                                href="https://www.instagram.com/montpelier.vineyards/"
                            >
                                <a
                                    rel="noreferrer noopener"
                                    target="_blank"
                                    alt="Montpelier Vineyards — Instagram"
                                >    
                                    <button>
                                        <img
                                            src="/instagram-logo.png"
                                            alt="Montpelier Vineyard — Instagram"
                                            className="w-10 ml-5"
                                        />
                                    </button>
                                </a>
                            </Link>
                            <Link
                                href="https://www.wunderground.com/personal-weather-station/dashboard?ID=KVTMONTP6"
                            >
                                <a
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    alt="Montpelier Vineyards — Weather Underground"
                                >
                                    <button>
                                        <img
                                            src="/weather-underground-logo.png"
                                            alt="Montpelier Vineyard — Weather Underground"
                                            className="w-10 ml-5"
                                        />
                                    </button>
                                </a>
                            </Link>
                                <div>
                                </div>
                            </div>
                                <div 
                                    className="text-seaweed pt-5"
                                >
                                    Montpelier Vineyards
                                    <br/>
                                    2446 Elm Street
                                    <br/>
                                    Montpelier, Vermont 05602
                                    <br/>
                                    802-522-4479
                                </div>
                        </div>
                        <div className="pt-5 lg:pt-0">
                            <Contact/>
                        </div>
                    </section>
                    <section
                        className="grid md:grid-cols-5 items-center justify-items-center md:pt-5"
                    >
                        <div></div>
                        <Link
                            href="http://www.vermontgrapeandwinecouncil.com/"
                        >
                            <a 
                                target="_blank"
                                rel="noreferrer noopener"
                                alt="Vermont Grape and Wine Council"
                            >
                                <img
                                src="/vt-grape-wine-council.webp"
                                className="w-32 pt-5 md:pt-0"
                                alt="Vermont Grape Wine Council logo"
                                />
                            </a>
                        </Link>
                        <Link
                            href="http://www.vermontfresh.net/" 
                        >    
                            <a 
                                alt="Vermont Fresh"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <img
                                src="https://media.graphcms.com/output=format:jpg/FU1jNGsSRyKj4981mMkY?_ga=2.212780436.1804149618.1633573467-722458239.1630371733"
                                className="w-20 pt-5 md:pt-0"
                                alt="Vermont Fresh Network logo"
                                />
                            </a>
                        </Link>
                        <Link
                            href="https://nofavt.org/"
                        >
                            <a 
                                target="_blank"
                                alt="Vermont Certified Organic"
                                rel="noreferrer noopener"
                            >
                                <img
                                src="/vt-certified-organic.gif"
                                className="w-20 pt-5 md:pt-0"
                                alt="Vermont Certified Organic logo"
                                />
                            </a>
                        </Link>
                        <div></div>
                    </section>
                    <div
                        className="text-black text-center font-normal pt-5"
                    >
                        ©Montpelier Vineyards 2021
                    </div>
                </Layout>
            </section>
    )
}

export default Footer