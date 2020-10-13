import React from 'react';
import Link from 'next/link';

import { useWindowSize } from '@reach/window-size';

import styles from './ScrunchieFooter.less';
import { ROUTES } from './config';
import { FacebookFilled, FacebookOutlined, InstagramFilled, LinkedinFilled, TwitterCircleFilled } from '@ant-design/icons';


const ScrunchieFooter = () => {
    const screenWidth = useWindowSize().width;

    return (
        <div className={styles.scrunchieFooter}>
            <div className={styles.scrunchieFooterBox}>
                <div className={styles.logo}>
                    <Link href={`/${ROUTES.INDEX}`} as={`/${ROUTES.INDEX}`}>
                        <a>
                            <img
                                src="../static/image/logo-black.png"
                                alt={'SCRUNCHIE'}
                            />
                        </a>
                    </Link>
                </div>

                <div className={styles.connections}>
                    <ul>
                        <li><a>BRANDS</a></li>
                        <li><a>MEDIA</a></li>
                        <li><a>PG AGENCIES</a></li>
                    </ul>
                </div>

                <hr className={styles.line} />

                <div className={styles.connections}>
                    <ul>
                        <li><a>BRAND DIRECTORY</a></li>
                        <li><a>CASE STUDIES</a></li>
                        <li><a>BLOG</a></li>
                        <li><a>PRICING</a></li>
                    </ul>
                </div>

                <div className={styles.connections}>
                    <ul>
                        <li><a>FAQ</a></li>
                        <li><a>ABOUT</a></li>
                        <li><a>CONTACT</a></li>
                    </ul>
                </div>

                <div className={styles.socials}>
                    <ul>
                        <li><a><FacebookFilled /></a></li>
                        <li><a><TwitterCircleFilled /></a></li>
                        <li><a><InstagramFilled /></a></li>
                        <li><a><LinkedinFilled /></a></li>
                    </ul>
                </div>

                <div className={styles.credit}>
                    © 2020 - Ecommerce software by NHTN
                </div>
            </div>


        </div >
    )
}

export default ScrunchieFooter;