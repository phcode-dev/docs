import React from 'react';
import VideoWatchPage from '@site/src/components/Video/VideoWatchPage';
import videos from '@site/src/data/layout-tutorial-videos.json';

export default function ImageTextLayoutVideoPage() {
  return <VideoWatchPage video={videos.pro} />;
}
