import { useContext } from 'react';
import HeaderContext from '../context/headerContext';

import styles from '../styles/header.module.css';

const Header = () => {
    const headerData = useContext(HeaderContext);

    return (
        <header className={'container ' + styles.header}>
            <div className={styles.headerLeft}>
                <h1 className={styles.logoText}>
                    {headerData && headerData.logoText
                        ? <>{headerData.logoText}</>
                        : <>David B Trudman CPA</>
                    }
                </h1>
                <h6 className={styles.motto}>
                    {headerData && headerData.motto
                        ? <>{headerData.motto}</>
                        : <>I help you make good choices along your journey</>
                    }
                </h6>
            </div>
            {headerData && headerData.imageUrl &&
                <div className={styles.headerRight}>
                    <img src={headerData.imageUrl} alt="David B Trudman" title="David B Trudman" className={styles.profileImage} />
                </div>
            }
        </header>
    );
};

export default Header;
