import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';
import noContainer from '../lib/noContainer';
import { baseQueryUrl } from '../lib/settings';

import styles from '../styles/contact.module.css';

const Contact = ({ blockContent, contactInfo }) => {
    return (
        <article>
            <h2 className="page-heading">Contact</h2>

            <div className={styles.contactContainer}>
                {blockContent && blockContent.pageText
                    ? <BlockContent
                        blocks={blockContent.pageText}
                        serializers={noContainer}
                    />
                    : <>An error occurred fetching the summary data.</>
                }
            </div>

            {contactInfo && (contactInfo.email || contactInfo.phone)
                ? <address className={styles.contactContainer}>
                    <h5 className={styles.contactHeading}>
                        Contact me:
                    </h5>
                    {contactInfo.email &&
                        <p className={styles.contactItem}>
                            Email: <a href={'mailto:' + contactInfo.email}>{contactInfo.email}</a>
                        </p>
                    }
                    {contactInfo.phone &&
                        <p className={styles.contactItem}>
                            Phone: {contactInfo.phone}
                        </p>
                    }
                </address>
                : <p>An error occurred fetching the contact info.</p>
            }
        </article>
    );
};

Contact.propTypes = {
    blockContent: PropTypes.object,
    contactInfo: PropTypes.object,

};

export async function getStaticProps(context) {
    const query1 = encodeURIComponent('*[_type == "webpageText" && name == "Contact"][0]{pageText}');
    const url1 = `${baseQueryUrl}${query1}`;
    const blockContentJSON = await fetch(url1).then(res => res.json().catch(error => console.log(error)));

    const query2 = encodeURIComponent('*[_type == "contactInfo"][0]{email, phone}');
    const url2 = `${baseQueryUrl}${query2}`;
    const contactJSON = await fetch(url2).then(res => res.json().catch(error => console.log(error)));

    return {
        props: {
            blockContent: (blockContentJSON && blockContentJSON.result) || {},
            contactInfo: (contactJSON && contactJSON.result) || {},
        },
        revalidate: 600, // page regeneration can occur in 10 minutes
    };
}

export default Contact;
