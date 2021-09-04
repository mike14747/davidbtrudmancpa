import { useContext } from 'react';
import Image from 'next/image';
import HeaderContext from '../context/headerContext';

import styles from '../styles/Header.module.css';

const Header = () => {
    const headerData = useContext(HeaderContext);

    return (
        <header className={'container ' + styles.header}>
            <div className={styles.headerLeft}>
                <h1 className={styles.logoText}>
                    {headerData?.logoText
                        ? <>{headerData.logoText}</>
                        : <>David B Trudman CPA</>
                    }
                </h1>
                <h4 className={styles.motto}>
                    {headerData?.motto
                        ? <>{headerData.motto}</>
                        : <>I help you make good choices along your journey</>
                    }
                </h4>
            </div>
            {headerData?.imageUrl &&
                <div className={styles.headerRight}>
                    <figure aria-label="David B Trudman" className={styles.profileImageFig}>
                        <Image src={headerData.imageUrl + '?w=400&h=400&fit=min'} role="presentation" alt="David B Trudman" layout="fill" />
                    </figure>
                </div>
            }
        </header>
    );
};

export default Header;
