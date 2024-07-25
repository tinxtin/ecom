import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { PromoBar } from './components/promotion/promoBar';
import { Nav } from './components/navigation/header/desktop/nav';
import { Home } from './pages/main/home';
import { Shop } from './pages/shop/all';
import { NavFooter } from './components/navigation/footer/footerbar';
import { NavRoute } from './components/route/navroute';
import { NavHoverContext } from './components/statecontrol/navhovercontext';
import { SearchContext } from './components/statecontrol/searchcontext'
import { SearchForm } from './components/navigation/header/utilities/search/navsearchform';

function App() {
 
  const [promoHeight, setPromoHeight] = useState(0);
  const [navIsHovered, setNavIsHovered] = useState(false)
  const [navSearchOn, setNavSearchOn] = useState(false);
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
             <Nav />
          </SearchContext.Provider>
        </NavHoverContext.Provider>
      </header>
      <aside className={`overlay ${navIsHovered && 'active'}`} onClick={() => setNavIsHovered(false)}/>
      <aside className={`search ${navSearchOn && 'active'}`}>
        <SearchForm />
      </aside>
      <main className='main' style={{marginTop: promoHeight}}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/collection/all' element={<Shop/>} />
        </Routes>
      </main>
      <footer className='footer' style={{marginTop: '5rem'}}>
        <NavFooter/>
      </footer>
    </>
  )
}

export default App;
