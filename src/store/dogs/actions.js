import {SET_DOG_BREEDS, SET_BREED_IMAGES, SELECT_BREED, LOADING, ERROR} from "./action-types";
import Config from '../../config/config';
import {getDogImages} from '../../api/dogApi'
import {createLink} from "../../utils/createLink";

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

export function selectBreed(payload) {
    return {type: SELECT_BREED, payload}
}

export const getBreedImages = (parameters) => {
    return dispatch => {
        dispatch(isLoading(true));
        fetch(createLink(getDogImages, parameters))
            .then(response => response.json())
            .then(data => {
                let parsedValue = Array.isArray(data.message) ? data.message : [data.message];
                dispatch(setBreedImages(parsedValue));
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
                console.log('data', data);
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
