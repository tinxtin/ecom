import { Toolbar } from '../../components/action/toolbar';
import { ProductCard } from '../../components/collection/cardproduct';
import { Routes, Route, Link } from "react-router-dom";
import { All } from './face'


export const Shop = ({ Collections, navData }) => {

    let categoryData = [];
    navData.map(({ use }, i) => {
        {use.category &&
            categoryData.push(navData[i])
        }
    })

    return (
        <>
            <section className='collection'>
                <div className='collection__header'>
                    <h3>
                        Shop All
                    </h3>
                </div>
                <Toolbar {...{ categoryData }}/>
                <div className='collection__container container'>
                    <ul className='collection__grid'>
                        {Object.values(Collections).map(( topValues ) => 
                            Object.values(topValues).map(( lowerValues ) => 
                                lowerValues.map(( product, i ) => <ProductCard key={i} {...{ product }}/>)))}
                    </ul>
                </div>
            </section>   
        </>
    )
}
