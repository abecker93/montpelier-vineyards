import React from 'react';

const Layout = ({ children }) => {
    

    return (
        <section
            className="layout px-5 lg:px-16 relative mx-auto"
        >
            {children}
        </section>
    )
}

export default Layout