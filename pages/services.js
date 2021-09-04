import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';
import noContainer from '../lib/noContainer';
import { baseQueryUrl } from '../lib/settings';

import styles from '../styles/services.module.css';

const Services = ({ blockContent }) => {
    return (
        <article>
            <h2 className="page-heading">Services</h2>

            <section className={styles.servicesContainer}>
                {blockContent && blockContent.pageText
                    ? <BlockContent
                        blocks={blockContent.pageText}
                        serializers={noContainer}
                    />
                    : <>An error occurred fetching the summary data.</>
                }
            </section>
        </article>
    );
};

Services.propTypes = {
    blockContent: PropTypes.object,
};

export async function getStaticProps(context) {
    const query = encodeURIComponent('*[_type == "webpageText" && name == "Services"][0]{pageText}');
    const url = `${baseQueryUrl}${query}`;
    const blockContentJSON = await fetch(url).then(res => res.json().catch(error => console.log(error)));

    return {
        props: {
            blockContent: (blockContentJSON && blockContentJSON.result) || {},
        },
        revalidate: 600, // page regeneration can occur in 10 minutes
    };
}

export default Services;
