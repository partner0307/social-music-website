import { SERVER_URI } from '@/config';
import axios from 'axios';

const updateProfile = async (payload: any) => {
    const result = await axios
    .post(`${SERVER_URI}/users/save`, payload)
    .then(res => res.data);

    return result;
}

const uploadImage = async (payload: any) => {
    const result = await axios
    .post(`${SERVER_URI}/users/upload`, payload)
    .then(res => res.data);

    return result;
}

const removeImage = async (payload: any) => {
    const result = await axios
    .post(`${SERVER_URI}/users/remove_image`, payload)
    .then(res => res.data);

    return result;
}

export { updateProfile, uploadImage, removeImage };