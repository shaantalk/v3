import React, { useState, useEffect } from "react";
import "../Styles/YouTubeChannel.css";

const YouTubeChannel = ({ channelId, numberOfVideos }) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY || "";

        if (!apiKey) {
          throw new Error("YouTube API key not available");
        }

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${numberOfVideos}`
        );

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setError(error.message || "An error occurred while fetching videos.");
      }
    };

    fetchVideos();
  }, [channelId, numberOfVideos]);

  return (
    <div className="youtube-channel">
      <h2>Latest Videos</h2>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="video-list" id="video-container">
          {videos.map((video) => (
            <a
              key={video.id.videoId}
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="video-card"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="thumbnail"
              />
              <div className="video-details">
                <p className="video-title">{video.snippet.title}</p>
                <p className="channel-title">{video.snippet.channelTitle}</p>
              </div>
            </a>
          ))}
        </div>
      )}
      <a
        href={`https://www.youtube.com/@${channelId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="go-to-channel">Go to Channel</button>
      </a>
    </div>
  );
};

export default YouTubeChannel;
