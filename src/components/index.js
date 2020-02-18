import React, {useState, useEffect} from 'react';
import BreedList from "./BreedList";

export default function Index({dogBreeds}) {

    let [breedsList, setBreeds] = useState([]);
    let [breedInput, setBreedInput] = useState('');
    let [filteredBreeds, setFilteredBreeds] = useState([]);

    useEffect(() => {
        setFilteredBreeds(Object.keys(dogBreeds));
        setBreeds(Object.keys(dogBreeds));
    }, [dogBreeds]);

    const handleInputChange = (e) => {
        setBreedInput(e.target.value);
        let filteredBreeds = breedsList.filter(breed => {
            if(breed.startsWith(e.target.value)) {
                return breed
            }
        });
        setFilteredBreeds(filteredBreeds)
    };

    return <>
        <div className="container">
            <input type="text" onChange={handleInputChange} value={breedInput} placeholder="Insert breed type"/>
            <BreedList breeds={filteredBreeds}/>
        </div>
    </>
}