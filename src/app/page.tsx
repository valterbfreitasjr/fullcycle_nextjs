import { Suspense } from "react";
import VideoList from "./components/VideoList";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Suspense fallback={<div className="text-primary">loading...</div>}>
          <VideoList />
        </Suspense>
      </div>
    </main>
  );
}
