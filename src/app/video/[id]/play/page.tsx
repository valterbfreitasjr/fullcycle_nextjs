import { Video } from "@/app/models";

const getVideos = async (id: string): Promise<Video[]> => {
  const response = await fetch(`http://localhost:8000/videos/${id}`, {
    // cache: "no-cache";
    next: {
      revalidate: 10,
    },
  });

  return response.json();
};

const VideoPlayPage = async ({ params }: { params: { id: string } }) => {
  const video = await getVideos(params.id);
  return (
    <div>
      <h1 className="text-primary">Play do Video</h1>
      <p className="text-primary">Id: {params.id}</p>
      <p className="text-primary">Title: {video.title}</p>
    </div>
  );
};

export default VideoPlayPage;
