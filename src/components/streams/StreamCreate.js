import React from "react";
import { useForm } from "react-hook-form";

import { connect } from "react-redux";
import { createStream } from "../../actions";

// watch("title") -> form controlled the title input
// errors -> for handle of all errors on form
const StreamCreate = ({ createStream, ...props }) => {
  console.log(props);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    createStream(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ui form">
      <div className={`field ${errors.title ? "error" : ""}`}>
        <label>Enter Title</label>
        <input {...register("title", { required: true })} />
        {errors.title?.type === "required" && "Title is required"}
      </div>
      <div className={`field ${errors.description ? "error" : ""}`}>
        <label>Enter Description</label>
        <input {...register("description", { required: true })} />
        {errors.description?.type}
      </div>
      <button className="ui button primary">Submit</button>
    </form>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { state };
};

export default connect(mapStateToProps, { createStream })(StreamCreate);
