import { BagEmpty } from './navbagempty';
import { Close } from '@mui/icons-material';

export const BagForm = ( { itemsInBag, setNavBagOn }) => {
    
    return (
       <form action="/cart" method='post' className='bag__form'>
            <div className='bag__header'>
                <h3 className='bag__header-title'>
                    Your bag
                </h3>
                <button type='button' className='btn' onClick={() => setNavBagOn(false)}>
                    <Close />
                </button>
            </div>
            <div className='bag__content'>
                <div className='bag__content-info'>

                </div>
                <div className='bag__content-summary'>

                </div>
                <div className='bag__content-shipping'>

                </div>
                <div className='bag__empty'>
                    {itemsInBag.length === 0 && 
                        <BagEmpty />
                    }
                </div>
            </div>
        </form>
    )
}