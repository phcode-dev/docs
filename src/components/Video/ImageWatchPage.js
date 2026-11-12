import React from 'react';
import VideoWatchPage from './VideoWatchPage';
import videos from '@site/src/data/image-tutorial-videos.json';

export default function ImageWatchPage({edition}) {
  return <VideoWatchPage video={videos[edition]}
    guideLinkText="Read the full tutorial and get the practice website" />;
}
