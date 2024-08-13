import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Craft Code Visually',
    Svg: require('@site/static/img/meetPhoenixG1.svg').default,
    description: (
      <>
          Live previews eliminate guesswork,

          making web development quicker and less stressful.
      </>
    ),
  },
  {
    title: 'Runs Everywhere',
    Svg: require('@site/static/img/allSystems.svg').default,
    description: (
      <>
          Phoenix Code is natively available for macOS, Windows, and Linux.

          ChromeOS or alternative platforms? Get the web version on any browser-enabled device.
      </>
    ),
  },
  {
    title: 'Lightweight & Fast',
    Svg: require('@site/static/img/rocket.svg').default,
    description: (
      <>
          Experience lightning-fast coding on any device - whether it be on a web browser or our desktop apps.
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
