import React from 'react';
import VideoWatchPage from '@site/src/components/Video/VideoWatchPage';
import videos from '@site/src/data/table-tutorial-videos.json';

export default function CommunityTableVideoPage() {
  return <VideoWatchPage video={videos.community} guideLinkText="Follow the Community steps and copy the HTML" />;
}
