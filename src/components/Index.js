import React, {useState, useEffect} from 'react';
import BreedList from "./BreedList";

export default function Index({dogBreeds}) {

    let [breedsList, setBreeds] = useState([]);
    let [breedInput, setBreedInput] = useState('');
    let [filteredBreeds, setFilteredBreeds] = useState([]);

    useEffect(() => {
        setFilteredBreeds(Object.keys(dogBreeds));
        setBreeds(dogBreeds);
    }, [dogBreeds]);

    const handleInputChange = (e) => {
        console.log('breedList', breedsList);
        setBreedInput(e.target.value);
        let filteredBreeds = Object.keys(breedsList).filter(breed => {
            if(breed.startsWith(e.target.value)) {
                return breedsList[breed]
            }
        });
        setFilteredBreeds(filteredBreeds)
    };

    return <>
        <div className="container">
            <input type="text" onChange={handleInputChange} value={breedInput} placeholder="Insert breed type"/>
            <BreedList filteredBreedNames={filteredBreeds}
                       breeds={breedsList}
            />
        </div>
    </>
}