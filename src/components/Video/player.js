import React, { useState, useEffect } from 'react';

/**
 * VideoPlayer Component
 * A responsive video player that dynamically displays titles based on the user's operating system.
 * It is designed to provide an optimal viewing experience with auto-play, mute, and loop features,
 * along with custom OS-based title overlays to accommodate instructional content.
 *
 * Props:
 *   src (string): The URL of the video to be played, typically hosted on a CDN or local server.
 *   winLinuxTitle (string): The title text specific to Windows/Linux users, typically containing
 *                           keyboard shortcuts or instructions relevant to these platforms.
 *   macTitle (string): The title text for Mac users, which may include Mac-specific shortcuts or
 *                      instructions.
 *
 * Usage:
 * <VideoPlayer 
 *   src="https://example.com/video.mp4"
 *   winLinuxTitle="Press Ctrl+click to activate"
 *   macTitle="Press Cmd+click to activate"
 * />
 *
 * This component utilizes React's useState for managing state and useEffect for performing side effects,
 * such as OS detection and setting the appropriate title upon component mount.
 */
const VideoPlayer = ({ src, winLinuxTitle, macTitle }) => {
  // State to store the dynamically set title
  const [title, setTitle] = useState("");

  // Effect to determine and set the appropriate title based on the user's OS.
  // It runs once on component mount and whenever the titles props change.
  useEffect(() => {
    const osName = navigator.platform.toLowerCase();
    if (osName.includes('mac')) {
      setTitle(macTitle); // Set Mac-specific title
    } else {
      setTitle(winLinuxTitle); // Set Windows/Linux-specific title
    }
  }, [winLinuxTitle, macTitle]); // React to changes in title props

  // Container styles to ensure the video maintains a 16:9 aspect ratio and is responsive.
  const containerStyle = {
    position: 'relative',
    width: '100%',
    paddingTop: '56.25%',
    overflow: 'hidden'
  };

  // Video styles to fill the container and be responsive.
  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  };

  // Title overlay styles to enhance readability and accessibility.
  const titleStyle = {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    right: '10px',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent for visibility over diverse backgrounds
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '1em',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <video style={videoStyle} controls autoPlay muted loop>
        <source src={src} type="video/mp4"/>
        Your browser does not support the video tag. // Fallback message for unsupported browsers
      </video>
      <div style={titleStyle}>{title}</div> // Display dynamically set title
    </div>
  );
};

export default VideoPlayer;
