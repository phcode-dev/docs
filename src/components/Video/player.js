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


  // CSS for the container that holds the video and title
  const containerStyle = {
    maxHeight: '68vh',       // Maximum height is 68% of the viewport height to ensure the full video and title are visible on the screen at once
    width: '100%',           // Full width to ensure the container spans across the available space
    display: 'flex',         // Flexbox layout to align and position children
    justifyContent: 'center',// Center the video horizontally within the container
    alignItems: 'center',    // Center the video vertically within the container
    flexDirection: 'column'  // Stack the children (video and title) vertically
  };

  // CSS for the video element itself
  const videoStyle = {
    height: '90%',           // Video takes up 90% of the container's height
    width: '100%'            // Video takes up the full width of the container
  };

  // CSS for the title that appears below the video
  const titleStyle = {
    width: '100%',           // Full width to match the container
    textAlign: 'center',     // Center-align the text within the title block
    fontSize: '1em',         // Set the font size to 1em for relative sizing
    marginTop: '10px'        // Space above the title to separate it from the video
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