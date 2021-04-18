import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import '../styles/my_reset.css';
import '../styles/app_style.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>David B Trudman CPA</title>
            </Head>
            <Header />
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
};

export default MyApp;
