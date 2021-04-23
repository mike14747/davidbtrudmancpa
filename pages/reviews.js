import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';
import noContainer from '../lib/noContainer';
import { baseQueryUrl } from '../lib/settings';

import styles from '../styles/reviews.module.css';

const Reviews = ({ reviews }) => {
    return (
        <article>
            <section>
                <h2>Reviews</h2>
            </section>

            <section>
                {reviews && reviews.length > 0
                    ? reviews.map((review, index) => (
                        <div key={index} className={styles.review}>
                            <div className={styles.reviewer}>
                                {review.reviewer} <span className={styles.reviewDate}>({review.date})</span>
                            </div>
                            <div className={styles.reviewText}>
                                <BlockContent
                                    blocks={review.review}
                                    serializers={noContainer}
                                />
                            </div>
                        </div>
                    ))
                    : <>An error occurred fetching the reviews.</>
                }
            </section>
        </article>
    );
};

Reviews.propTypes = {
    reviews: PropTypes.array,
};

export async function getStaticProps(context) {
    const query = encodeURIComponent('*[_type == "review"]{reviewer, date, review}');
    const url = `${baseQueryUrl}${query}`;
    const reviewsJSON = await fetch(url).then(res => res.json().catch(error => console.log(error)));

    return {
        props: {
            reviews: (reviewsJSON && reviewsJSON.result) || [],
        },
        revalidate: 600, // page regeneration can occur in 10 minutes
    };
}

export default Reviews;
