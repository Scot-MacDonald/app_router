"use client";

import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer() {
  //video path
  //   let videosrc = ;

  return (
    <div>
      <h1>my custome player</h1>
      <ReactPlayer
        url="https://vimeo.com/manage/videos/288508178"
        controls={true}
      />
    </div>
  );
}
