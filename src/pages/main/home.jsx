import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assets/pepper2.jpg'


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

    document.documentElement.style.setProperty(
        '--max-hero-height', windowDimensions.width / 185 + 'px',
    )

    return (
        <>
            <section className='home__hero'>
                <Link to={''} className='home__hero-link'>
                    <div className='home__hero-wrapper'>
                        <div className='home__hero-image'>
                            <img src={hero} alt=""/>
                        </div>
                    </div>
                </Link>
            </section>
        </>
    )
}

export default Home;