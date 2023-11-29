import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Enhanced Inline Editors',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          Dive into a seamless coding experience with PhCode's inline editors, allowing you to edit CSS directly
          related to specific elements, streamlining your workflow without tab-switching.
      </>
    ),
  },
  {
    title: 'Live Preview',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          Instantly see your HTML and CSS changes come to life in the browser with PhCode's Live Preview,
          merging desktop efficiency with in-browser practicality for a time-saving development process.
      </>
    ),
  },
  {
    title: 'Superior Preprocessor Support',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          Elevate your preprocessor game with PhCode's advanced features for LESS and SCSS,
          including Quick Edit and Live Highlight, for a more intuitive and productive coding journey.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
