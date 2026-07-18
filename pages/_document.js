import Document, { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = () => {

    return (
        <Html lang="en">
            <Head>
                <meta property="og:title" content="Montpelier Vineyards" key="title" />
                <link rel="icon" href="/mv_wine_favicon.svg" />
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                    integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                    crossOrigin=""
                />
            </Head>
            <body
            >
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default MyDocument
