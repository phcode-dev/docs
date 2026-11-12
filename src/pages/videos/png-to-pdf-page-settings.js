import React from 'react';
import VideoWatchPage from '@site/src/components/Video/VideoWatchPage';
import videos from '@site/src/data/png-pdf-videos.json';

export default function PngToPdfPageSettingsVideo() {
  return <VideoWatchPage video={videos.settings} guideLinkText="Read the PNG-to-PDF quality guide" />;
}
