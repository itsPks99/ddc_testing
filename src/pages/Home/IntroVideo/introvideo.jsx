"use client"

import { useState, useRef, useEffect } from "react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import "./introvideo.css"

export default function IntroVideo({
  desktopVideoSrc = "/assets/DdcWebsiteVideo-desktop.mp4",
  mobileVideoSrc = "/assets/DdcWebsiteVideo-mobile.mp4",
  posterImage = "",
  autoPlay = true,
  muted = true,
  loop = true,
  showControls = false,
  overlayOpacity = 0.5,
  lottieUrl = "https://lottie.host/82c967b4-209a-46c3-9b31-5bef436db55d/cKgmW8WoRY.lottie",
}) {
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [videoError, setVideoError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize() // run once on mount
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleLoadedData = () => {
      setIsLoading(false)
    }

    videoElement.addEventListener("play", handlePlay)
    videoElement.addEventListener("pause", handlePause)
    videoElement.addEventListener("loadeddata", handleLoadedData)
    videoElement.addEventListener("canplay", handleLoadedData)

    return () => {
      videoElement.removeEventListener("play", handlePlay)
      videoElement.removeEventListener("pause", handlePause)
      videoElement.removeEventListener("loadeddata", handleLoadedData)
      videoElement.removeEventListener("canplay", handleLoadedData)
    }
  }, [desktopVideoSrc, mobileVideoSrc])

  const handleVideoError = (e) => {
    console.error("Video error:", e)
    setVideoError(true)
    setIsLoading(false)
  }

  const selectedVideoSrc = isMobile ? mobileVideoSrc : desktopVideoSrc

  return (
    <section className="video-section">
      {isLoading && (
        <div className="video-loader">
          <div className="lottie-container">
            <DotLottieReact src={lottieUrl} loop autoplay />
          </div>
        </div>
      )}

      {videoError ? (
        <div className="video-error">
          <p>Video failed to load. Please check the file path and format.</p>
          <p>Attempted to load: {selectedVideoSrc}</p>
        </div>
      ) : (
        <video
          ref={videoRef}
          className={`video-background ${isLoading ? "video-hidden" : "video-visible"}`}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          poster={posterImage}
          controls={showControls}
          onError={handleVideoError}
          preload="metadata"
        >
          <source src={selectedVideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </section>
  )
}
