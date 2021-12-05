import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
} from "./types";
import { request } from "../shared/APIUtils";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formData) => {
  return async (dispatch, getState) => {
    const response = await request.post("/streams", formData);
    dispatch({ type: CREATE_STREAM, payload: response.data });
  };
};

export const fetchStreams = () => async (dispatch) => {
  const response = await request.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await request.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formData) => async (dispatch) => {
  const response = await request.put(`/streams/${id}`, formData);
  dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await request.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};
