import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Knowledge Management for Decentralized Organizations',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docks is a knowledge management system for decentralized organizations. It is surfaces DAO-curated knowledge to the end users to surface the right information at the right time.
      </>
    ),
  },
  {
    title: 'Just-in-Time Context',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Contributors need sufficient context to add value to a project. The problem is that context is often scattered across multiple tools and channels. Docks surfaces the right information at the right time to help contributors get up to speed quickly.
      </>
    ),
  },
  {
    title: 'Raid Guild Cohort VI + Hats Protocol',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        This working demo was incubated as part of Raid Guild Cohort VI, and was inspired for and by the Hats Protocol community. Shout out to those amazing organizations. 
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
