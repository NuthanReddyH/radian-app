export const SEND_DATA = "SEND_DATA";

export const setData = (typeList) => dispatch => {
    console.log(typeList)
    dispatch({ type: SEND_DATA, payload: typeList});
};