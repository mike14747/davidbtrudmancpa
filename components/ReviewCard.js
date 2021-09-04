import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';
import noContainer from '../lib/noContainer';

import styles from '../styles/ReviewCard.module.css';

const ReviewCard = ({ review }) => {
    return (
        <section className={styles.review}>
            <h3 className={styles.reviewer}>
                {review.reviewer} <span className={styles.reviewDate}>({review.date})</span>
            </h3>
            <div className={styles.reviewText}>
                <BlockContent
                    blocks={review.review}
                    serializers={noContainer}
                />
            </div>
        </section>
    );
};

ReviewCard.propTypes = {
    review: PropTypes.object,
};

export default ReviewCard;
