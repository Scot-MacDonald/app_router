// components/VideoPlayerWrapper.jsx
import dynamic from "next/dynamic";

const DynamicVideoPlayer = dynamic(() => import("../videoPlayer/VideoPlayer"), {
  ssr: false,
});

export default function VideoPlayerWrapper() {
  return <DynamicVideoPlayer />;
}
