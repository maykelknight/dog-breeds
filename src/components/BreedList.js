import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {selectBreed, getBreedImages} from '../store/dogs/actions';

export default function BreedList({filteredBreedNames}) {

    const dispatch = useDispatch();
    const selectedPhotosNumber = useSelector(state => state.selectedPhotosNumber);

    const onBreedSelected = (breed) => {
        dispatch(selectBreed(breed));
        dispatch(getBreedImages({breed: breed, photosNumber: selectedPhotosNumber}));
    };

    return <ul className="breed-list">
        {filteredBreedNames.map((breed, index) =>
            <li className="breed-list__item" key={index} onClick={() => onBreedSelected(breed)}>{breed}</li>
        )}
    </ul>

}