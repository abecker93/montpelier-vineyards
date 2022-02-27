import React, {useState} from 'react';
import Layout from './Layout'
// import Contact from '../forms/Contact'
// import NewForm from '../forms/NewForm'
import Link from 'next/link'

const Footer = () => {

    const [ formFields, setFormFields ] = useState({
        name: '',
        email: '',
        message: ''
    })

    const {
        name,
        email,
        message
    } = formFields

    const submitHandler = (e) => {
        console.log('hello')
        e.preventDefault()

    }

    return (
            <section className="bg-brown bottom-0 w-full py-8">
                <Layout>
                    <section
                        className="grid lg:grid-cols-2 justify-center place-items-center lg:place-items-start"
                    >
                        <div>
                        <div className="flex items-center ml-5 lg:ml-0">
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
                                    className="hidden md:block text-center lg:text-left text-seaweed pt-5"
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
                        <div className="pt-5 lg:pt-0 w-full">
                            {/* <Contact/> */}
                            <div 
                                    className="block md:hidden text-center lg:text-left text-seaweed pt-5"
                                >
                                    Montpelier Vineyards
                                    <br/>
                                    2446 Elm Street
                                    <br/>
                                    Montpelier, Vermont 05602
                                    <br/>
                                    802-522-4479
                                </div>
                            <div
                                className="text-center lg:text-left md:text-xl text-marv pt-5"
                            >
                                <a
                                    className="mt-5 md:mt-0 md:ml-5 py-4 px-8 h-10 rounded-xl bg-marv text-beige"
                                    href="mailto:dkbecker@montpeliervineyards.com"
                                >
                                    Contact us!
                                </a>
                            </div>
                        </div>
                    </section>
                    <section
                        className="grid md:grid-cols-6 items-center justify-items-center md:pt-5"
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
                    <Link
                        href="https://www.realorganicproject.org/"
                    >
                        <a 
                            target="_blank"
                            alt="Real Organic Project"
                            rel="noreferrer noopener"
                        >
                            <img
                            src="/rop-logo-regular.png"
                            className="w-20 pt-5 md:pt-0"
                            alt="Real Organic Project"
                            />
                        </a>
                    </Link>
                        <div></div>
                    </section>
                    <div
                        className="text-black text-center font-normal pt-5"
                    >
                        ©Montpelier Vineyards 2022
                    </div>
                </Layout>
            </section>
    )
}

export default Footer
