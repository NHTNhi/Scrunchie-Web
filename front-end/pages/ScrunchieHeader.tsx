import React from 'react';
import Link from 'next/link';

import {
    MenuOutlined,
    SearchOutlined,
    ShoppingOutlined,
    UserOutlined
} from '@ant-design/icons'
import { useWindowSize } from '@reach/window-size';

import styles from './ScrunchieHeader.less';
import { ROUTES } from './config';



const ScrunchieHeader = () => {
    const screenWidth = useWindowSize().width;

    return (
        <div className={styles.scrunchieHeader}>
            <div className={styles.scrunchieHeaderMargin} />
            <div className={styles.scrunchieHeaderFloat}>
                <div className={styles.scrunchieHeaderFloatBox}>
                    <div className={styles.menuButton}>
                        <MenuOutlined />
                    </div>
                    <div className={styles.searchButton}>
                        <SearchOutlined />
                    </div>
                    <div className={styles.logo}>
                        <Link href={`/${ROUTES.INDEX}`} as={`/${ROUTES.INDEX}`}>
                            <a>
                                <img
                                    src="../static/image/logo-white.png"
                                    alt={'SCRUNCHIE'}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className={styles.userButton}>
                        <UserOutlined />
                    </div>
                    <div className={styles.cartButton}>
                        <ShoppingOutlined />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ScrunchieHeader;