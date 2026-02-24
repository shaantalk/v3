import React from "react";
import Hero from "../Components/Hero";
import YouTubeChannel from "../Components/YouTubeChannel";
import Technologies from "../Components/Technologies";
import Projects from "../Pages/Projects";

export default function HomePage() {
  const channelId = process.env.REACT_APP_YOUTUBE_CHANNEL_ID || "project_santanu";
  return (
    <>
      <Hero />
      <YouTubeChannel channelId={channelId} numberOfVideos={3} />
      <Technologies />
      <Projects />
    </>
  );
}
