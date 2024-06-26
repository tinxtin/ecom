import { useState, useEffect, useRef  } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

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


    function FilterTool({ tool, sub }) {

        const [activeFilters, setActiveFilters] = useState(0)
        const [selectedFilters, setSelectedFilters] = useState(null)
        const [modalIsOpen, setIsOpen] = useState(false);

        function openModal() {
            setIsOpen(true);
        }

        function closeModal() {
            setIsOpen(false);
        }

        return (
            <>
                <span className='collection__filter-item-title' onClick={openModal}>
                    Filter
                </span>
                <span className='collection__filter-wrapper'>
                    <span className='collection__filter-btn' onClick={openModal}>
                        <span style={{margin: '0 .125rem'}}>(</span>
                        <button type='button' className='collection__filter-button btn__text'>
                            { activeFilters }
                        </button>
                        <span style={{margin: '0 .125rem'}}>)</span>
                    </span>
                </span>
                <ReactModal
                    className='collection__modal modal'
                    overlayClassName='collection__modal-overlay'
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel='Modal'
                >
                    <header className='collection__modal-header'>
                        <h3 className='collection__modal-header-title'>
                            { tool }
                        </h3>
                        <button className='collection__modal-close btn btn__icon' type='button' onClick={closeModal}>
                            <span className='screenreader'> Close </span>
                            <CloseIcon className='icon__close'/>
                        </button>
                    </header>
                    <div className='collection__modal-content'>
                        <form className='collection__modal-filter'>
                            <div className='filter__form'>
                                <div className='filter__form-inner'>
                                    {Object.entries(sub).map(([title, values], i) => {
                                        return (
                                            <>
                                                <div className='filter__group-title'>
                                                    {title}
                                                </div>
                                                <ul className='filter__group-list list'>
                                                    {values.map((option, i) => {
                                                        return (
                                                            <li className='filter__group-item' key={i}>
                                                                <input type="checkbox" className='check-with-label' onClick={console.log('test')}/>
                                                                <label htmlFor="" className='label-for-check'>
                                                                    { option }
                                                                </label>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='filter__btn-group'>
                                <button type='button' className='btn-secondary btn' onClick={closeModal}>
                                    Cancel
                                </button>
                                <button type='button' className='btn-primary btn'>
                                    Apply
                                </button>
                            </div>
                        </form>
                    </div>
                </ReactModal>
            </>
        )
    }


    function SortTool({ tool, sub }) {

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
                        <select aria-label='View Options' style={{textAlign: 'right', marginLeft: -47, width: selectWidth}} 
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
                                        <FilterTool tool={tool} sub={sub}/>
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