import React from 'react';
import VideoWatchPage from '@site/src/components/Video/VideoWatchPage';
import videos from '@site/src/data/startup-recovery-videos.json';

export default function WindowsRepairVideoPage() {
  return <VideoWatchPage video={videos.windows} guideLinkText="Follow the Windows repair steps" />;
}
