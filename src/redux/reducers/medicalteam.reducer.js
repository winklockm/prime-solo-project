import { combineReducers } from 'redux';

const medicalteamReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MEDICAL_TEAM':
          return action.payload;
        case 'CLEAR_MEDICAL_TEAM':
          return [];
        default:
          return state;
    }
}

const medicalteamDetailReducer = (state = [], action) => {
  switch (action.type) {
      case 'SET_MEDICAL_TEAM_DETAIL':
        return action.payload;
      case 'CLEAR_MEDICAL_TEAM_DETAIL':
        return [];
      case 'EDIT_MEDTEAM_NAME':
        return {...state, name: action.payload}
      case 'EDIT_MEDTEAM_SPECIALTY':
        return { ...state, specialty: action.payload }
      case 'EDIT_MEDTEAM_CLINIC':
          return { ...state, clinic: action.payload }
      case 'EDIT_MEDTEAM_PHONE':
          return { ...state, phone: action.payload }
      case 'EDIT_MEDTEAM_PORTAL':
          return { ...state, portal: action.payload }
      case 'EDIT_MEDTEAM_NEXT_APPOINTMENT':
          return { ...state, next_appointment: action.payload }
      case 'EDIT_MEDTEAM_COMMENTS':
          return { ...state, comments: action.payload }
      default:
        return state;
  }
}

export default combineReducers({
  medicalteamReducer,
  medicalteamDetailReducer,
}) ;