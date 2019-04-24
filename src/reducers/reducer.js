import { SEND_DATA , GET_AUDIT_INFO , GET_STATUS_DETAILS} from '../actions'

const initialState = {
    data: [],
    auditData: []
}
export default function(state = initialState, action) {
    switch (action.type) {
      case SEND_DATA:
        return {
          ...state,
          data: action.payload
        };
        case GET_AUDIT_INFO:
        return {
          ...state,
          auditData: action.payload
        };
        case GET_STATUS_DETAILS:
        return{
          ...state,
          auditStatusDetails : action.payload
        };
      default:
        return state;
    }
  }
  