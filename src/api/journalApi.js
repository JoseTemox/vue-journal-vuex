import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demo-curso-default-rtdb.firebaseio.com'
})

export default journalApi