import * as type from "./actionContents";


export const SetAlert = (alertData) => (dispatch) => {
    // alertData: {alertType, alertMsg}
    dispatch({
      type: type.SET_ALERT,
      payload: alertData,
    });

    setTimeout(() => dispatch({
        type: type.REMOVE_ALERT,
    }), 5000);
};

export const RemoveAlert = () => (dispatch) => {
    dispatch({
      type: type.REMOVE_ALERT,
    });
};