import {SET_DOG_BREEDS, SET_BREED_IMAGES, LOADING, ERROR} from "./action-types";
import Config from '../../config/config';


export function setDogBreeds(payload) {
    return {type: SET_DOG_BREEDS, payload}
}

export function setBreedImages(payload) {
    return {type: SET_BREED_IMAGES, payload}
}

export function isLoading(payload) {
    return {type: LOADING, payload}
};

export function isError(payload) {
    return {type: ERROR, payload}
};

export const getBreedImages = () => {
    return dispatch => {
        dispatch(isLoading(true));
        fetch(Config.API_URL + "/breed/hound/images")
            .then(response => response.json())
            .then(data => {
                console.log('data', data);
                dispatch(setBreedImages(data.message));
            })
            .catch(err => {
                dispatch(isError(err))
            })
            .finally(() => {
                dispatch(isLoading(false))
            })
    }
};

export const getBreedsList = () => {
    return dispatch => {
        dispatch(isLoading(true));
        fetch(Config.API_URL + "/breeds/list/all")
            .then(response => response.json())
            .then(data => {
                dispatch(setDogBreeds(data.message));
            })
            .catch(err => {
                dispatch(isError(err))
            })
            .finally(() => {
                dispatch(isLoading(false))
            })
    }
};