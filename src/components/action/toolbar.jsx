import { useState, useEffect, useRef  } from 'react';

export const Toolbar = () => {

    const toolbarOptions = {
        Filter: {
            SkinTypeFilter: [
                'Dry',
                'Normal',
                'Oily',
                'Sensitive',
            ],
            SkinConcernFilter: [
                'Dryness',
                'Dullness',
                'Fine lines',
                'Pores',
            ]
        },
        Sort: {
            'Featured': {
                value: 'manual',
                width: 104,
            },
            'Best selling': {
                value: 'best-selling',
                width: 120,
            },
            'Price low to high': {
                value: 'price-ascending',
                width: 150,
            },
            'Price high to low': {
                value:'price-descending',
                width: 150,
            },
            'Newest first':{
                value: 'created-descending',
                width: 120,
            },
        }
    }

    function FilterModal() {
        console.log('test')
    }

    function FilterTool() {

        return (
            <>
                <span className='collection__filter-item-title' onClick={FilterModal}>
                    Filter
                </span>
                <span className='collection__filter-wrapper'>
                    <span className='collection__filter-btn' onClick={FilterModal}>
                        <span style={{margin: '0 .125rem'}}>(</span>
                        <button type='button' className='collection__filter-button btn__text'>
                            0
                        </button>
                        <span style={{margin: '0 .125rem'}}>)</span>
                    </span>
                </span>
            </>
        )
    }


    function SortTool({ tool, sub }) {

        // const [selectSort, setSelectSort] = useState({
        //     width: '',
        //     sort: ''
        // });
        const [selectWidth, setSelectWidth] = useState(null);

        return (
            <>
                <span className='collection__filter-item-title'>
                    { tool }
                </span>
                <div className='collection__filter-wrapper'>
                    <span style={{margin: '0 .125rem'}}>(</span>
                    <fieldset>
                        <legend className='screenreader'>View Options</legend>
                        <select aria-label='View Options' style={{textAlign: 'right', marginLeft: '-47px', width: selectWidth}} 
                        className='collection__filter-select btn__text' onChange={(e) => {
                            Object.values(sub).forEach((item) => {
                                if (e.target.value === item.value) {
                                    setSelectWidth(item.width)
                                }
                            })
                        }}>
                            {Object.entries(sub).map(([item, value], i) => {
                                return (
                                    <option className='filter__option' key={i} value={value.value}>
                                        { item }
                                    </option>
                                )
                            })}
                        </select>
                    </fieldset>
                    <span style={{margin: '0 .125rem'}}>)</span>
                </div>
            </>
        )
    }

    return (
        <div className='collection__toolbar'>
            <div className='collection__toolbar-container container'>
                <div className='collection__toolbar-filter'>
                    <ul className='collection__filter-list'>
                        { Object.entries(toolbarOptions).map(([ tool, sub ], i) => {
                            if ( tool.toLocaleLowerCase() === 'sort') {
                                return (
                                    <li className='collection__filter-item' key={i}>
                                        <SortTool tool={tool} sub={sub}/>
                                    </li>
                                )
                            } else {
                                return (
                                    <li className='collection__filter-item' key={i}>
                                        <FilterTool />
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}