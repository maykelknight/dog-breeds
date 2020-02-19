import React from 'react'
import {useDispatch} from "react-redux";
import {selectBreed, getBreedImages} from '../store/dogs/actions';

export default function BreedList({filteredBreedNames}) {

    const dispatch = useDispatch();

    const onBreedSelected = (breed) => {
        dispatch(selectBreed(breed));
        dispatch(getBreedImages({breed: breed, photosNumber: 1}));
    };

    return <ul className="breed-list">
        {filteredBreedNames.map(breed =>
            <li className="breed-list__item" onClick={() => onBreedSelected(breed)}>{breed}</li>
        )}
    </ul>

}