import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// function* addNewMedProvider(action) {
//     try{
//         const newMedProvider = action.payload
//         const medProviderRes = yield axios.post('/medteam');
//         yield put
//     }

// }

function* medicalteamSaga() {
    yield takeLatest('ADD_NEW_MED_PROVIDER', addNewMedProvider);
}