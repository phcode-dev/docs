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

  // Determine and set the appropriate title based on the user's OS
  useEffect(() => {
    const osName = navigator.platform.toLowerCase();
    if (osName.includes('mac')) {
      setTitle(macTitle); // Set title for Mac users
    } else {
      setTitle(winLinuxTitle); // Set title for Windows/Linux users
    }
  }, [winLinuxTitle, macTitle]); // Dependency array to update title on prop change

  // CSS for the video container
  const containerStyle = {
    position: 'relative', // Relative positioning for absolute positioning of children
    width: '100%', // Full width to ensure responsiveness
    paddingTop: '56.25%', // Top padding to maintain a 16:9 aspect ratio
    marginBottom: '3rem' // Ensure space below to make sure Title doesn't overlap with rest of the documentation
  };

  // CSS for the video element itself
  const videoStyle = {
    position: 'absolute', // Absolute positioning to overlay on the container
    top: 0, // Align to the top of the container
    left: 0, // Align to the left of the container
    width: '100%', // Full width to fill the container
    height: '100%' // Full height to fill the container
  };

  // CSS for the title overlay
  const titleStyle = {
    position: 'absolute', // Absolute positioning to place over the video
    top: '100%', // Position the title directly underneath the video container
    width: '100%', // Full width of the container
    paddingTop: '5px', // Space between video & text
    fontSize: '1em', // Font size using relative measurement for flexibility
    textAlign: 'center' // Center-align the text within the title block
  };

  return (
    <div style={containerStyle}>
      <video style={videoStyle} controls autoPlay muted loop>
        <source src={src} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div style={titleStyle}>{title}</div>
    </div>
  );
};

export default VideoPlayer;