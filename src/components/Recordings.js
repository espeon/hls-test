import React from "react";
import Player from "./Player";

export default function Recordings() {
  const rec = [
    {
      type: "video",
      title: "Ramune",
      playbackURL: `https://evs.emma.run/hls/evs-assets/maidragons2ed.v,360.mp4,480.mp4,720.mp4,1080.mp4,.urlset/master.m3u8`
    }
  ];
  return (
    <div>
      <div className="content">
        <h1>Recordings</h1>
        {rec.map(({ type = "video", title, playbackURL }) => (
          <div key={playbackURL}>
            <h4>{title}</h4>
            <Player type={type} playbackURL={playbackURL} />
          </div>
        ))}
      </div>
    </div>
  );
}
