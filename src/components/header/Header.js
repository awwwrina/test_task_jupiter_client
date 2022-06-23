import '../logo/Logo';
import Logo from '../logo/Logo';
import './header.scss';

const Header = () => {
    return(
        <>
            <header className="header">
                <nav className="navigation">
                    <a className="logo fz24" href="/#">
                        <Logo/>
                        <p className="agency">Agency</p> 
                    </a>
                    <ul className="navigation__link fz16">
                        <li><a href="/#">About</a></li>
                        <li><a href="/#">Services</a></li>
                        <li><a href="/#">Pricing</a></li>
                        <li><a href="/#">Blog</a></li>
                    </ul>
                    <button className="btn btn__contact">Contact</button>
                </nav>
                
                <h1 className="portfolio fz72">Portfolio</h1>
                <p className="description fz16">Agency provides a full service range including technical skills, design, business understanding.</p>
            </header>
        </>
    )
}

export default Header;