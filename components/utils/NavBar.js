import React, {useState} from 'react';
import Link from 'next/link'
import { Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

import Layout from './Layout'

const links = [
    { href: '/', label: 'Home' },
    { href: '/our-wines', label: 'Our Wines' },
    { href: '/where-to-buy', label: 'Where to Buy' },
    { href: '/about', label: 'About' },
    { href: 'https://vinoshipper.com/shop/montpelier_vineyards_llc', label: 'Shop Now' },
    { href: '/tastings', label: 'Tastings' },
]

const NavLink = ({ href, children, className = '' }) => {
    if (href.startsWith('http')) {
        return <a className={className} href={href}>{children}</a>
    }

    return (
        <Link href={href}>
            <a className={className}>{children}</a>
        </Link>
    )
}

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <React.Fragment>
            <Layout>
                <header
                    className="py-5 flex items-center justify-between"
                >
                    <Link href="/">
                        <a
                            className="w-64 max-w-xs cursor-pointer"
                        >
                            <img
                                src="/Montpelier_Vinyards_logo.svg"
                                alt="Montpelier Vineyards logo"
                            />
                        </a>
                    </Link>

                    <nav
                        className="hidden lg:flex items-center gap-8 text-xl text-marv"
                    >
                        {links.map((link) => (
                            <NavLink key={link.href} href={link.href}>
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="lg:hidden">
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className="text-marv w-8 h-8"
                            aria-label={showMenu ? 'Close menu' : 'Open menu'}
                        >
                            {showMenu ?
                                <XIcon/>
                                :
                                <MenuIcon/>
                            }
                        </button>
                                    </div>
                </header>

                <Transition
                    show={showMenu}
                    as="nav"
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <ul className="lg:hidden bg-white bg-opacity-70 text-marv text-xl leading-10 p-5 mb-5">
                        {links.map((link) => (
                            <li key={link.href}>
                                <NavLink href={link.href}>{link.label}</NavLink>
                            </li>
                        ))}
                    </ul>
                </Transition>

                <h4
                    className="text-center text-lg xl:text-2xl text-marv"
                >“Healthy soil, vigorous vines, spirited wines”</h4>
            </Layout>
        </React.Fragment>
    )
}

export default NavBar
