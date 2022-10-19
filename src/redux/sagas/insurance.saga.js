import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addInsurance(action) {
    console.log('in addInsurance. action.payload is:', action.payload);
    try{
        const newInsurance = action.payload
        const newInsuranceRes = yield axios.post('/insurance', newInsurance);
        console.log('in addInsurance, newInsuranceRes is:', newInsuranceRes);
    } catch(error) {
        console.log('error in POST in addInsurance:', error);
    }
}

function* fetchInsurance() {
    console.log('in fetchInsurance');
    try{
        const insuranceRes = yield axios({
            method: 'GET',
            url: '/insurance'
        })
        // console.log('insuranceRes.data is:', insuranceRes.data)
        yield put({
            type: 'SET_INSURANCE',
            payload: insuranceRes.data
        })
    } catch(error) {
        console.log('error getting insurance:', error);
    }
}

function* fetchInsuranceDetail(action) {
    const insuranceId = action.payload
    console.log('in fetchInsuranceDetail. insuranceId is:', insuranceId);
    try{
        const insuranceDetailRes = yield axios({
            method: 'GET',
            url: `/insurance/${insuranceId}`
        })
        yield put({
            type: `SET_INSURANCE_DETAIL`,
            payload: insuranceDetailRes.data
        })

    } catch(error) {
        console.log('error getting insurance details:', error);
    }
}

function* updateInsurance(action) {
    try{
        const insuranceToUpdate = action.payload;
        console.log('in updateInsurance. insuranceToUpdateis:', insuranceToUpdate);
        yield axios({
            method: 'PUT',
            url: `/insurance/${insuranceToUpdate.id}/edit`,
            data: insuranceToUpdate
        })
        yield put({
            type: 'FETCH_INSURANCE'
        })
    }
    catch(err) {
        console.log('Error updating insurance:', err);
    }
}

function* deleteInsurance(action) {
    try{
        const insuranceToDelete = action.payload;
        console.log('in deleteInsurance. insuranceToDelete is:', insuranceToDelete);
        yield axios({
            method: 'DELETE',
            url: `/insurance/${insuranceToDelete}`,
            data: insuranceToDelete
        })
    }
    catch(err) {
        console.log('Error deleting insurance:', err);
    }
}

function* insuranceSaga() {
    yield takeLatest('FETCH_INSURANCE', fetchInsurance);
    yield takeLatest('FETCH_INSURANCE_DETAIL', fetchInsuranceDetail);
    yield takeLatest('ADD_INSURANCE', addInsurance);
    yield takeLatest('UPDATE_INSURANCE', updateInsurance);
    yield takeLatest('DELETE_INSURANCE', deleteInsurance)
}

export default insuranceSaga;