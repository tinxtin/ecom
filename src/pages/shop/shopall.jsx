import { Toolbar } from '../../components/action/toolbar';
import { ProductCard } from '../../components/collection/cardproduct';

export const Shop = ({ promoHeight, Collections }) => {
    
    return (
        <>
            <section className='collection'>
                <Toolbar {...{ promoHeight }}/>
                <div className='collection__container container'>
                    <ul className='collection__grid'>
                        {Object.values(Collections).map((arr) => arr.map((product, i ) => <ProductCard key={i} {...{product}}/>))}
                    </ul>
                </div>
            </section>   
        </>
    )
}
