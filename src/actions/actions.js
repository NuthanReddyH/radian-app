import axios from 'axios';

export const SEND_DATA = "SEND_DATA";
export const GET_AUDIT_INFO = 'GET_AUDIT_INFO';
export const GET_STATUS_DETAILS = 'GET_STATUS_DETAILS';

export const setData = (typeList) => dispatch => {
    console.log(typeList)
    
    dispatch({ type: SEND_DATA, payload: typeList});
};

export const getData = () => dispatch => {
  axios.get(`http://10.24.18.62:8081/rvp/bbpdbloader/auditinfo`)
  .then(res => {
    dispatch({ type: GET_AUDIT_INFO, payload: res.data});
  })
  .catch(error =>{
    console.log(error.Message);
  })
}

export const getStatusDetails = (id) => dispatch => {
  let url = "http://10.24.18.62:8081/rvp/bbpdbloader/auditinfo/"+id;
  console.log("Requested resource " + url);
  axios.get(url)
  .then(res => {
    console.log("ID:" + id);
    console.log("server response : " + JSON.stringify(res.data));
    dispatch({ type: GET_STATUS_DETAILS, payload: res.data});
  })
  .catch(error =>{
    console.log(error);
  })
}