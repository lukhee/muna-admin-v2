import * as type from "./actionContents";
import { SetAlert } from "./AlertAction";
import axios from "axios";
import API from "../../components/Util/API";
const token = "5d7f4e9acfab25293b08298aa676495fdfb430c4";

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

export const CreateProverbAction = (proverbData) => async (dispatch) => {

  try {
    const result = await API.post("/proverb/", proverbData, {headers: { 'Authorization': `token ${token}` }});
    console.log(result); 
    dispatch({
      type: type.CREATE_PROVERB,
    });
    
    // set alert if successu
    dispatch(SetAlert({ successType: true, alertMsg: "proverb added" }));
  } catch (error) {
    if(error.message === 'Network request failed') return alert('network down please try again')
    console.log(`😱 Axios request failed: ${error.message}`);
    // console.log(error.request.status )
  }
};
export const DeleteProverb = (proverbID) => async (dispatch) => {
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };
  try {
    await API.delete(`/proverb/${proverbID}`);

    dispatch({
      type: type.DELETE_PROVERB,
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
    const result = await API.get(`/proverbs/${proverbID}`);
    dispatch({
      type: type.ACTIVE_PROVERB,
      payload: result.data,
    });
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
