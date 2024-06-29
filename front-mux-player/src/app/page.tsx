import { VideoPlayer } from "@/componets/VideoPlayer";
async function loader() {
  try {
    const baseUrl = "http://localhost:1337";
    const path = "api/lessons";
    const url = new URL(path, baseUrl);
    url.searchParams.set("populate", "*");

    const res = await fetch(url.href);
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const data = await loader();

  if (!data) return null;

  console.dir(data, { depth: null });
  return (
    <div>
      {data.data.map((lesson: any) => {
        const { playback_id } = lesson.attributes.video.data.attributes;
        return (
          <div key={lesson.id}>
            <h2>{lesson.attributes.title}</h2>
            <p>{playback_id}</p>
            <VideoPlayer playbackId={playback_id} />
          </div>
        );
      })}
    </div>
  );
}
