import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import StreamForm from "./StreamForm";
import { fetchStream, editStream } from "../../actions";

const StreamEdit = (props) => {
  // as react-router updated (v6) now we not have history object and params that directly access to stream id from url
  // and this issue causes we cant access to id from mapStateToProps (ownProps) ***
  const { id } = useParams();
  const stream = useSelector((state) => state.streams[id]);
  const dispatch = useDispatch();
  const progNav = useNavigate();

  useEffect(() => {
    dispatch(fetchStream(id));
  }, [id]);

  const onSubmit = (formData) => {
    dispatch(editStream(id, formData, progNav));
  };

  return (
    <div>
      <h3>Edit a Stream</h3>
      {!stream ? (
        "Loading..."
      ) : (
        <StreamForm
          defaultValues={{ title: stream.title, description: stream.description }}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
};

export default StreamEdit;
