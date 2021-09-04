import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from '../components/Zeader';
import Navbar from '../components/Zavbar';
import Footer from '../components/Zooter';

import HeaderContext from '../context/headerContext';
import { baseQueryUrl } from '../lib/settings';

import '../styles/globals.css';

function MyApp({ Component, pageProps, headerData }) {
    return (
        <>
            <Head>
                <title>David B Trudman CPA</title>
            </Head>
            <HeaderContext.Provider value={headerData}>
                <Header />
            </HeaderContext.Provider>
            <Navbar />
            <main className="main-container"><Component {...pageProps} /></main>
            <Footer />

            <style jsx global>{`
                #__next {
                    display: flex;
                    flex-direction: column;
                    min-height: 80vh;
                }
                html,
                body {
                    height: 100%;
                    background-color: #ffffff;
                    line-height: 1.50;
                }
            `}</style>
        </>
    );
}

MyApp.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.any,
    headerData: PropTypes.object,
};

MyApp.getInitialProps = async () => {
    const query = encodeURIComponent('*[_type == "header"][0]{logoText, motto, "imageUrl": profileImage.asset->url}');
    const url = `${baseQueryUrl}${query}`;
    const headerContentJSON = await fetch(url).then(res => res.json().catch(error => console.log(error)));

    return {
        headerData: (headerContentJSON?.result) || {},
    };
};

export default MyApp;
