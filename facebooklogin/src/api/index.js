import axios from 'axios'
const url = 'http://localhost:4000/feedback'

export const fetchFeedBack = () => axios.get(url)

export const createFeedBack = (newFeedBack) => axios.post(url, newFeedBack)
