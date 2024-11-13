import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants.js";
import VideoCard from "./VideoCard.js";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((videos) => (
        <Link key={videos.id} to={"/watch?v=" + videos.id}>
          <VideoCard info={videos} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
