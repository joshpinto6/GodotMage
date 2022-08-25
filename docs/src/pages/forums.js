import React from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { useColorMode } from '@docusaurus/theme-common';


import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Discussion Forums</h1>
        <p className="hero__subtitle"></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="../docs/category/tutorials">
            🐱 Open on Github
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`GodotMage Discussions`}>
      <Head>
      <script src="https://giscus.app/client.js"
        data-repo="joshpinto6/GodotMage"
        data-repo-id="R_kgDOHyCIow"
        data-category="Tutorial Discussions"
        data-category-id="DIC_kwDOHyCIo84CRA2O"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="0"
        data-emit-metadata="1"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="en"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script> 
     </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures/>
        
            <div class="giscus" style={{margin: "0px 60px", width: "calc(100% - 60px)", marginBottom: "80px"}}>

            </div>
      </main>
    </Layout>
  );
}
