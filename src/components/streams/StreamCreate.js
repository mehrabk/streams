import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamCreate = ({ createStream, ...props }) => {
  const progNav = useNavigate();

  const onSubmit = (formData) => {
    createStream(formData, progNav);
  };

  return (
    <div>
      <h3>Create a Stream</h3>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { createStream })(StreamCreate);
