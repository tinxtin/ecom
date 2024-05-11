import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Home() {

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;

        return {
            width, height
        }
    }
    
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions())
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [])


    document.documentElement.style.setProperty(
        '--hero-height', windowDimensions.height / 100 + 'px',
    )

    return (
        <>
            <section className='home__hero'>
                <Link to={''} className='home__hero-link'>
                    <div className='home__hero-wrapper'>
                        <div className='hero__image'>
                            <img src="https://placehold.co/1440x1440/png" alt=""/>
                        </div>
                    </div>
                </Link>
            </section>
        </>
    )
}

export default Home;