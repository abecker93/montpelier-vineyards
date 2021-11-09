import React, {useState} from 'react';
import Link from 'next/link'
import { Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

import Layout from './Layout'

const NavBar = (props) => {

    const [showMenu, setShowMenu] = useState(false)

    // console.log("showMenu")

    return (
        <React.Fragment>
            {/* <Layout> */}
            <div
                className="py-5 lg:px-16 flex items-stretch content-center"
            >
                <div
                    className="flex items-stretch content-center xl:justify-between"
                >
                    <Link href="/">
                        <a
                            className="w-8/12 md:w-1/4 cursor-pointer"
                        >
                            <img
                                
                                src="/Montpelier_Vinyards_logo.svg"
                                alt="Montpelier Vineyards logo"
                            />
                        </a>
                    </Link>
                    <span
                        className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-marv self-center absolute  md:right-5 lg:right-16 xl:relative xl:right-0 hidden md:inline"
                    >
                            <Link
                                href="/"
                            >
                                <a>Home</a>
                            </Link>
                            <Link
                                href="/our-wines"
                            >
                                <a
                                    className="pl-5 lg:pl-10"
                                >Our Wines</a>
                            </Link>
                            <Link
                                href="/where-to-buy"
                            >
                                <a
                                    className="pl-5 lg:pl-10"
                                >Where to Buy</a>
                            </Link>
                            <Link
                                href="/about"
                            >
                                <a
                                    className="pl-5 lg:pl-10"
                                >About</a>
                            </Link>
                            <Link
                                href="/shop-now"
                            >
                                <a
                                    className="pl-5 lg:pl-10"
                                >Shop Now</a>
                            </Link>
                    </span>
                    <span
                        className="self-center absolute right-5 z-50"
                    >
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className="text-marv w-8 h-8 md:hidden"
                        >
                            {showMenu ?
                                <XIcon/>
                                :
                                <MenuIcon/>
                            }
                        </button>
                    </span>
                </div>
            </div>
            <span
                    className="navbar block md:hidden self-center relative mx-auto"
                    >
                            {showMenu ?
                            <Transition
                                    show={showMenu}
                                    as="div"
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <div
                                        // className="absolute z-30 mt-5 sm:mt-10 w-72 -right-1 xs:right-6 xsm:right-12 sm:right-1/3"
                                        className="relative mx-auto w-[320px]"
                                    >
                                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 mx-10">
                                            <div className="relative bg-white p-7">
                                                <ul>
                                                    <li>
                                                        <Link
                                                            href="/"
                                                        >
                                                            <a>Home</a>
                                                        </Link>
                                                    </li>
                                                    <li className="pt-3">
                                                        <Link
                                                            href="/our-wines"
                                                        >
                                                            <a>Our Wines</a>
                                                        </Link>
                                                    </li>
                                                    <li className="pt-3">
                                                        <Link
                                                            href="/where-to-buy"
                                                        >
                                                            <a>Where to Buy</a>
                                                        </Link>
                                                    </li>
                                                    <li className="pt-3">
                                                        <Link
                                                            href="/about"
                                                        >
                                                            <a>About</a>
                                                        </Link>
                                                    </li>
                                                    <li className="pt-3">
                                                        <Link
                                                            href="/shop-now"
                                                        >
                                                            <a>Shop Now</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Transition>
                            : null}
                    </span>
                    <h4
                        className="text-center text-lg xl:text-2xl 2xl:text-3xl text-marv"
                    >“Healthy soil, vigorous vines, spirited wines”</h4>
            {/* </Layout> */}
        </React.Fragment>
    )
}

export default NavBar