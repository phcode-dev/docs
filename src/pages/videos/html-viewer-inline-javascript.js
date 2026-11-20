import React from 'react';
import VideoWatchPage from '@site/src/components/Video/VideoWatchPage';
import videos from '@site/src/data/html-preview-videos.json';

export default function HtmlPreviewScriptsVideo() {
  return <VideoWatchPage video={videos.scripts} guideLinkText="Read the HTML preview troubleshooting steps" />;
}
