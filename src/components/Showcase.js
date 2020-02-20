import React from "react";
import Loader from "./Loader";
import {useDispatch, useSelector} from "react-redux";
import {getBreedImages, selectSubBreed, selectPhotosNumber} from "../store/dogs/actions";
import CustomSelect from "./Common/CustomSelect";
import createNumbersArray from "../utils/createNumbersArray"

export default function Showcase({images, loading}) {
    const dispatch = useDispatch();

    const selectedBreed = useSelector(state => state.selectedBreed);
    const selectedSubBreed = useSelector(state => state.selectedSubBreed);
    const selectedPhotosNumber = useSelector(state => state.selectedPhotosNumber);
    const dogBreeds = useSelector(state => state.dogBreeds);
    const availablePhotosNumberToSelect = 10;
    const photosNumberOptions = createNumbersArray(availablePhotosNumberToSelect);

    function onSubBreedChange(selectedSubBreed) {
        dispatch(selectSubBreed(selectedSubBreed));
        dispatch(getBreedImages({
            breed: selectedBreed,
            subBreed: selectedSubBreed,
            photosNumber: selectedPhotosNumber
        }));
    }

    function onPhotosNumberChange(selectedPhotosNumber) {
        dispatch(selectPhotosNumber(selectedPhotosNumber));
        dispatch(getBreedImages({
            breed: selectedBreed,
            subBreed: selectedSubBreed,
            photosNumber: selectedPhotosNumber
        }));
    }

    return loading ? <Loader/> : <div className="showcase">

        <p className="showcase__title">{selectedBreed ? selectedBreed : 'Select breed type'}</p>

        {selectedBreed && <div>
            {dogBreeds[selectedBreed].length > 1 &&
            <CustomSelect value={selectedSubBreed}
                          name="subBreed"
                          label="Sub breed"
                          options={dogBreeds[selectedBreed]}
                          onChange={(e) => onSubBreedChange(e)}
            />
            }
            <CustomSelect value={selectedPhotosNumber}
                          name="photosNumber"
                          label="Photos number"
                          options={photosNumberOptions}
                          onChange={(e) => onPhotosNumberChange(e)}
            />

            {images.map((image, index) => <img src={image} key={index} className="dog-image"/>)}
        </div>}


    </div>
}