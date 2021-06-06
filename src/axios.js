import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://asia-south1-midyamezonclone.cloudfunctions.net/api',

    //baseURL: 'http://localhost:5001/midyamezonclone/asia-south1/api',
});

export default instance;