import axios from 'axios';

const instanceApi = axios.create({
    baseURL:'http://localhost:3006'
});

export default instanceApi;