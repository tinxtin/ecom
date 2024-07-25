import { useState, useEffect, useRef, useContext  } from 'react';

export const SearchForm = () => {

    const [searchPlaceholder, setSearchPlaceholder] = useState(false);


    const searchFocused = () => {
        if (!searchPlaceholder) setSearchPlaceholder(true)
        else setSearchPlaceholder(false)
    }

    return (
        <form method='get' role='search' className='search__form'>
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
                            placeholder={searchPlaceholder && ' Search with a keyword'}
                            onFocus={() => searchFocused()}
                            onBlur={()=> searchFocused()}
                            />
                        <label for='searchInput'>
                            Search
                        </label>
                        <button type='reset' className='search__form-clear'>
                            Clear
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}