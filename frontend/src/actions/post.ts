import axios from 'axios';
import { SERVER_URI } from '@/config';

const savePost = async (payload: any) => {
    const result = await axios.post(`${SERVER_URI}/post/save`, payload)
    .then(res => res.data);

    return result;
}

const uploadImage = async (payload: any) => {
    const result = await axios.post(`${SERVER_URI}/post/upload`, payload)
    .then(res => res.data);

    return result;
}

export { savePost, uploadImage };