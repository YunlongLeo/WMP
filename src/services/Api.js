import axios from 'axios'
export default () => {
    console.log(process.env.DEMO_GREETING);
    return axios.create({
        baseURL: 'http://localhost:2091'
    })
}