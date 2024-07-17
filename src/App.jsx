import { useState, useEffect, useRef  } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { PromoBar } from './components/promotion/promoBar';
import { Nav } from './components/navigation/nav';
import { Home } from './pages/main/home';
import { Shop } from './pages/shop/all';
import { NavFooter } from './components/navigation/footer/footerbar';
import { NavRoute } from './components/route/navroute';

function App() {
 
  const [promoHeight, setPromoHeight] = useState(0);
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
        <Nav/>
      </header>
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
