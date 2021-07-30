import * as api from '../api'

export const getFeedBack = () => async (dispatch) => {
    try {
        const {
            data
        } = await api.fetchFeedBack()
        dispatch({
            type: 'FETCH_ALL',
            payload: data
        })
    } catch (error) {
        console.log(error.message)
    }
}


export const createFeedBack = (feedback) => async (dispatch) => {
    try {
        const {
            data
        } = await api.createFeedBack(feedback);

        dispatch({
            type: 'CREATE',
            payload: data
        });
    } catch (error) {
        console.log(error.message);
    }
};





