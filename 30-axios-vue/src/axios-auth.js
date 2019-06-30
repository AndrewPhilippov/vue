import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://vuejs-http-f341c.firebaseio.com',
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;