import React from 'react';
import VideoWatchPage from '@site/src/components/Video/VideoWatchPage';
import videos from '@site/src/data/png-pdf-videos.json';

export default function ConvertPngToPdfVideo() {
  return <VideoWatchPage video={videos.convert} guideLinkText="Read the PNG-to-PDF conversion guide" />;
}
