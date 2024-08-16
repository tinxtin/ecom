import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { PromoBar } from './components/promotion/promoBar';
import { Nav } from './components/navigation/header/desktop/nav';
import { Home } from './pages/main/home';
import { Shop } from './pages/shop/all';
import { NavFooter } from './components/navigation/footer/footerbar';
import { NavRoute } from './components/route/navroute';
import { NavHoverContext } from './components/statecontrol/navhovercontext';
import { SearchContext } from './components/statecontrol/searchcontext';
import { BagContext } from './components/statecontrol/bagcontext';
import { ItemBagContext } from './components/statecontrol/itembagcontext';
import { SearchForm } from './components/navigation/header/utilities/search/navsearchform';
import { BagForm } from './components/navigation/header/utilities/bag/navbagform';

function App() {
 
  const [promoHeight, setPromoHeight] = useState(0);
  const [navIsHovered, setNavIsHovered] = useState(false)
  const [navSearchOn, setNavSearchOn] = useState(false);
  const [navBagOn, setNavBagOn] = useState(false)
  const [itemsInBag, setItemInBag] = useState([
    // {
    //   name: 'test',
    //   cost: 1,
    // },
    // {
    //   name: 'test',
    //   cost: 1,
    // },
  ]);

  const refPromo= useRef(null);

  useEffect(() => {
    setPromoHeight(refPromo.current.clientHeight);
  })

  return (
    <>
      <div className='promoBar' ref={refPromo}>
        <PromoBar/>
      </div>
      <header className='header' style={{marginTop: promoHeight}}>
        <NavHoverContext.Provider value={setNavIsHovered}>
          <SearchContext.Provider value={setNavSearchOn}>
            <BagContext.Provider value={setNavBagOn}>
              <ItemBagContext.Provider value={itemsInBag}>
                <Nav />
              </ItemBagContext.Provider>
            </BagContext.Provider>
          </SearchContext.Provider>
        </NavHoverContext.Provider>
      </header>
      <aside className={`overlay ${navIsHovered || navSearchOn || navBagOn ? 'active' : ''}`} onClick={() => {setNavIsHovered(false), setNavSearchOn(false), setNavBagOn(false)}}/>
      <aside className={`search ${navSearchOn ? 'active' : ''}`}>
          <SearchForm {...{ navSearchOn, setNavSearchOn }}/>
      </aside>
      <main className='main' style={{marginTop: promoHeight}}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/collection/all' element={<Shop/>} />
        </Routes>
      </main>
      <aside className={`bag ${itemsInBag.length === 0 ? 'is-empty' : ''} ${navBagOn ? 'active' : ''}`}>
        <BagForm {...{ itemsInBag }}/>
      </aside>
      <footer className='footer' style={{marginTop: '5rem'}}>
        <NavFooter/>
      </footer>
    </>
  )
}

export default App;
