import { Video } from "@/app/models";

async function getVideo(id: string): Promise<Video> {
  const response = await fetch(`http://localhost:8000/videos/${id}`, {
    cache: "no-store", // desabilita o cache
    // next: {
    //   revalidate: 1,
    //   tags: [`video:${id}`],
    // },
  });

  // revalidate on demand
  return response.json();
}

export async function VideoDetail({ id }: Readonly<{ id: string }>) {
  const video = await getVideo(id);
  return (
    <div>
      <h1 className="text-primary"> Play do vídeo</h1>
      <p className="text-primary">id: {id}</p>
      <p className="text-primary">title: {video.title}</p>
    </div>
  );
}
