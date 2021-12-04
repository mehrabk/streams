import React from "react";
import { useForm } from "react-hook-form";

// watch("title") -> form controlled the title input
// errors -> for handle of all errors on form
const StreamCreate = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
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

export default StreamCreate;
