import styles from '../styles/header.module.css';

const Header = () => {
    return (
        <header className={'container ' + styles.header}>
            <h1 className={styles.logoText}>David B Trudman CPA</h1>
            <h6 className={styles.motto}>I help you make good choices along your journey</h6>
        </header>
    );
};

export default Header;
