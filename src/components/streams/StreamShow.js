import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchStream } from "../../actions";

export default function StreamShow() {
  const { id } = useParams();
  const stream = useSelector((state) => state.streams[id]);
  const dispatch = useDispatch();
  const progNav = useNavigate();

  useEffect(() => {
    dispatch(fetchStream(id));
  }, [id]);

  return (
    <div>
      <h1>{stream && stream.title}</h1>
    </div>
  );
}
