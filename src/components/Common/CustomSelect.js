import React, {useState} from 'react';

function Select({options, value, onChange}) {

    const [selectedValue, selectValue] = useState('');

    function onValueSelected(e) {
        console.log('e2', e.target.value);
        selectValue(e.target.value);

        onChange(e.target.value);
    }

    console.log('options', options);
    return (
        <div>
            <label htmlFor="subBreed">Choose a sub breed: {selectedValue}</label>
            <select value={selectedValue} id="subBreed" name="subBreed" onChange={(e) => onValueSelected(e)}>
                {options.map(option => <option value={option}>{option}</option>)}
            </select>
        </div>
    )
}

const CustomSelect = React.memo(Select);

export default CustomSelect;