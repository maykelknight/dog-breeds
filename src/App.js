import React, {useEffect} from 'react';
import Index from './components'
import {useDispatch, useSelector} from "react-redux";
import {getBreedImages, getBreedsList} from './store/dogs/actions';
import Loader from "./components/Loader";
import Header from "./components/Header";

function App() {

    const dogBreeds = useSelector(state => state.dogBreeds);
    const breedImages = useSelector(state => state.breedImages);
    const loading = useSelector(state => state.loading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBreedsList())
        dispatch(getBreedImages())
    }, []);

    return (
        <>
            <Header/>
            <div className="index-page">
                <div className="index-page__sidebar">
                    <Index dogBreeds={dogBreeds}/>
                </div>
                <div className="index-page__content">
                    {loading ? <Loader/> : <div><img src={breedImages[0]}></img><img src={breedImages[1]}></img><img src={breedImages[3]}></img></div>}
                </div>
            </div>
        </>

    );
}

export default App;
