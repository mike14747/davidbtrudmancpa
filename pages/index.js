import PropTypes from 'prop-types';
import Image from 'next/image';
import BlockContent from '@sanity/block-content-to-react';
import noContainer from '../lib/noContainer';
import { baseQueryUrl } from '../lib/settings';

import styles from '../styles/home.module.css';

const Home = ({ blockContent }) => {
    return (
        <>
            <article>
                <section>
                    <h2 className="page-heading">Overview</h2>
                </section>

                <section className="main-text">
                    {blockContent && blockContent.pageText
                        ? <BlockContent
                            blocks={blockContent.pageText}
                            serializers={noContainer}
                        />
                        : <>An error occurred fetching the summary data.</>
                    }
                </section>
            </article>

            <section className={styles.widgets}>
                <aside className={styles.thumbtack}>
                    <a className={styles.thumbtackLink} ng-href="https://www.thumbtack.com/-Skokie-IL/service/2576853" target="_blank" href="https://www.thumbtack.com/-Skokie-IL/service/2576853" rel="noreferrer">
                        <img alt="Thumbtack" ng-src="https://static.thumbtackstatic.com/media/pages/profile/standard-widgets/pro-svg/white/2016.svg" src="https://static.thumbtackstatic.com/media/pages/profile/standard-widgets/pro-svg/white/2016.svg" className={styles.thumbtackImage} />
                    </a>
                </aside>
                <aside className={styles.paypal}>
                    <figure aria-label="Paypal">
                        <img src="/images/paypal.png" alt="PayPal" role="presentation" className={styles.paypalLogo} />
                        {/* <Image src="/images/paypal.png" alt="PayPal" role="presentation" layout="fill" /> */}
                    </figure>
                    
                    <div className={styles.paymentText}>
                        Make a payment via PayPal:
                    </div>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input type="hidden" name="hosted_button_id" value="PUDKSC6R8FCDL" />
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" className={styles.buyNow} />
                        <img aria-hidden="true" alt="Paypal" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                </aside>
            </section>
        </>
    );
};

Home.propTypes = {
    blockContent: PropTypes.object,
};

export async function getStaticProps(context) {
    const query1 = encodeURIComponent('*[_type == "webpageText" && name == "Homepage"][0]{pageText}');
    const url1 = `${baseQueryUrl}${query1}`;
    const blockContentJSON = await fetch(url1).then(res => res.json().catch(error => console.log(error)));

    return {
        props: {
            blockContent: (blockContentJSON && blockContentJSON.result) || {},
        },
        revalidate: 600, // page regeneration can occur in 10 minutes
    };
}

export default Home;
