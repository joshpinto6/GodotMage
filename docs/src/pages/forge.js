import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';


import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">GodotForge</h1>
        <p className="hero__subtitle">Free and Paid Godot Plugins, Development Environments, and workshops. Coming Soon. 🎉</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="../docs/category/tutorials">
            📗 Back to Tutorials
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
      title={`GodotForge`}
      description="Free and Paid Workshops, Dev Environments, and Plugins.">
      <HomepageHeader />
      <main>
        <HomepageFeatures/>
        <div style={{margin: "0px 60px", marginBottom:"80px"}}>
            <h1>Join the Forge Today. Well maybe not today, today.</h1>
            <p>Check back soon. This is the future home of awesome. 😎</p>
            </div>
      </main>
    </Layout>
  );
}
