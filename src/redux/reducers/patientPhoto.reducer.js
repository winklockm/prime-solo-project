const patientPhotoReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PATIENT_PHOTO':
            return action.payload;
        case 'CLEAR_PATIENT_PHOTO':
            return state;
        default:
            return state;
    }
}

export default patientPhotoReducer;