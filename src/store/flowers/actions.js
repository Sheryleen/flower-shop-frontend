//need an action creator for each flower

import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllFlowers = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_FLOWERS_PENDING
  });

  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_FLOWERS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_FLOWERS_FAILED,
      payload: err
    });
  }
};

export const fetchOneFlower = id => async dispatch => {
  dispatch({
    type: types.FETCH_ONE_FLOWER_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: types.FETCH_ONE_FLOWER_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ONE_FLOWER_FAILED,
      payload: err
    });
  }
};

export const addFlower = newFlower => async dispatch => {
  dispatch({
    type: types.ADD_FLOWER_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newFlower);
    dispatch({
      type: types.ADD_FLOWER_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_FLOWER_FAILED,
      payload: err
    });
  }
};

export const removeFlower = (id, history) => async dispatch => {
  dispatch({
    type: types.REMOVE_FLOWER_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_FLOWER_SUCCESS,
      payload: response.data
    });
    // history.push("/");
  } catch (err) {
    dispatch({
      type: types.REMOVE_FLOWER_FAILED,
      payload: err
    });
  }
};
export const updateFlower = (updatedFlower, history) => async dispatch => {
  dispatch({
    type: types.UPDATE_FLOWER_PENDING
  });
  try {
    let response = await axios.patch(
      BASE_URL + `/${updatedFlower.id}`,
      updatedFlower
    );
    dispatch({
      type: types.UPDATE_FLOWER_SUCCESS,
      payload: response.data
    });
    history.push("/");
  } catch (err) {
    dispatch({
      type: types.UPDATE_FLOWER_FAILED,
      payload: err
    });
  }
};
