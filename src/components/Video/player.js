import React from 'react';

const VideoPlayer = ({ src, title }) => {
  const containerStyle = {
    position: 'relative',
    width: '100%', // Full width
    paddingTop: '56.25%', // Aspect ratio of 16:9
    overflow: 'hidden'
  };

  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  };

  const titleStyle = {
    position: 'absolute',
    bottom: '10px', // Position at the bottom
    left: '10px',
    right: '10px', // Ensures the text is contained within the video bounds
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background for better visibility
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '1em',
    textAlign: 'center' // Centers the title text
  };

  return (
    <div style={containerStyle}>
      <video style={videoStyle} controls autoPlay muted loop>
        <source src={src} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      {title && <div style={titleStyle}>{title}</div>}
    </div>
  );
};

export default VideoPlayer;
