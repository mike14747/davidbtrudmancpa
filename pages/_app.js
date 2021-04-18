import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import HeaderContext from '../context/headerContext';

import '../styles/my_reset.css';
import '../styles/app_style.css';

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
    const baseQueryUrl = 'https://7xgplcbh.api.sanity.io/v1/data/query/production?query=';

    const query = encodeURIComponent('*[_type == "header"][0]{logoText, motto, "imageUrl": profileImage.asset->url}');
    const url = `${baseQueryUrl}${query}`;
    const headerContentJSON = await fetch(url).then(res => res.json().catch(error => console.log(error)));

    return {
        headerData: (headerContentJSON && headerContentJSON.result) || [],
    };
};

export default MyApp;