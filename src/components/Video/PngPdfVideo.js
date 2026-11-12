import React from 'react';
import RecordedVideo from './RecordedVideo';
import videos from '@site/src/data/png-pdf-videos.json';

export default function PngPdfVideo({topic, showWatchLink = false}) {
  return <RecordedVideo video={videos[topic]} showWatchLink={showWatchLink} />;
}
