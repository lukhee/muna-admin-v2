import * as type from "./actionContents";
import { SetAlert } from "./AlertAction";
import axios from "axios";
import API from "../../components/Util/API";
const token = "9da32168db668794fc9125b0b47b0840db5e236b";

export const FetchProverb = () => async (dispatch) => {
  try {
    const data = await API.get("/proverbs/");

    dispatch({
      type: type.FETCH_PROVERBS,
      payload: { data: data.data.results },
    });
  } catch (error) {
    console.log(`😱 Axios request failed: ${error.message}`);
  }
};

export const CreateProverbAction = (proverbData, history) => async (
  dispatch
) => {
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };

  try {
    await API.post("/proverbs/proverb", proverbData);

    dispatch({
      type: type.CREATE_PROVERB,
    });

    // fetch immediately new proverb added
    FetchProverb();

    // set alert if successu
    dispatch(SetAlert({ successType: true, alertMsg: "proverb added" }));
  } catch (error) {
    console.log(`😱 Axios request failed: ${error.message}`);
  }
};

export const DeleteProverb = (proverbID) => async (dispatch) => {
  try {
    await axios.delete(
      "https://munaproverb.herokuapp.com/api/proverbs/proverbs/"
    );

    dispatch({
      type: type.FETCH_PROVERBS,
      payoad: proverbID,
    });

    dispatch(SetAlert({ successType: false, alertMsg: "proverb removed" }));
  } catch (error) {
    console.log(`😱 Axios request failed: ${error.message}`);
  }
};

export const ActivateProverb = (proverbID) => async (dispatch) => {
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };
  try {
    const result = await API.get(`/proverb/${proverbID}`);
    console.log(result)
    // dispatch({
    //   type: type.ACTIVE_PROVERB,
    //   payload: proverbID,
    // });
  } catch (error) {
    console.log(`😱 Axios request failed: ${error.message}`);
  }
};

// @Describ  Create Translation/interpreation
// RequestType Post
export const CreateProverbProp = ({ formData, updateType, proverb }) => async (
  dispatch
) => {
  const data = { ...formData, proverb };
  console.log(data);
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };

  try {
    const result = await API.post(`/${updateType}`, data);
    const proverbType =
      updateType === "translation"
        ? type.CREATE_TRANSLATION
        : type.CREATE_INTERPRETATION;
    dispatch({
      type: proverbType,
      payload: { ...data, id: 183 },
    });
  } catch (error) {
    console.log(`😱 Axios request failed: ${error.message}`);
  }
};

// @Describ  Update Translation/interpretation
// RequestType Post
export const UpdateProverbProp = (data) => async (dispatch) => {
  console.log(data);
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };

  try {
    const result = await API.put("/translation", data);
    console.log(result);
    dispatch({
      type: type.UPDATE_TRANSLATION,
      payoad: "data",
    });
  } catch (error) {
    console.log(`😱 Axios request failed: ${error.message}`);
  }
};

// @Describ Delete proverb transaltion/interpretation
export const DeleteProverbProp = (id) => async (dispatch) => {
  console.log(id);
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };
  try {
    // const result = await API.delete("/translation", id);
    // dispatch({
    //   type: type.UPDATE_TRANSLATION,
    //   payoad: "data",
    // });
  } catch (error) {
    console.log(`😱 Axios request failed: ${error.message}`);
  }
};

export const PublishProverbProp = (id) => (dispatch) => {
  console.log(id);
};
