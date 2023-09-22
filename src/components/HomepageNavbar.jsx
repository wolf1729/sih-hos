import '../CSSFiles/navbar.css';

function HomepageNavbar(){
    return(
        <nav className="navbar">
            <div>
                <a href="#"><img className="logo" src="../public/Untitled design (9) (1).png"/>MedCare</a>
            </div>
            <ul className="nav-list">
                <li className="list-item"><a href="#">Home</a></li>
                <li className="list-item"><a href="#">About Us</a></li>
                <li className="list-item"><a href="#">Contact</a></li>
                <li className="list-item"><a href="#">Log in</a></li>
            </ul>
            <div className="menu">
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </div>
        </nav>
    );
}

export default HomepageNavbar;