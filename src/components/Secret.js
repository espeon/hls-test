import React from "react";
import Player from "./Player";

export default function Home() {
  return (
    <div>
      <div className="content">
        <Player playbackURL="https://hentai.miwa.moe/mus_ap/mzsf_216880732/playlist.m3u8" />
      </div>
    </div>
  );
}
