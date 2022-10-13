import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// function* addNewMedProvider(action) {
//     try{
//         const newMedProvider = action.payload
//         const 
//     }

// }

function* medicalteamSaga() {
    yield takeLatest('ADD_NEW_MED_PROVIDER', addNewMedProvider);
}