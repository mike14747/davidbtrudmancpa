import { useRouter } from 'next/router';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className={'container ' + styles.navbar}>
            <div className={styles.nav}>
                <div className={styles.navLeft}>
                    {router.pathname === '/'
                        ? <div className={styles.navItemCurrent}>Home</div>
                        : <div className={styles.navItem} onClick={() => router.push('/')}>
                            Home
                        </div>
                    }
                    {router.pathname === '/services'
                        ? <div className={styles.navItemCurrent}>Services</div>
                        : <div className={styles.navItem} onClick={() => router.push('/services')}>
                            Services
                        </div>
                    }
                    {router.pathname === '/reviews'
                        ? <div className={styles.navItemCurrent}>Reviews</div>
                        : <div className={styles.navItem} onClick={() => router.push('/reviews')}>
                            Reviews
                        </div>
                    }
                    {router.pathname === '/contact'
                        ? <div className={styles.navItemCurrent}>Contact</div>
                        : <div className={styles.navItem} onClick={() => router.push('/contact')}>
                            Contact
                        </div>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
