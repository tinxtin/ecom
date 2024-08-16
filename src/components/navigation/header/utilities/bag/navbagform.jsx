import { BagEmpty } from './navbagempty'

export const BagForm = ( { itemsInBag }) => {
    
    return (
       <form action="/cart" method='post' className='bag__form'>
            <header className='bag__header'>
                test
            </header>
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