import { useState, useEffect, useRef, useContext  } from 'react';
import { SearchContext } from '../../../../statecontrol/searchcontext';
import { Close } from '@mui/icons-material';

export const SearchForm = ({  navSearchOn, setNavSearchOn }) => {

    const [searchPlaceholder, setSearchPlaceholder] = useState(false);
    const [inputValue, setInputValue] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (!navSearchOn) {
            handleClear();
        }
    }, [navSearchOn])

    // useEffect(() => {
    //     if (inputRef.current) {
    //         inputRef.current.focus();
    //     }
    // }, [])

    const handleFocus = () => {
        if (inputValue) return
        else if (!searchPlaceholder) setSearchPlaceholder(true)
        else setSearchPlaceholder(false)
    }

    const handleInputFocus = (e) => {
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
        handleClear()
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
                            autoFocus={navSearchOn}
                            placeholder={searchPlaceholder ? ' Search with a keyword': undefined}
                            onFocus={() => handleFocus()}
                            onBlur={(e)=> {handleFocus(), handleInputFocus(e)}}
                            onChange={handleInputChange}
                            />
                        <label for='searchInput'>
                            Search
                        </label>
                        <button type='reset' className='search__form-clear' onClick={handleClear}>
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