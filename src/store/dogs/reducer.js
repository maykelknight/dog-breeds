import {SET_DOG_BREEDS, SET_BREED_IMAGES, LOADING, ERROR} from "./action-types";

const initialState = {
    dogBreeds: [],
    breedImages: [],
    loading: false,
    error: null
};

function rootReducer(state = initialState, action) {
    if (action.type === SET_DOG_BREEDS) {
        state.dogBreeds = action.payload;
    }
    if (action.type === SET_BREED_IMAGES) {
        state.breedImages = action.payload;
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