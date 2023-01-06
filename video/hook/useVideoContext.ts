import { useContext } from "react";
import VideoContext from "../context/VideoContext";

const useVideoData = () => useContext(VideoContext);

export default useVideoData;
