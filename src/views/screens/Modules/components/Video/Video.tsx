import {FC} from "react";

interface IVideoProps {
    url?: string;
    onEnded: () => void;
}

const Video : FC<IVideoProps> = ({url, onEnded}) => {
  return (
      <video
          controls
          id="video"
          src={url}
          height="100%"
          width="100%"
          style={{height: "100%"}}
          onEnded={onEnded}
      ></video>
  );
}

export default Video;