const patientReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_PATIENT_IMAGE':
        return action.payload;
      case 'UNSET_PATIENT IMAGE':
        return '';
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default patientReducer;
  