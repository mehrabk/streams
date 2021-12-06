import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { createStream } from "../../actions";

// watch("title") -> form controlled the title input
// errors -> for handle of all errors on form
const StreamForm = ({ defaultValues = null, ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: defaultValues });

  // in react-router-dom v6 -> useNavigation for programmatically navigation
  // in react-router-dom v5 -> BowserRouter create default a history and pass to all component childs through props
  // but with this history we cant handle navigation for solution we pass a history object from createBrowserHistory lib
  const progNav = useNavigate();

  const onSubmit = (formData) => {
    props.onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ui form">
      <div className={`field ${errors.title ? "error" : ""}`}>
        <label>Enter Title</label>
        <input placeholder="title" {...register("title", { required: true })} />
        {errors.title?.type === "required" && "Title is required"}
      </div>
      <div className={`field ${errors.description ? "error" : ""}`}>
        <label>Enter Description</label>
        <input
          placeholder="description"
          {...register("description", { required: true })}
        />
        {errors.description?.type}
      </div>
      <button className="ui button primary">Submit</button>
    </form>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { state };
};

export default connect(mapStateToProps, { createStream })(StreamForm);
