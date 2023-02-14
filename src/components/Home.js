import React, { useState, useEffect } from "react";
import Player from "./Player";

export default function Home() {
  return FetchAPI();
}

function FetchAPI() {
  const [data, setData] = useState({
    manifest: "",
    subtitles: ""
  });

  const [form, setForm] = useState({
    manifest: "",
    subtitles: ""
  });

  //Get Method
  const apiGet = () => {
    if (data.manifest !== "") return;
    // fetch(
    //   "https://api.allorigins.win/raw?url=https%3A%2F%2Fbeta-api.crunchyroll.com%2Fcms%2Fv2%2FUS%2FM2%2Fcrunchyroll%2Fvideos%2FGDVFG8GWZ%2Fstreams%3Flocale%3Den-US%26Signature%3DbxerNNaMDMxIhgPbTMTFxEfqgcDshAHGTx83e1~0Zr4HsCfrvDeDzOjj7kSxBpL0lnhojMLozuT68xwrR4OjLBf9d51ZWiLHFcpWU0bLHPnXxEurrOXYbaVSxjywcul-Ud2sXA7kW3n3~3umudSE1z9CV7zZTQrIwSM8~-L4ksDHAOxTrFBVzn2JX7lQ9uQEaDulP0ZrEUcDz~2CGaokh5tmZNid2xPjsa7zXWEHLsPbSKz9ERk~ib~j34zuT-FSxNenD6QJYDqtQBztwg3kKPcD83~UYHNbTT6Q4mj1duyyjR02eDXhJ1VlksvuJhrELHB0OHDW4qo2uepyMZ6ZbQ__%26Policy%3DeyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9iZXRhLWFwaS5jcnVuY2h5cm9sbC5jb20vY21zL3Y~L1VTL00yL2NydW5jaHlyb2xsLyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2Mjc1NDQxMzV9fX1dfQ__%26Key-Pair-Id%3DAPKAJMWSQ5S7ZB3MF5VA"
    // )
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //     setData(json);
    //   });

    //
  };

  useEffect(() => {
    apiGet();
    console.log(data);
  });

  const updatePlayer = (event) => {
    event.preventDefault();
    console.log(form);
    if (form.manifest.includes("pl.crunchyroll.com")) {
      form.manifest = form.manifest.replace("pl.crunchyroll.com", "uwu.wang");
    }
    setData(form);
  };

  return (
    <div className="content">
      {data.manifest === "" ? (
        <h1>Load a video</h1>
      ) : (
        <Player
          id={JSON.stringify(data)}
          playbackURL={data.manifest}
          subtitleURL={data.subtitles}
        />
      )}
      <br />
      <form onSubmit={updatePlayer}>
        <label>
          manifest:
          <input
            value={form.manifest}
            onChange={(e) => setForm({ ...form, manifest: e.target.value })}
          />{" "}
        </label>
        <label>
          subs:
          <input
            value={form.subtitles}
            onChange={(e) => setForm({ ...form, subtitles: e.target.value })}
          />{" "}
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

// const getUrlParameter = (name) => {
//   name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
//   let regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
//   let results = regex.exec(window.location.search);
//   return results === null
//     ? ""
//     : decodeURIComponent(results[1].replace(/\+/g, " "));
// };
