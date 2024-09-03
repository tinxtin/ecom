import { Toolbar } from '../../components/action/toolbar';
import { ProductCard } from '../../components/collection/cardproduct';

export const Shop = ({ Collections }) => {
    
    const test = {
    
        all:
            {makeup: [
                {
                    name: 'makeup1',
                    desc: 'placeholder',
                    price: 1.00,
                    inFeature: true,
                    qty: 1,
                }, 
                {
                    name: 'makeup2',
                    desc: 'placeholder',
                    price: 2.00,
                    inFeature: true,
                    qty: 0,
                },
                {
                    name: 'makeup3',
                    desc: 'placeholder',
                    price: 3.00,
                    inFeature: true,
                    qty: 1,
                },
                {
                    name: 'makeup4',
                    desc: 'placeholder',
                    price: 4.00,
                    inFeature: false,
                    qty: 1,
                },
                {
                    name: 'makeup5',
                    desc: 'placeholder',
                    price: 5.00,
                    inFeature: false,
                    qty: 0,
                },
            ],
        
            skincare: [
                {
                    name: 'skincare1',
                    desc: 'placeholder',
                    price: 5.00,
                    inFeature: true,
                    qty: 1,
                },
                {
                    name: 'skincare2',
                    desc: 'placeholder',
                    price: 5.00,
                    inFeature: true,
                    qty: 0,
                },
                {
                    name: 'skincare3',
                    desc: 'placeholder',
                    price: 5.00,
                    inFeature: false,
                    qty: 1,
                },
                {
                    name: 'skincare4',
                    desc: 'placeholder',
                    price: 5.00,
                    inFeature: false,
                    qty: 1,
                },
                {
                    name: 'skincare5',
                    desc: 'placeholder',
                    price: 5.00,
                    inFeature: false,
                    qty: 1,
                },
            ],
        
            body: [
                {
                    name: 'body1',
                    desc: 'placeholder',
                    price: 5.00,
                    inFeature: false,
                    qty: 1,
                },
                {
                    name: 'body2',
                    desc: 'placeholder',
                    price: 5.00,
                    inFeature: true,
                    qty: 1,
                },
                {
                    name: 'body3',
                    desc: 'placeholder',
                    price: 5.00,
                    inFeature: false,
                    qty: 1,
                },
                {
                    name: 'body4',
                    desc: 'placeholder',
                    price: 5.00,
                    inFeature: false,
                    qty: 1,
                },
                {
                    name: 'body5',
                    desc: 'placeholder',
                    price: 5.00,
                    inFeature: false,
                    qty: 1,
                },
            ]}
    
        }
        // Object.entries(test).map(([topKey, topValues], i) => {
        //     Object.entries(topValues).map(([lowerKey, lowerValues], i) => {
        //         lowerValues.map((arr, i) => {
        //             console.log(arr)
        //         })
        //     })
        // })


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
                        {Object.entries(Collections).map(([topKey, topValues]) => 
                            Object.entries(topValues).map(([lowerKey, lowerValues], i) => 
                            lowerValues.map((product, i) => <ProductCard key={i} {...{product}}/>)))}
                        {/* {Object.values(Collections).map((arr) => arr.map((product, i ) => <ProductCard key={i} {...{product}}/>))} */}
                    </ul>
                </div>
            </section>   
        </>
    )
}
