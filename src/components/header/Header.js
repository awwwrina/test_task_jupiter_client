import { useMediaQuery } from 'react-responsive';
import '../logo/Logo';
import Logo from '../logo/Logo';
import './header.scss';

const Header = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1040px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1041px)' })
    return(
        <>
            <header className="header"> 
                <nav className="navigation">
                    {
                        isTabletOrMobile && 
                        <a className="logo fz24" href="/#">
                            <Logo/>
                            <p className="agency">Agency</p> 
                        </a>
                    }
                    {isDesktop && <Nav/>}
                </nav>
                
                <h1 className="portfolio">Portfolio</h1>
                <p className="description fz16">
                    Agency provides a full service range including technical skills, design, business understanding.
                </p>
            </header>
        </>
    )
}

const Nav = () => {
    return(
        <>
            <a className="logo fz24" href="/">
                <Logo/>
                <p className="agency">Agency</p> 
            </a>
            <ul className="navigation__link fz16">
                <li><a href="/#About">About</a></li>
                <li><a href="/#Services">Services</a></li>
                <li><a href="/#Pricing">Pricing</a></li>
                <li><a href="/#Blog">Blog</a></li>
            </ul>
            <button className="btn btn__contact">Contact</button>
        </>
    )
}
export default Header;