import { SERVER_URI } from '@/config';
import axios from 'axios';

const getUser = async (payload: any) => {
    const result = await axios
    .post(`${SERVER_URI}/users/index`, payload)
    .then(res => res.data);

    return result;
}

const updateProfile = async (payload: any) => {
    const result = await axios
    .post(`${SERVER_URI}/users/save`, payload)
    .then(res => res.data);

    return result;
}

const followUser = async (payload: any) => {
    const result = await axios
    .post(`${SERVER_URI}/users/follow`, payload)
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

export { getUser, updateProfile, uploadImage, removeImage, followUser };