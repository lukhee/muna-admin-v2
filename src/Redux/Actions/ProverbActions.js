import * as type from "./actionContents";
import { SetAlert } from "./AlertAction";
import axios from "axios";
import API from "../../components/Util/API";

const token = "5d7f4e9acfab25293b08298aa676495fdfb430c4";


const config = {
  headers: {
    Authorization: `token ${token}`
  }
}

export const FetchProverb = () => async (dispatch) => {
  try {
    const data = await API.get("/proverbs/");

    dispatch({
      type: type.FETCH_PROVERBS,
      payload: { data: data.data.results },
    });
  } catch (error) {
    if(error.message === 'Network Error') return dispatch(SetAlert({ successType: false, alertMsg: "Network Down, try again" }))
    console.log(`😱 Axios request failed: ${error.message}`);
  }
};

export const CreateProverbAction = (proverbData) => async (dispatch) => {
  const reformData = {...proverbData, category: [proverbData.category]}

  try {
    const result = await API.post("/proverb/", reformData, config);
    dispatch({
      type: type.CREATE_PROVERB,
      payload: result.data
    });
    
    // set alert if successu
    dispatch(SetAlert({ successType: true, alertMsg: "proverb added" }));
  } catch (error) {
    if(error.message === 'Network Error') return dispatch(SetAlert({ successType: false, alertMsg: "Network Down, try again" }))
    console.log(`😱 Axios request failed: ${error.message}`);
  }
};


export const DeleteProverb = (proverbID) => async (dispatch) => {
  try {
    await API.delete(`/proverb/${proverbID}`, config);
    dispatch({
      type: type.DELETE_PROVERB,
      payload: proverbID,
    });

    dispatch(SetAlert({ successType: false, alertMsg: "proverb removed" }));
  } catch (error) {
    if(error.message === 'Network Error') return
    dispatch(SetAlert({ successType: true, alertMsg: "Network Down, Try Again.!" }));
    dispatch(SetAlert({ successType: false, alertMsg: "Update Failed!" }));
    console.log(`😱 Axios request failed: ${error.message}`);
  }
};

export const ActivateProverb = (proverbID) => async (dispatch) => {
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

export const UpdateProverb = (data, id) => async (dispatch) => {
  try {
    const result = await API.put(`/proverb/${id}/`, data, config);
    dispatch({
      type: type.EDIT_PROVERB,
      payload: {data: result.data, id: id },
    });
    
    dispatch(SetAlert({ successType: true, alertMsg: "Update Successful!" }));
  } catch (error) {
    console.log(`😱 Axios request failed: ${error.message}`);
    if(error.message === 'Network Error') return
    dispatch(SetAlert({ successType: true, alertMsg: "Network Down, Try Again.!" }));
    dispatch(SetAlert({ successType: false, alertMsg: "Update Failed!" }));
  }
};

// @Describ  Create Translation/interpreation
// RequestType Post
export const CreateProverbProp = (data, updateType) => async (
  dispatch
) => {
  try {
    const result = await API.post(`/${updateType}/`, data, config);
    const ACTION_TYPE =
      updateType === "translation"
        ? type.CREATE_TRANSLATION
        : type.CREATE_INTERPRETATION;
    dispatch({
      type: ACTION_TYPE,
      payload: result.data,
    }); 
    
    dispatch(SetAlert({ successType: true, alertMsg: "Update Successful!" }));
  } catch (error) {
    if(error.message === 'Network Error') return
    dispatch(SetAlert({ successType: true, alertMsg: "Network Down, Try Again.!" }));
    dispatch(SetAlert({ successType: false, alertMsg: "Update Failed!" }));
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

  try {await API.put("/translation", data);
    dispatch({
      type: type.UPDATE_TRANSLATION,
    });
  } catch (error) {
    console.log(`😱 Axios request failed: ${error.message}`);
  }
};

// @Describ Delete proverb transaltion/interpretation
export const DeleteProverbProp = (id, {updateType}) => async (dispatch) => {
  try {
    await API.delete(`${updateType}/${id}`, config);
    const ACTION_TYPE = 
    updateType === "translation"
      ? type.DELETE_TRANSLATION
      : type.DELETE_INTERPRETATION;

    dispatch({
      type: ACTION_TYPE,
      payload: id
    });
    dispatch(SetAlert({ successType: false, alertMsg: "Deleted!" }));
  } catch (error) {
    if(error.message === 'Network Error') return
    dispatch(SetAlert({ successType: true, alertMsg: "Network Down, Try Again.!" }));
    dispatch(SetAlert({ successType: false, alertMsg: "Update Failed!" }));
    console.log(`😱 Axios request failed: ${error.message}`);
  }
};

export const PublishProverbProp = (id) => (dispatch) => {
  console.log(id);
};
