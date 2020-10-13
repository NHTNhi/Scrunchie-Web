import * as React from 'react';
import styles from './MainLayout.less';
import ScruchieHeader from './ScrunchieHeader.less';
import ScrunchieFooter from './ScrunchieFooter.less';

const MainLayout = (props: any) => {
    return (
        <div className={styles.MainLayout}>
            <ScruchieHeader />
            <div className={styles.contentLayout}>{props.children}</div>
            <ScrunchieFooter />
        </div>
    )
}

export default MainLayout;