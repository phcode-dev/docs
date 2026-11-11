import React from 'react';
import Link from '@docusaurus/Link';
import TutorialVideo from './TutorialVideo';
import videos from '@site/src/data/image-tutorial-videos.json';
import styles from './ImageWatchPage.module.css';

// Keep the article and watch page tied to the same recording and metadata.
export default function ImageTutorialVideo({edition, className, showWatchLink = false}) {
  const video = videos[edition];
  return <><TutorialVideo
    metadata={video.metadata}
    poster={video.poster}
    width="1360" height="980" style={{width: '100%', height: 'auto'}}
    className={className} aria-label={video.label}>
    <source src={video.source} type="video/mp4" />
    <track kind="captions" src={video.captions} srcLang="en" label="English" />
    <a href={video.source}>Watch the {edition === 'pro' ? 'Phoenix Pro' : 'Community'} walkthrough</a>.
  </TutorialVideo>
    {showWatchLink && <div className={styles.watchAction}>
      <Link to={video.watchPath} aria-label={`Open video: ${video.title}`}>
        Open video
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true" focusable="false">
          <path d="M5 12h14m-6-6 6 6-6 6" />
        </svg>
      </Link>
    </div>}
  </>;
}
