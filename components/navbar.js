import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from '../styles/navbar.module.css';

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className={'container ' + styles.navbar}>
            <div className={styles.nav}>
                <div className={styles.navLeft}>
                    {router.pathname === '/'
                        ? <div className={styles.navItemCurrent}>Home</div>
                        : <Link href="/">
                            <a className={styles.navItem}>Home</a>
                        </Link>
                    }
                    {router.pathname === '/services'
                        ? <div className={styles.navItemCurrent}>Services</div>
                        : <Link href="/services">
                            <a className={styles.navItem}>Services</a>
                        </Link>
                    }
                    {router.pathname === '/reviews'
                        ? <div className={styles.navItemCurrent}>Reviews</div>
                        : <Link href="/reviews">
                            <a className={styles.navItem}>Reviews</a>
                        </Link>
                    }
                    {router.pathname === '/contact'
                        ? <div className={styles.navItemCurrent}>Contact</div>
                        : <Link href="/contact">
                            <a className={styles.navItem}>Contact</a>
                        </Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
