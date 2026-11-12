import React from 'react';
import Link from '@docusaurus/Link';
import TutorialVideo from './TutorialVideo';
import styles from './VideoWatchPage.module.css';

// Articles and watch pages share the recording, captions, and structured data.
export default function RecordedVideo({video, className, showWatchLink = false}) {
  return <>
    <TutorialVideo metadata={video.metadata} poster={video.poster}
      width={video.width || 1360} height={video.height || 980}
      style={{width: '100%', height: 'auto'}} className={className}
      aria-label={video.label}>
      <source src={video.source} type="video/mp4" />
      <track kind="captions" src={video.captions} srcLang="en" label="English" />
      <a href={video.source}>Watch {video.title}</a>.
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
