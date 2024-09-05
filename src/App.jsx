import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { PromoBar } from './components/promotion/promoBar';
import { Nav } from './components/navigation/header/desktop/nav';
import { Home } from './pages/main/home';
import { Shop } from './pages/shop/shop';
import { NavFooter } from './components/navigation/footer/footerbar';
import { SiteRoute } from './components/route/siteroute';
import { NavHoverContext } from './components/statecontrol/navhovercontext';
import { SearchContext } from './components/statecontrol/searchcontext';
import { BagContext } from './components/statecontrol/bagcontext';
import { ItemBagContext } from './components/statecontrol/itembagcontext';
import { SearchForm } from './components/navigation/header/utilities/search/navsearchform';
import { BagForm } from './components/navigation/header/utilities/bag/navbagform';
import { Collections } from './utils/stock/all';

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
  },[])

  const navData = [
    {
        label: 'Shop',
        use: {
            navigation: true,
            category: false,
        },
        href: '/collection/all',
        children: [
            {
                heading: 'dropdown content',
                submenu: [
                    {
                        label: 'test1',
                        href: '#',
                    },
                    {
                        label: 'test2',
                        href: '#',
                    },
                    {
                        label: 'test3',
                        href: '#',
                    },
                    {
                        label: 'test4',
                        href: '#',
                    },
                    {
                        label: 'test5',
                        href: '#',
                    },
                    {
                        label: 'test6',
                        href: '#',
                    },
                    {
                        label: 'test7',
                        href: '#',
                    },
                ]
            }
        ]
    },
    {
        label: 'All',
        use: {
          navigation: false,
          category: true,
      },
        href: '/collection/all',
    },
    {
        label: 'Face',
        use: {
          navigation: false,
          category: true,
      },
        href: '/collection/face',
    },
    {
        label: 'Lip',
        use: {
          navigation: false,
          category: true,
      },
        href: '/collection/lip',
    },
    {
        label: 'Eye',
        use: {
          navigation: false,
          category: true,
      },
        href: '/collection/eye',
    },
    {
        label: 'About',
        use: {
          navigation: true,
          category: false,
      },
        href: '/about'
    },
  ]

  const navUtil = [
    {
        label: 'Search',
        href: '#',
    },
    {
        label: 'Account',
        href: '#',
    },
    {
        label: 'Bag',
        href: '#',
    },

  ]

  const shopData = [

  ]

  return (
    <>
      <div className='promoBar' ref={refPromo}>
        <PromoBar/>
      </div>
      <header className='header'>
        <div className='header__wrapper'>
          <NavHoverContext.Provider value={setNavIsHovered}>
            <SearchContext.Provider value={setNavSearchOn}>
              <BagContext.Provider value={setNavBagOn}>
                <ItemBagContext.Provider value={itemsInBag}>
                  <Nav {...{navData, navUtil}}/>
                  <div className={`search ${navSearchOn ? 'active' : ''}`}>
                      <SearchForm {...{ navSearchOn, setNavSearchOn }}/>
                      <div className={`overlay overlay__search ${navSearchOn ? 'active' : ''}`} onClick={() => {setNavIsHovered(false), setNavSearchOn(false), setNavBagOn(false)}}/>
                  </div>
                </ItemBagContext.Provider>
              </BagContext.Provider>
            </SearchContext.Provider>
          </NavHoverContext.Provider>
        </div>
      </header>
      <aside className={`overlay overlay__main ${navIsHovered ? 'active' : ''}`} onClick={() => {setNavIsHovered(false), setNavSearchOn(false), setNavBagOn(false)}}/>
      <aside className={`overlay overlay__bag ${navBagOn ? 'active' : ''}`} onClick={() => {setNavBagOn(false)}}/>
      <main className='main'>
        <Routes>
            <Route path='/' element={<Home {...{ Collections }}/>}/>
            <Route path='/collection/all' element={<Shop {...{ Collections, navData }}/>} />
        </Routes>
      </main>
      <aside className={`bag ${itemsInBag.length === 0 ? 'is-empty' : ''} ${navBagOn ? 'active' : ''}`}>
        <BagForm {...{ itemsInBag, setNavBagOn }}/>
      </aside>
      <footer className='footer' style={{marginTop: '4rem'}}>
        <NavFooter/>
      </footer>
    </>
  )
}

export default App;
