import { useState, useEffect, useRef  } from 'react';
export const Checkbox = ({ changeActive, option, title, idx }) => {

    return (
        <>
            <input 
            type="checkbox" 
            className='check-with-label' 
            value={ option.name } 
            id={`${title.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()}-${idx}`}
            checked={option.checked}
            onChange={() => {
                option.checked = !option.checked;
                if (option.checked) {
                    changeActive(1)
                } else {
                    changeActive(-1)
                }
            }}
            />
            <label htmlFor={`${title.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()}-${idx}`} 
                className='label-for-check' 
                style={ option.checked ? {border: '1px solid rgb(255, 255, 255)', outline: 'solid 1px rgb(0, 0, 0)'} : {border: ''}}
                >
                { option.name }
            </label>
        </>
    )
}