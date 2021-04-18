import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';
import noContainer from '../utils/noContainer';

// import styles from '../styles/home.module.css';

const Home = ({ blockContent }) => {
    return (
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
    );
};

Home.propTypes = {
    blockContent: PropTypes.object,
};

export async function getStaticProps(context) {
    const baseQueryUrl = 'https://7xgplcbh.api.sanity.io/v1/data/query/production?query=';

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
