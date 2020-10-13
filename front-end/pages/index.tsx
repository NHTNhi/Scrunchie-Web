import Head from './Head'
import Link from 'next/link';
import { Row, Col, Button } from 'antd';
import MainLayout from './MainLayout';
import styles from './index.less';
import ScrunchieHeader from './ScrunchieHeader';
import ScrunchieFooter from './ScrunchieFooter';
import React from 'react';

export default function Home() {
  const meta: any = {
  };
  return (
    <>
      <ScrunchieHeader />
      <div className={styles.index}>
        <div className={styles.indexBox}>
          <div className={styles.menu}>
            <ul>
              <li><a>Skincare</a></li>
              <li><a>Make up</a></li>
              <li><a>Perfume</a></li>
              <li><a>Body and Hair</a></li>
              <li><a>Functional foods</a></li>
            </ul>
          </div>
          <Row gutter={[20, 20]} className={styles.banner}>
            <Col span={2} className={styles.products}>
              <Link href={`/`} as={`/`}>
                <a>
                  <img
                    src="../static/image/slide1.png"
                    alt={'SCRUNCHIE'}
                  />
                </a>
              </Link>
            </Col>
            <Col span={2} className={styles.details}>
              <h5>ONLY 7 DAYS</h5>
              <h1>Weekend Brand Sale</h1>
              <p>We offer worldwide free shipping <p />and free gifts for all orders</p>
            </Col>
          </Row>

        </div>
      </div>
      <ScrunchieFooter />
    </>
  )
}
