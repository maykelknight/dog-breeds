import React, {useState} from "react";
import Loader from "../Loader";
import {useDispatch, useSelector} from "react-redux";
import {getBreedImages} from '../../store/dogs/actions';
import CustomSelect from "../Common/CustomSelect";

function Showcase({images, loading}) {
    const dispatch = useDispatch();

    const selectedBreed = useSelector(state => state.selectedBreed);
    const dogBreeds = useSelector(state => state.dogBreeds);
    const availablePhotosNumberToSelect = 10;
    const photosNumberOptions = createPhotosNumberOptions(availablePhotosNumberToSelect);
    const [selectedSubBreed, selectSubBreed] = useState('');

    function createPhotosNumberOptions(number) {
        let options = [];
        for (let i = 1; i <= number; i++) {
            options.push(<option value={i}>{i}</option>)
        }
        return options;
    }

    function onSubBreedChange(selectedSubBreed) {
        selectSubBreed(selectedSubBreed);
        dispatch(getBreedImages({breed: selectedBreed, subBreed: selectedSubBreed}))
    }

    return loading ? <Loader/> : <div>
        <pre>SELECTED: {selectSubBreed}</pre>
        {dogBreeds[selectedBreed] && dogBreeds[selectedBreed].length > 1 &&
            <CustomSelect value={selectedSubBreed}
                          options={dogBreeds[selectedBreed]}
                          onChange={(e) => onSubBreedChange(e)}
            />
        }

        <div>
            <label htmlFor="photosNumber">Choose photos number: </label>
            <select id="photosNumber" name="photosNumber">
                {photosNumberOptions}
            </select>
        </div>

        <br/>

        <img src={images[0]}></img>
        <img src={images[1]}></img>
        <img src={images[3]}></img>
    </div>
}

export default React.memo(Showcase)