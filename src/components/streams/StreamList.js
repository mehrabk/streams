import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchStreams } from "../../actions";

const StreamList = ({ fetchStreams, ...props }) => {
  useEffect(() => {
    fetchStreams();
  }, []);
  return <div>StreamList</div>;
};

export default connect(null, { fetchStreams })(StreamList);
