import { useState, useEffect, useRef, useContext, useCallback } from 'react';
import { SearchContext } from '../../../../statecontrol/searchcontext';
import { Close } from '@mui/icons-material';

export const SearchForm = ({  navSearchOn, setNavSearchOn }) => {

    const [searchPlaceholder, setSearchPlaceholder] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        if (!navSearchOn) {
            handleClear();
        }

        setTimeout(() => {
            if (navSearchOn) {
                inputRef.current.focus()
                setSearchPlaceholder(true)
            }
        }, 100)

    }, [navSearchOn])

    const handlePlaceholder = () => {
        if (inputValue) return
        else if (!searchPlaceholder) {
            setSearchPlaceholder(true);
        }
        else setSearchPlaceholder(false)
    }

    const handleFocus = (e) => {
        if (inputValue.length > 0) {
            e.target.focus();
        } else {
            e.target.blur()
        }
    }

    const handleClear = () => {
        setInputValue('');
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleClose = (e) => {
        e.preventDefault();

        if (document.activeElement === inputRef.current) {
            inputRef.current.blur()
        }
        setNavSearchOn(false);
    }

    return (
        <form method='get' role='search' className='search__form' action='/search'>
            <div className='search__form-group'>
                <div className='search__form-container container'>
                    <div className='search__form-input input__placeholder' data-input='mouse'>
                        <input 
                            id='searchInput'
                            type="search" 
                            className='search__input input' 
                            autoCorrect='off' 
                            autoComplete='off' 
                            autoCapitalize='off' 
                            spellCheck='off'
                            ref={inputRef}
                            value={inputValue}
                            placeholder={searchPlaceholder ? ' Search with a keyword': undefined}
                            onFocus={() => handlePlaceholder()}
                            onBlur={(e)=> {handlePlaceholder(), handleFocus(e)}}
                            onChange={(e) => handleInputChange(e)}
                            />
                        <label htmlFor='searchInput'>
                            Search
                        </label>
                        <button type='reset' className={`search__form-clear ${inputValue.length > 0 ? '' : 'hide'}`} onClick={handleClear}>
                            Clear
                        </button>
                    </div>
                    <button className='search__form-close btn' onClick={(e) => handleClose(e)}>
                        <Close/>
                    </button>
                </div>
            </div>
        </form>
    )
}