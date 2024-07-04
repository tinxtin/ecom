import { useState, useEffect, useRef  } from 'react';
export const Checkbox = ({ changeActive, label, title, idx }) => {

    const [isChecked, setIsChecked] = useState(false);
    return (
        <>
            <input 
            type="checkbox" 
            className='check-with-label' 
            value={ label } 
            id={`${title.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()}-${idx}`}
            checked={isChecked}
            onChange={() => {
                setIsChecked((prev) => !prev);
                if (!isChecked) {
                    changeActive(1)
                } else {
                    changeActive(-1)
                }
            }}
            />
            <label htmlFor={`${title.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()}-${idx}`} 
                className='label-for-check' style={ isChecked ? {border: '1px solid rgb(255, 255, 255)', outline: 'solid 1px rgb(0, 0, 0)'} : {border: ''}}>
                { label }
            </label>
        </>
    )
}