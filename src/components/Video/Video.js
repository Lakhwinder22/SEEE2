import React from 'react';

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video className="video" autoPlay loop muted>
        <source src="/path/to/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBackground;
