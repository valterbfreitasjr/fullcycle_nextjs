import Link from "next/link";
import { Video } from "../models";
import VideoCard from "./VideoCard";

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const getVideos = async (): Promise<Video[]> => {
  // await sleep(5000);
  const response = await fetch("http://localhost:8000/videos");
  return response.json();
};

const VideoList = async () => {
  const videos = await getVideos();
  return videos.map((video) => (
    <Link key={video.id} href={`/video/${video.id}/play`}>
      <VideoCard
        title={video.title}
        thumbnail={video.thumbnail}
        views={video.num_views}
      />
    </Link>
  ));
};

export default VideoList;
