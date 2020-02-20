import React, {useEffect} from 'react';
import Index from './components/Index'
import {useDispatch, useSelector} from "react-redux";
import {getBreedsList} from './store/dogs/actions';
import Header from "./components/Header";
import Showcase from './components/Showcase';

function App() {

    const dispatch = useDispatch();

    const dogBreeds = useSelector(state => state.dogBreeds);
    const breedImages = useSelector(state => state.breedImages);
    const loading = useSelector(state => state.loading);

    useEffect(() => {
        dispatch(getBreedsList())
    }, []);

    return (
        <>
            <Header/>
            <div className="index-page">
                <div className="index-page__sidebar">
                    <Index dogBreeds={dogBreeds}/>
                </div>
                <div className="index-page__content">
                    <Showcase images={breedImages}
                              loading={loading}
                    />
                </div>
            </div>
        </>

    );
}

export default App;
