import styles from '../styles/header.module.css';

const Header = () => {
    return (
        <header className={'container ' + styles.header}>
            <div className={styles.headerLeft}>
                <h1 className={styles.logoText}>David B Trudman CPA</h1>
                <h6 className={styles.motto}>I help you make good choices along your journey</h6>
            </div>
            <div className={styles.headerRight}>
                <img src="/images/profile_pic.jpg" alt="David B Trudman" title="David B Trudman" className={styles.profileImage} />
            </div>
        </header>
    );
};

export default Header;
