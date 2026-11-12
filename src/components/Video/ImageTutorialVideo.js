import React from 'react';
import RecordedVideo from './RecordedVideo';
import videos from '@site/src/data/image-tutorial-videos.json';

// Keep the article and watch page tied to the same recording and metadata.
export default function ImageTutorialVideo({edition, className, showWatchLink = false}) {
  return <RecordedVideo video={videos[edition]} className={className} showWatchLink={showWatchLink} />;
}
