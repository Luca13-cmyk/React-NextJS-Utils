import { useEffect, useRef } from "react";
import useVideoData from "./hook/useVideoContext";

interface IProps {
  src: string;
  newOptions?: {
    controls: string[];
  };
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

function Video({ src, newOptions, loop, autoplay, className }: IProps) {
  const { player }: any = useVideoData();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef && player) {
      const videoPlayer = new player.Plyr(
        videoRef.current,
        newOptions ? newOptions : player.defaultOptions
      );
    }
  }, [videoRef, player]);

  return (
    <div className={`${className ? className : "h-[400px]"}`}>
      <video
        ref={videoRef}
        loop={loop ? true : false}
        autoPlay={autoplay ? true : false}
        id="video"
        src={src}
      ></video>
    </div>
  );
}

export default Video;
