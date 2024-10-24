import { VideoPlayer } from "@/app/components/VideoPlayer";
import { Suspense } from "react";
import { VideoDetail } from "./VideoDetails";
import { after } from "node:test";

const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

async function incrementViews(id: string) {
  await sleep(2000);
  // await fetch(`http://localhost:8000/videos/${id}/views`, {
  //   method: 'POST',
  // });
}

const VideoPlayPage = async ({ params }: { params: { id: string } }) => {
  after(async () => {
    await incrementViews(params.id);
  });

  // await incrementViews(params.id);
  return (
    <div>
      <VideoPlayer />
      <Suspense fallback={<div>loading...</div>}>
        <VideoDetail id={params.id} />
      </Suspense>
      <Suspense fallback={<div>loading...</div>}>
        {/* <p className="text-primary">1000 views</p> */}
        {/* <VideoViews/> */}
      </Suspense>
    </div>
  );
};

export default VideoPlayPage;
