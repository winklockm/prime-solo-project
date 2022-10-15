const medicalteamReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MEDICAL_TEAM':
          return action.payload;
        default:
          return state;
    }
}

export default medicalteamReducer;