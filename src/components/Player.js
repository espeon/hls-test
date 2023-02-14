/* global SubtitlesOctopus */
import React, { useEffect, useRef } from "react";
import Plyr from "plyr";
import Hls from "hls.js";
import "./player.css";
import fonts from "./fonts";

export default function Player({
  type = "video",
  isLive = false,
  playbackURL,
  subtitleURL
}) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const octoRef = useRef(null);
  // const previewSrc = `https://image.mux.com/${playbackId}/storyboard.png`;
  useEffect(() => {
    console.log(type);
    console.log(type === "audio");
    const defaultOptions = {
      captions: { active: true, update: true, language: "en" }
    };
    const videoSrc = playbackURL;
    if (videoSrc.includes(".m3u8")) {
      const hls = new Hls({
        autoStartLoad: true,
        debug: true,
        manifestLoadingTimeOut: 60000,
        /*manifestLoadingMaxRetry : 9,*/
        manifestLoadingRetryDelay: 500,
        levelLoadingTimeOut: 60000,
        /*levelLoadingMaxRetry : 9,*/
        levelLoadingRetryDelay: 500,

        fragLoadingTimeOut: 60000,
        /*fragLoadingMaxRetry : 6,*/
        fragLoadingRetryDelay: 250,
        startFragPrefetch: true,

        maxBufferLength: 420,
        backBufferLength: 180
      });
      hls.loadSource(playbackURL);
      hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
        const availableQualities = hls.levels.map((l) => l.height);
        availableQualities.unshift(0); //prepend 0 to quality array
        defaultOptions.quality = {
          default: "0", //Default - AUTO
          options: availableQualities,
          forced: true,
          onChange: (e) => updateQuality(e, hls)
        };
        hls.on(Hls.Events.LEVEL_SWITCHED, function (event, data) {
          var span = document.querySelector(
            ".plyr__menu__container [data-plyr='quality'][value='0'] span"
          );
          if (hls.autoLevelEnabled) {
            span.innerHTML = `Auto (${hls.levels[data.level].height}p)`;
          } else {
            span.innerHTML = `Auto`;
          }
        });
        console.log("player");
        playerRef.current = new Plyr(videoRef.current, defaultOptions);
        console.log("plyr", playerRef);
        console.log(videoRef.current);
        let f = fonts();
        console.log(f);
        var options = {
          video: videoRef.current,
          subUrl: subtitleURL,
          fonts: {
            "Adobe Arabic":
              "https://static.vrv.co/vilos/assets/fonts/AdobeArabic-Bold.otf",
            "Andale Mono":
              "https://static.vrv.co/vilos/assets/fonts/andalemo.ttf",
            "Arial Black":
              "https://static.vrv.co/vilos/assets/fonts/ariblk.ttf",
            "Arial Bold Italic":
              "https://static.vrv.co/vilos/assets/fonts/arialbi.ttf",
            "Arial Bold":
              "https://static.vrv.co/vilos/assets/fonts/arialbd.ttf",
            "Arial Italic":
              "https://static.vrv.co/vilos/assets/fonts/ariali.ttf",
            "Arial Unicode MS":
              "https://static.vrv.co/vilos/assets/fonts/arialuni.ttf",
            Arial: "https://rsms.me/font-files/Inter-Thin.woff2?v=3.19",
            "Comic Sans MS Bold":
              "https://static.vrv.co/vilos/assets/fonts/comicbd.ttf",
            "Comic Sans MS":
              "https://static.vrv.co/vilos/assets/fonts/comic.ttf",
            "Courier New Bold Italic":
              "https://static.vrv.co/vilos/assets/fonts/courbi.ttf",
            "Courier New Bold":
              "https://static.vrv.co/vilos/assets/fonts/courbd.ttf",
            "Courier New Italic":
              "https://static.vrv.co/vilos/assets/fonts/couri.ttf",
            "Courier New": "https://static.vrv.co/vilos/assets/fonts/cour.ttf",
            "DejaVu LGC Sans Mono Bold Oblique":
              "https://static.vrv.co/vilos/assets/fonts/DejaVuLGCSansMono-BoldOblique.ttf",
            "DejaVu LGC Sans Mono Bold":
              "https://static.vrv.co/vilos/assets/fonts/DejaVuLGCSansMono-Bold.ttf",
            "DejaVu LGC Sans Mono Oblique":
              "https://static.vrv.co/vilos/assets/fonts/DejaVuLGCSansMono-Oblique.ttf",
            "DejaVu LGC Sans Mono":
              "https://static.vrv.co/vilos/assets/fonts/DejaVuLGCSansMono.ttf",
            "DejaVu Sans Bold Oblique":
              "https://static.vrv.co/vilos/assets/fonts/DejaVuSans-BoldOblique.ttf",
            "DejaVu Sans Bold":
              "https://static.vrv.co/vilos/assets/fonts/DejaVuSans-Bold.ttf",
            "DejaVu Sans Condensed Bold Oblique":
              "https://static.vrv.co/vilos/assets/fonts/DejaVuSansCondensed-BoldOblique.ttf",
            "DejaVu Sans Condensed Bold":
              "https://static.vrv.co/vilos/assets/fonts/DejaVuSansCondensed-Bold.ttf",
            "DejaVu Sans Condensed Oblique":
              "https://static.vrv.co/vilos/assets/fonts/DejaVuSansCondensed-Oblique.ttf",
            "DejaVu Sans Condensed":
              "https://static.vrv.co/vilos/assets/fonts/DejaVuSansCondensed.ttf",
            "DejaVu Sans ExtraLight":
              "https://static.vrv.co/vilos/assets/fonts/DejaVuSans-ExtraLight.ttf",
            "DejaVu Sans Mono Bold Oblique":
              "https://static.vrv.co/vilos/assets/fonts/DejaVuSansMono-BoldOblique.ttf",
            "DejaVu Sans Mono Bold":
              "https://static.vrv.co/vilos/assets/fonts/DejaVuSansMono-Bold.ttf",
            "DejaVu Sans Mono Oblique":
              "https://static.vrv.co/vilos/assets/fonts/DejaVuSansMono-Oblique.ttf",
            "DejaVu Sans Mono":
              "https://static.vrv.co/vilos/assets/fonts/DejaVuSansMono.ttf",
            "DejaVu Sans Oblique":
              "https://static.vrv.co/vilos/assets/fonts/DejaVuSans-Oblique.ttf",
            "DejaVu Sans":
              "https://static.vrv.co/vilos/assets/fonts/DejaVuSans.ttf",
            Gautami: "https://static.vrv.co/vilos/assets/fonts/arialuni.ttf",
            "Georgia Bold Italic":
              "https://static.vrv.co/vilos/assets/fonts/georgiaz.ttf",
            "Georgia Bold":
              "https://static.vrv.co/vilos/assets/fonts/georgiab.ttf",
            "Georgia Italic":
              "https://static.vrv.co/vilos/assets/fonts/georgiai.ttf",
            Georgia: "https://static.vrv.co/vilos/assets/fonts/georgia.ttf",
            Impact: "https://static.vrv.co/vilos/assets/fonts/impact.ttf",
            mangal: "https://static.vrv.co/vilos/assets/fonts/arialuni.ttf",
            Mangal: "https://static.vrv.co/vilos/assets/fonts/arialuni.ttf",
            MeeraInimai:
              "https://static.vrv.co/vilos/assets/fonts/arialuni.ttf",
            "Rubik Black Italic":
              "https://static.vrv.co/vilos/assets/fonts/Rubik-BlackItalic.ttf",
            "Rubik Black":
              "https://static.vrv.co/vilos/assets/fonts/Rubik-Black.ttf",
            "Rubik Bold Italic":
              "https://static.vrv.co/vilos/assets/fonts/Rubik-BoldItalic.ttf",
            "Rubik Bold":
              "https://static.vrv.co/vilos/assets/fonts/Rubik-Bold.ttf",
            "Rubik Italic":
              "https://static.vrv.co/vilos/assets/fonts/Rubik-Italic.ttf",
            "Rubik Light Italic":
              "https://static.vrv.co/vilos/assets/fonts/Rubik-LightItalic.ttf",
            "Rubik Light":
              "https://static.vrv.co/vilos/assets/fonts/Rubik-Light.ttf",
            "Rubik Medium Italic":
              "https://static.vrv.co/vilos/assets/fonts/Rubik-MediumItalic.ttf",
            "Rubik Medium":
              "https://static.vrv.co/vilos/assets/fonts/Rubik-Medium.ttf",
            Rubik: "https://static.vrv.co/vilos/assets/fonts/Rubik-Regular.ttf",
            Tahoma: "https://static.vrv.co/vilos/assets/fonts/tahoma.ttf",
            "Times New Roman Bold Italic":
              "https://static.vrv.co/vilos/assets/fonts/timesbi.ttf",
            "Times New Roman Bold":
              "https://static.vrv.co/vilos/assets/fonts/timesbd.ttf",
            "Times New Roman Italic":
              "https://static.vrv.co/vilos/assets/fonts/timesi.ttf",
            "Times New Roman":
              "https://static.vrv.co/vilos/assets/fonts/times.ttf",
            "Trebuchet MS Bold Italic":
              "https://static.vrv.co/vilos/assets/fonts/trebucbi.ttf",
            "Trebuchet MS Bold":
              "https://static.vrv.co/vilos/assets/fonts/trebucbd.ttf",
            "Trebuchet MS Italic":
              "https://static.vrv.co/vilos/assets/fonts/trebucit.ttf",
            "Trebuchet MS":
              "https://static.vrv.co/vilos/assets/fonts/trebuc.ttf",
            "Verdana Bold Italic":
              "https://static.vrv.co/vilos/assets/fonts/verdanaz.ttf",
            "Verdana Bold":
              "https://static.vrv.co/vilos/assets/fonts/verdanab.ttf",
            "Verdana Italic":
              "https://static.vrv.co/vilos/assets/fonts/verdanai.ttf",
            Verdana: "https://static.vrv.co/vilos/assets/fonts/verdana.ttf",
            "Vrinda Bold":
              "https://static.vrv.co/vilos/assets/fonts/arialuni.ttf",
            Vrinda: "https://static.vrv.co/vilos/assets/fonts/arialuni.ttf",
            Webdings: "https://static.vrv.co/vilos/assets/fonts/webdings.ttf"
          },
          workerUrl: "/subtitles-octopus/subtitles-octopus-worker.js"
        };
        octoRef.current = new SubtitlesOctopus(options);
      });
      hls.attachMedia(videoRef.current);
    } else {
      playerRef.current = new Plyr(videoRef.current, defaultOptions);

      playerRef.current.source = {
        type: type,
        title: "Example title",
        sources: [
          {
            src: playbackURL,
            type: type === "audio" ? "audio/mp3" : "video/mp4"
          }
        ]
      };
    }

    function updateQuality(newQuality, hls) {
      console.log("quality is", newQuality);
      if (newQuality === "0") {
        hls.currentLevel = -1; //Enable AUTO quality if option.value = 0
        console.log("Auto quality selection");
      } else {
        hls.levels.forEach((level, levelIndex) => {
          if (level.height === newQuality) {
            console.log("Found quality match with " + newQuality);
            hls.currentLevel = levelIndex;
          }
        });
      }
    }
  }, [videoRef, playbackURL, subtitleURL, isLive, type, octoRef]);

  return (
    <div className="container">
      {type === "audio" ? (
        <audio id="player" controls ref={videoRef} />
      ) : (
        <video id="player" controls ref={videoRef} />
      )}
    </div>
  );
}
