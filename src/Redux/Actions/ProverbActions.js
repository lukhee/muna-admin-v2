import * as type from "./actionTypes";
import { SetAlert } from "./alertAction";
import API from "../../components/Util/API";

const token = localStorage.getItem('token')

const config = {
  headers: {
    Authorization: `token ${token}`
  }
}

export const FetchProverb = (page, pageIndex) => async (dispatch) => {
  if(page === undefined) {
    page = 1
  }
  try {
    dispatch({type: type.TOGGLE_LOADING})
    const data = await API.get(`/proverbs/?page=${page}`); 
    dispatch({
      type: type.FETCH_PROVERBS,
      payload: { data: data.data.results, proverbCount: data.data.count, pageIndex: pageIndex },
    });
  } catch (error) {
    if(error.message === 'Network Error') return dispatch(SetAlert({ successType: false, alertMsg: "Network Down, try again" }))
    console.log(`😱 Axios request failed: ${error.message}`);
  }
};

export const CreateProverbAction = (proverbData) => async (dispatch) => {
  const reformData = {...proverbData, category: [proverbData.category]}

  try {
    
  console.log(proverbData)
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

export const UpdateProverb = (data, id, {updateType}) => async (dispatch) => {
  try {
    const result = await API.put(`/proverb/${id}/`, data, config);
    const ACTION_TYPE = 
    updateType === "publish"
      ? type.PUBLISH_PROVERB
      : type.EDIT_PROVERB;

    dispatch({
      type: ACTION_TYPE,
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
export const UpdateProverbProp = ({formData, updateId, updateType}, proverb) => async (dispatch) => {
  const newData = {...formData, proverb: proverb}
  try {
     API.put(`/${updateType}/${updateId}/`, newData, config);
     const ACTION_TYPE = updateType === "translation"
     ? type.UPDATE_TRANSLATION
     : type.UPDATE_INTERPRETATION;
    dispatch({
      type: ACTION_TYPE,
      payload: {data: formData, proverbId: proverb, updateId: updateId  }
    });
    dispatch(SetAlert({ successType: true, alertMsg: `Update ${updateType}!` }));
  } catch (error) {
    if(error.message === 'Network Error') return
    dispatch(SetAlert({ successType: true, alertMsg: "Network Down, Try Again.!" }));
    dispatch(SetAlert({ successType: false, alertMsg: "Update Failed!" }));
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
    dispatch(SetAlert({ successType: false, alertMsg: `Deleted ${updateType}!` }));
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
