import PropTypes from 'prop-types';
import { baseQueryUrl } from '../lib/settings';
import ReviewCard from '../components/ReviewCard';

import styles from '../styles/reviews.module.css';

const Reviews = ({ reviews }) => {
    return (
        <article>
            <h2 className="page-heading">Reviews</h2>

            {reviews?.length > 0
                ? reviews.map((review, index) => (
                    <ReviewCard review={review} key={index} />
                ))
                : <>An error occurred fetching reviews.</>
            }
        </article>
    );
};

Reviews.propTypes = {
    reviews: PropTypes.array,
};

export async function getStaticProps() {
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
