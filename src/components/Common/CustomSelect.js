import React, {useState} from 'react';

export default function CustomSelect({options, value, onChange, name, label}) {

    const [selectedValue, selectValue] = useState(value);

    function onValueSelected(e) {
        selectValue(e.target.value);
        onChange(e.target.value);
    }

    return (
        <div className="custom-select">
            <label htmlFor={name}>{label} </label>
            <select value={selectedValue}
                    id={name} name={name}
                    onChange={(e) => onValueSelected(e)}
            >
                {options.map((option, index) => <option value={option} key={index}>{option}</option>)}
            </select>
        </div>
    )
}