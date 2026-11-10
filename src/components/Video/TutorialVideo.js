import React, {useEffect, useRef, useState} from 'react';
import Head from '@docusaurus/Head';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import {usePluginData} from '@docusaurus/useGlobalData';

export default function TutorialVideo({children, metadata, ...props}) {
  const ref = useRef(null);
  const [failed, setFailed] = useState(false);
  const {withBaseUrl} = useBaseUrlUtils();
  const {uploadDates} = usePluginData('phoenix-tutorial-media');
  const mediaChildren = React.Children.toArray(children).filter(React.isValidElement);
  const source = mediaChildren.find(child => child.type === 'source');
  const captions = mediaChildren.find(child => child.type === 'track' && child.props.kind === 'captions');
  let structuredData;

  if (metadata) {
    if (!source?.props.src || !props.poster) {
      throw new Error('TutorialVideo metadata requires a video source and a poster image.');
    }
    // Derive media URLs from the player so metadata always describes the video
    // that readers can watch. Absolute URLs use the site's canonical host.
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      '@id': withBaseUrl(source.props.src, {absolute: true}),
      name: metadata.name,
      description: metadata.description,
      thumbnailUrl: [withBaseUrl(props.poster, {absolute: true})],
      contentUrl: withBaseUrl(source.props.src, {absolute: true}),
      encodingFormat: source.props.type,
      duration: metadata.duration,
      dateCreated: metadata.dateCreated,
      ...(uploadDates[source.props.src] ? {uploadDate: uploadDates[source.props.src]} : {}),
      ...(captions ? {
        inLanguage: captions.props.srcLang,
        caption: {
          '@type': 'MediaObject',
          contentUrl: withBaseUrl(captions.props.src, {absolute: true}),
          encodingFormat: 'text/vtt',
          inLanguage: captions.props.srcLang,
        },
      } : {}),
    };
  }

  useEffect(() => {
    const video = ref.current;
    // Native controls still work when automatic visibility tracking is absent.
    if (!window.IntersectionObserver || !window.matchMedia) return undefined;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    let pausedByReader = false;
    let automaticPausePending = false;

    const pause = () => {
      if (!video.paused) {
        automaticPausePending = true;
        video.pause();
      }
    };
    const syncPlayback = () => {
      if (!visible || document.hidden) {
        pause();
      } else if (!reducedMotion.matches && !pausedByReader && !video.ended) {
        // Browsers may decline autoplay; native controls remain available.
        video.play().catch(() => {});
      }
    };
    const onPause = () => {
      if (!automaticPausePending && !video.ended) pausedByReader = true;
      automaticPausePending = false;
    };
    const onPlay = () => {
      pausedByReader = false;
      if (!visible || document.hidden) pause();
    };
    const onMotionChange = () => {
      if (reducedMotion.matches) pause();
      else syncPlayback();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio >= 0.25;
      syncPlayback();
    }, {threshold: [0, 0.25]});

    video.muted = true;
    video.addEventListener('pause', onPause);
    video.addEventListener('play', onPlay);
    document.addEventListener('visibilitychange', syncPlayback);
    reducedMotion.addEventListener('change', onMotionChange);
    observer.observe(video);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncPlayback);
      reducedMotion.removeEventListener('change', onMotionChange);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('play', onPlay);
      video.pause();
    };
  }, []);

  return <>
    {structuredData && <Head>
      <script type="application/ld+json" key={structuredData.contentUrl}>
        {JSON.stringify(structuredData).replace(/</g, '\\u003c')}
      </script>
    </Head>}
    <video {...props} ref={ref} controls muted playsInline preload="metadata"
      onError={() => setFailed(true)} onLoadedMetadata={() => setFailed(false)}>{children}</video>
    {failed && <p role="status">
      This video couldn’t load. Follow the written steps below
      {source?.props.src && <>, or <a href={withBaseUrl(source.props.src)}>open the video directly</a></>}.
    </p>}
  </>;
}
