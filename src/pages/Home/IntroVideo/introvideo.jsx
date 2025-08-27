"use client";

import { useEffect, useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./introvideo.css";

// import files directly from /public
import desktopV from "/Desktop_V.mp4";
import mobileV from "/Mobile_V.mp4";



export default function IntroVideo({
  posterImage = "",
  autoPlay = true,
  muted = true,
  loop = true,
  showControls = false,
  overlayOpacity = 0.5,
  lottieUrl = "https://lottie.host/82c967b4-209a-46c3-9b31-5bef436db55d/cKgmW8WoRY.lottie",
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [videoError, setVideoError] = useState(null);

  const desktopRef = useRef(null);
  const mobileRef  = useRef(null);

  // Decide which element is currently visible via CSS breakpoint
  const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

  useEffect(() => {
    let active = isMobile() ? mobileRef.current : desktopRef.current;
    if (!active) return;

    const onLoaded = () => setIsLoading(false);
    const onError = () => {
      const code = (active.error && active.error.code) || 0;
      const map = {
        1: "MEDIA_ERR_ABORTED",
        2: "MEDIA_ERR_NETWORK",
        3: "MEDIA_ERR_DECODE",
        4: "MEDIA_ERR_SRC_NOT_SUPPORTED",
      };
      setVideoError(`Video error (${map[code] || "unknown"})`);
      setIsLoading(false);
    };

    active.addEventListener("loadeddata", onLoaded);
    active.addEventListener("canplay", onLoaded);
    active.addEventListener("error", onError);

    // If autoplay allowed, try to start
    if (autoPlay) {
      const p = active.play();
      if (p && typeof p.then === "function") p.catch(() => {});
    }

    // If the viewport crosses breakpoint, re-bind to the other element
    const mq = window.matchMedia("(max-width: 768px)");
    const onChange = () => {
      active.removeEventListener("loadeddata", onLoaded);
      active.removeEventListener("canplay", onLoaded);
      active.removeEventListener("error", onError);

      active = mq.matches ? mobileRef.current : desktopRef.current;
      if (!active) return;

      active.addEventListener("loadeddata", onLoaded);
      active.addEventListener("canplay", onLoaded);
      active.addEventListener("error", onError);

      if (autoPlay) {
        const p2 = active.play();
        if (p2 && typeof p2.then === "function") p2.catch(() => {});
      }
    };
    mq.addEventListener?.("change", onChange);

    return () => {
      active && active.removeEventListener("loadeddata", onLoaded);
      active && active.removeEventListener("canplay", onLoaded);
      active && active.removeEventListener("error", onError);
      mq.removeEventListener?.("change", onChange);
    };
  }, [autoPlay]);

  return (
    <section className="video-section">
      {isLoading && (
        <div
          className="video-loader"
          style={{ background: `rgba(0,0,0,${overlayOpacity})` }}
        >
          <div className="lottie-container">
            <DotLottieReact src={lottieUrl} loop autoplay />
          </div>
        </div>
      )}

      {videoError ? (
        <div className="video-error"><p>{videoError}</p></div>
      ) : (
        <>
          {/* Desktop video (hidden on <=768px) */}
          <video
            ref={desktopRef}
            className={`video-background only-desktop ${isLoading ? "video-hidden" : "video-visible"}`}
            src={desktopV}
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            playsInline
            poster={posterImage}
            controls={showControls}
            preload="metadata"
          />

          {/* Mobile video (visible on <=768px) */}
          <video
            ref={mobileRef}
            className={`video-background only-mobile ${isLoading ? "video-hidden" : "video-visible"}`}
            src={mobileV}
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            playsInline
            poster={posterImage}
            controls={showControls}
            preload="metadata"
          />
        </>
      )}
    </section>
  );
}
