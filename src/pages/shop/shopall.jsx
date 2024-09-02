import { Toolbar } from '../../components/action/toolbar';
import { ProductCard } from '../../components/collection/cardproduct';

export const Shop = ({ Collections }) => {
    
    return (
        <>
            <section className='collection'>
                <div className='collection__header'>
                    <h3>
                        Shop All
                    </h3>
                </div>
                <Toolbar />
                <div className='collection__container container'>
                    <ul className='collection__grid'>
                        {Object.values(Collections).map((arr) => arr.map((product, i ) => <ProductCard key={i} {...{product}}/>))}
                    </ul>
                </div>
            </section>   
        </>
    )
}
