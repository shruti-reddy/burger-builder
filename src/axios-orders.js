import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-ff4e3.firebaseio.com/'
});

export default instance;