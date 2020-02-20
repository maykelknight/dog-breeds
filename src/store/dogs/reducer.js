import {
    SET_DOG_BREEDS,
    SET_BREED_IMAGES,
    LOADING,
    ERROR,
    SELECT_BREED,
    SELECT_SUB_BREED,
    SELECT_PHOTOS_NUMBER
} from "./actionTypes";

const initialState = {
    dogBreeds: [],
    breedImages: [],
    loading: false,
    error: null,
    selectedBreed: '',
    selectedSubBreed: '',
    selectedPhotosNumber: '',
};

function rootReducer(state = initialState, action) {
    if (action.type === SET_DOG_BREEDS) {
        state.dogBreeds = action.payload;
    }
    if (action.type === SET_BREED_IMAGES) {
        state.breedImages = action.payload;
    }
    if (action.type === SELECT_BREED) {
        state.selectedSubBreed = '';
        state.selectedBreed = action.payload;
    }
    if (action.type === SELECT_SUB_BREED) {
        state.selectedSubBreed = action.payload;
    }
    if (action.type === SELECT_PHOTOS_NUMBER) {
        state.selectedPhotosNumber = action.payload;
    }
    if (action.type === LOADING) {
        state.loading = action.payload;
    }
    if (action.type === ERROR) {
        state.loading = action.payload;
    }
    return state;
};

export default rootReducer;