import axios from 'axios';

export const SEND_DATA = "SEND_DATA";
export const GET_AUDIT_INFO = 'GET_AUDIT_INFO';

export const setData = (typeList) => dispatch => {
    console.log(typeList)
    
    dispatch({ type: SEND_DATA, payload: typeList});
};

export const getData = () => dispatch => {
    console.log("actions");
        axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
      .then(res => {
        if(!res.error) {
            dispatch({ type: GET_AUDIT_INFO, payload: res.data});
        }        
      })
}