import React from 'react';
import VideoWatchPage from '@site/src/components/Video/VideoWatchPage';
import videos from '@site/src/data/table-tutorial-videos.json';

export default function ProTableVideoPage() {
  return <VideoWatchPage video={videos.pro} guideLinkText="Follow the Phoenix Pro steps and get the practice website" />;
}
