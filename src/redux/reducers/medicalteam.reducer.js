import { combineReducers } from 'redux';

const medicalteamReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MEDICAL_TEAM':
          return action.payload;
        default:
          return state;
    }
}

const medicalteamDetailReducer = (state = [], action) => {
  switch (action.type) {
      case 'SET_MEDICAL_TEAM_DETAIL':
        return action.payload;
      default:
        return state;
  }
}

export default combineReducers({
  medicalteamReducer,
  medicalteamDetailReducer
}) ;