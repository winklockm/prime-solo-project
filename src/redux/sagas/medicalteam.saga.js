import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addNewMedProvider(action) {
    console.log('in addNewMedProvider. action.payload is:', action.payload);
    try{
        const newMedProvider = action.payload
        const medProviderRes = yield axios.post('/medicalteam', newMedProvider);
        console.log('in addNewMedProvider, medProviderRes is:', medProviderRes);
    } catch(error) {
        console.log('error in POST in addNewMedProvider:', error);
    }
}

function* medicalteamSaga() {
    yield takeLatest('ADD_NEW_MED_PROVIDER', addNewMedProvider);
}

export default medicalteamSaga;