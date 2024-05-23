import { useState, useEffect, useRef  } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { PromoBar } from './components/promotion/promoBar';
import { NavBar } from './components/navigation/navbar';
import { Home } from './pages/main/home';
import { Shop } from './pages/collections/all';

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
        <NavBar/>
      </header>
      <main className='main' style={{marginTop: promoHeight}}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/collection/all' element={<Shop/>} />
        </Routes>
      </main>
    </>
  )
}

export default App;
