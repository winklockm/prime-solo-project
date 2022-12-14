import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchMedicalTeam() {
    console.log('in fetchMedicalTeam');
    try{
        const medicalteamRes = yield axios({
            method: 'GET',
            url: '/medicalteam'
        })
        yield put({
            type: 'SET_MEDICAL_TEAM',
            payload: medicalteamRes.data
        })
    } catch(error) {
        console.log('error getting medical team:', error);
    }
}

function* fetchMedicalTeamDetail(action) {
    const medicalProviderId = action.payload
    console.log('in fetchMedicalTeamDetail. medicalProviderId is:', medicalProviderId);
    try{
        const medicalteamDetailRes = yield axios({
            method: 'GET',
            url: `/medicalteam/${medicalProviderId}`
        })
        yield put({
            type: `SET_MEDICAL_TEAM_DETAIL`,
            payload: medicalteamDetailRes.data
        })
    } catch(error) {
        console.log('error getting medical team details:', error);
    }
}

function* addNewMedProvider(action) {
    console.log('in addNewMedProvider. action.payload is:', action.payload);
    try{
        const newMedProvider = action.payload
        const medProviderRes = yield axios.post('/medicalteam', newMedProvider);
        console.log('in addNewMedProvider, medProviderRes is:', medProviderRes);
        yield put({
            type: 'FETCH_MEDICAL_TEAM'
        })
    } catch(error) {
        console.log('error in POST in addNewMedProvider:', error);
    }
}

function* updateMedTeam(action) {
    try{
        const medteamToUpdate = action.payload;
        console.log('in updateMedTeam. medteamToUpdateis:', medteamToUpdate);
        yield axios({
            method: 'PUT',
            url: `/medicalteam/${medteamToUpdate.id}/edit`,
            data: medteamToUpdate
        })
        yield put({
            type: 'FETCH_MEDICAL_TEAM'
        })
    }
    catch(err) {
        console.log('Error updating medical provider:', err);
    }
}

function* deleteMedTeam(action) {
    try{
        const medteamToDelete = action.payload;
        console.log('in deleteMedTeam. medteamToDelete is:', medteamToDelete);
        yield axios({
            method: 'DELETE',
            url: `/medicalteam/${medteamToDelete}`,
            data: medteamToDelete
        })
        yield put({
            type: 'FETCH_MEDICAL_TEAM'
        })
    }
    catch(err) {
        console.log('Error deleting medical provider:', err);
    }
}

function* medicalteamSaga() {
    yield takeLatest('FETCH_MEDICAL_TEAM', fetchMedicalTeam);
    yield takeLatest('FETCH_MEDICAL_TEAM_DETAIL', fetchMedicalTeamDetail);
    yield takeLatest('ADD_NEW_MED_PROVIDER', addNewMedProvider);
    yield takeLatest('UPDATE_MEDTEAM', updateMedTeam);
    yield takeLatest('DELETE_MED_TEAM', deleteMedTeam)
}

export default medicalteamSaga;