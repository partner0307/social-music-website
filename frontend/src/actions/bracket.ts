import { SERVER_URI } from '@/config';
import axios from 'axios';

const getBrakets = async (payload: any) => {
    const result = await axios
    .post(`${SERVER_URI}/bracket/index`, payload)
    .then(res => res.data);

    return result;
}

const hostBracket = async (payload: any) => {
    const result = await axios
    .post(`${SERVER_URI}/bracket/save`, payload)
    .then(res => res.data);

    return result;
}

const uploadImage = async (payload: any) => {
    const result = await axios
    .post(`${SERVER_URI}/bracket/upload_image`, payload)
    .then(res => res.data);

    return result;
}

const removeImage = async (payload: any) => {
    const result = await axios
    .delete(`${SERVER_URI}/bracket/remove_image/${payload}`)
    .then(res => res.data);

    return result;
}

const getBracketByUrl = async (payload: any) => {
    const result = await axios
    .get(`${SERVER_URI}/bracket/get_by_url/${payload}`)
    .then(res => res.data);

    return result;
}

export { getBrakets, hostBracket, uploadImage, removeImage, getBracketByUrl };