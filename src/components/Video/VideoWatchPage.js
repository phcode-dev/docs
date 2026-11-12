import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import RecordedVideo from './RecordedVideo';
import styles from './VideoWatchPage.module.css';

export default function VideoWatchPage({video, guideLinkText = 'Read the full guide'}) {
  const {withBaseUrl} = useBaseUrlUtils();
  const poster = withBaseUrl(video.poster, {absolute: true});
  const seconds = Math.round(Number(video.metadata.duration.slice(2, -1)));

  return <Layout title={`${video.title} — video`} description={video.metadata.description}>
    <Head>
      <meta property="og:image" content={poster} />
      <meta name="twitter:image" content={poster} />
    </Head>
    <main className={styles.main}>
      <article aria-labelledby="video-title">
        <header>
          <h1 id="video-title">{video.title}</h1>
          <p className={styles.duration}>{seconds} seconds · On-screen instructions</p>
        </header>
        <RecordedVideo video={video} className={styles.player} />
        <div className={`${styles.description} ${styles.links}`}>
          <p>{video.context}</p>
          <p><Link to={video.guidePath}>{guideLinkText}</Link></p>
          <details className={styles.transcript}>
            <summary>Read the video’s on-screen instructions</summary>
            <ol>
              {video.instructions.map(instruction => <li key={instruction}>{instruction}</li>)}
            </ol>
          </details>
        </div>
      </article>
    </main>
  </Layout>;
}
