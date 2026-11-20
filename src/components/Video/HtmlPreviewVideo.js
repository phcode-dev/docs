import React from 'react';
import RecordedVideo from './RecordedVideo';
import videos from '@site/src/data/html-preview-videos.json';

export default function HtmlPreviewVideo({topic, showWatchLink = false}) {
  return <RecordedVideo video={videos[topic]} showWatchLink={showWatchLink} />;
}
