import React from 'react'

export default function BreedList({breeds}) {
    return <ul className="breed-list">
        {breeds.map(breed => <li className="breed-list__item">{breed}</li>)}
    </ul>

}