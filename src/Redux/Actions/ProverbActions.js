import * as type from "./actionContents";
import { SetAlert } from "./AlertAction";
import axios from "axios";

export const FetchProverb = () => async (dispatch) => {
  try {
    const data = await axios.get(
      "https://munaproverb.herokuapp.com/api/proverbs/proverbs/"
    );

    dispatch({
      type: type.FETCH_PROVERBS,
      payload: { data: data.data.results },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const CreateProverbAction = (proverbData, history) => async (
  dispatch
) => {
  const url = "https://munaproverb.herokuapp.com/api/proverbs/proverb/";
  const token = "9da32168db668794fc9125b0b47b0840db5e236b";
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };

  try {
    await axios.post(url, proverbData);

    dispatch({
      type: type.CREATE_PROVERB,
    });

    // fetch immediately new proverb added
    FetchProverb();

    // set alert if successu
    dispatch(SetAlert({ successType: true, alertMsg: "proverb added" }));
  } catch (error) {
    console.log(error.message);
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

    dispatch(SetAlert({successType: false, alertMsg: 'proverb removed'}))
  } catch (error) {
    console.log(error.message);
  }
};

export const ActivateProverb = (proverbID, history) =>  (dispatch) => {
  console.log(proverbID)
    dispatch({
      type: type.ACTIVE_PROVERB,
      payload: proverbID,
    });
    
    history.push(`/admin/proverbs/${proverbID}`);
};