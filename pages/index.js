import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';
import noContainer from '../utils/noContainer';
import { baseQueryUrl } from '../utils/settings';

import styles from '../styles/home.module.css';

const Home = ({ blockContent }) => {
    return (
        <>
            <article>
                <section>
                    <h2>Overview</h2>
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
                        <img ng-src="https://static.thumbtackstatic.com/media/pages/profile/standard-widgets/pro-svg/white/2016.svg" src="https://static.thumbtackstatic.com/media/pages/profile/standard-widgets/pro-svg/white/2016.svg" className={styles.thumbtackImage} />
                    </a>
                </aside>
                <aside className={styles.paypal}>
                    <img src="/images/paypal.png" alt="PayPal" className={styles.paypalLogo} />
                    <div className={styles.paymentText}>
                        Make a payment via PayPal:
                    </div>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input type="hidden" name="hosted_button_id" value="PUDKSC6R8FCDL" />
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" className={styles.buyNow} />
                        <img alt="Paypal" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
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
    const query = encodeURIComponent('*[_type == "webpageText" && name == "Homepage"][0]{pageText}');
    const url = `${baseQueryUrl}${query}`;
    const blockContentJSON = await fetch(url).then(res => res.json().catch(error => console.log(error)));

    return {
        props: {
            blockContent: (blockContentJSON && blockContentJSON.result) || [],
        },
        revalidate: 600, // page regeneration can occur in 10 minutes
    };
}

export default Home;
