import { SEND_DATA , GET_AUDIT_INFO} from '../actions'

const initialState = {
    data: []
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
      default:
        return state;
    }
  }
  