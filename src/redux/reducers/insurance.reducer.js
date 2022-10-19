import { combineReducers } from 'redux';

const insuranceReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_INSURANCE':
          return action.payload;
        default:
          return state;
    }
}

const insuranceDetailReducer = (state = [], action) => {
  switch (action.type) {
      case 'SET_INSURANCE_DETAIL':
        return action.payload;
      case 'EDIT_INSURANCE_PROVIDER':
        return {...state, provider: action.payload}
      case 'EDIT_INSURANCE_GROUP':
        return { ...state, group: action.payload }
      case 'EDIT_INSURANCE_ID_NUMBER':
          return { ...state, id_number: action.payload }
      case 'EDIT_INSURANCE_PLAN_NAME':
          return { ...state, plan_name: action.payload }
      case 'EDIT_INSURANCE_PHONE':
          return { ...state, phone: action.payload }
      case 'EDIT_INSURANCE_NOTES':
          return { ...state, notes: action.payload }
      default:
        return state;
  }
}

export default combineReducers({
  insuranceReducer,
  insuranceDetailReducer,
}) ;