import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addMedication(action) {
    console.log('in addMedication. action.payload is:', action.payload);
    try{
        const newMedication = action.payload
        const newMedicationRes = yield axios.post('/medication', newMedication);
        console.log('in addMedication, newMedicationRes is:', newMedicationRes);
    } catch(error) {
        console.log('error in POST in addMedication:', error);
    }
}

function* fetchMedications() {
    console.log('in fetchMedications');
    try{
        const medicationsRes = yield axios({
            method: 'GET',
            url: '/medication'
        })
        yield put({
            type: 'SET_MEDICATIONS',
            payload: medicationsRes.data
        })
    } catch(error) {
        console.log('error getting medications:', error);
    }
}

function* fetchMedicationDetail(action) {
    const medicationId = action.payload
    console.log('in fetchMedicationDetail. medicationId is:', medicationId);
    try{
        const medicationDetailRes = yield axios({
            method: 'GET',
            url: `/medication/${medicationId}`
        })
        yield put({
            type: `SET_MEDICATION_DETAIL`,
            payload: medicationDetailRes.data
        })

    } catch(error) {
        console.log('error getting medication details:', error);
    }
}

function* updateMedication(action) {
    try{
        const medicationToUpdate = action.payload;
        console.log('in updateMedication. medicationToUpdateis:', medicationToUpdate);
        yield axios({
            method: 'PUT',
            url: `/medication/${medicationToUpdate.id}/edit`,
            data: medicationToUpdate
        })
        yield put({
            type: 'FETCH_MEDICATIONS'
        })
    }
    catch(err) {
        console.log('Error updating medical provider:', err);
    }
}

function* deleteMedication(action) {
    try{
        const medicationToDelete = action.payload;
        console.log('in deleteMedication. medicationToDelete is:', medicationToDelete);
        yield axios({
            method: 'DELETE',
            url: `/medication/${medicationToDelete}`,
            data: medicationToDelete
        })
        yield put({
            type: 'FETCH_MEDICATIONS'
        })
    }
    catch(err) {
        console.log('Error deleting medication:', err);
    }
}

function* medicationSaga() {
    yield takeLatest('FETCH_MEDICATIONS', fetchMedications);
    yield takeLatest('FETCH_MEDICATION_DETAIL', fetchMedicationDetail);
    yield takeLatest('ADD_MEDICATION', addMedication);
    yield takeLatest('UPDATE_MEDICATION', updateMedication);
    yield takeLatest('DELETE_MEDICATION', deleteMedication)
}

export default medicationSaga;