import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import flv from "flv.js";

import { fetchStream } from "../../actions";

export default function StreamShow() {
  const { id } = useParams();
  // if we come in streamshow with link the streamlist is ready
  // if we refresh this page streamlist(redux store) is empty and first stream is undefined and then useEffect call and fetch data
  // as fetch dispatched and reducer run this component render again but now we have stream data in redux store
  // so we must have render condition that stream is ready or not
  const stream = useSelector((state) => state.streams[id]);
  const dispatch = useDispatch();
  const progNav = useNavigate();
  // in class component this.videoRef = React.createRef()
  const videoRef = useRef();

  useEffect(() => {
    dispatch(fetchStream(id));
    const player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    player.attachMediaElement(videoRef.current);
    player.load();
    // componentWillUnmount(cleanup function)
    return () => {
      // destory for not anymore download
      player.destroy();
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} style={{ width: "100%" }} controls={true} />
      <h1>{stream && stream.title}</h1>
    </div>
  );
}
