import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";

import Modal from "../Modal";
import { deleteStream, fetchStream } from "../../actions/";
import { Link } from "react-router-dom";

const StreamDelete = () => {
  const { id } = useParams();
  const progNav = useNavigate();
  const dispatch = useDispatch();
  const stream = useSelector((state) => state.streams[id]);

  useEffect(() => {
    dispatch(fetchStream(id));
  }, [id]);
  const actions = (
    <React.Fragment>
      <button
        onClick={() => dispatch(deleteStream(id, progNav))}
        className="ui button negative"
      >
        Delete
      </button>
      <Link to={"/"} className="ui button">
        Cancel
      </Link>
    </React.Fragment>
  );

  return (
    <>
      {stream ? (
        <Modal
          title="Delete Stream"
          content={`Are you sure you want delete a streams with title: ${stream.title}`}
          actions={actions}
          onDismiss={() => progNav("/")}
        />
      ) : (
        `Stream With id: ${id} not found`
      )}
    </>
  );
};

export default StreamDelete;
