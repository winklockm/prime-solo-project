import { combineReducers } from 'redux';

const medicationReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MEDICATIONS':
          return action.payload;
        default:
          return state;
    }
}

const medicationDetailReducer = (state = [], action) => {
  switch (action.type) {
      case 'SET_MEDICATION_DETAIL':
        return action.payload;
      case 'EDIT_MEDICATION_NAME':
        return {...state, name: action.payload}
      case 'EDIT_MEDICATION_INDICATION':
        return { ...state, indication: action.payload }
      case 'EDIT_MEDICATION_DOSE':
          return { ...state, dose: action.payload }
      case 'EDIT_MEDICATION_FREQUENCY':
          return { ...state, frequency: action.payload }
      case 'EDIT_MEDICATION_ROUTE':
          return { ...state, route: action.payload }
      case 'EDIT_MEDICATION_NOTES':
          return { ...state, notes: action.payload }
      default:
        return state;
  }
}

export default combineReducers({
  medicationReducer,
  medicationDetailReducer,
}) ;