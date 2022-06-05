import { NavLink, useNavigate } from 'react-router-dom';

export const Navbar_Comp = () => {
    const nav = useNavigate();

    return (
        <header id="header" className="header fixed-top">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                <a href="/" className="logo d-flex align-items-center">
                    <img src="assets/img/logo.png" alt="" />
                    <span>Pharma SCM</span>
                </a>
                <nav id="navbar" class="navbar">
                    <ul>
                        <li><a class="getstarted scrollto" onClick={() => nav("/")}>Home</a></li>
                        <li><a class="getstarted scrollto" onClick={() => nav("/About")}>About</a></li>
                        <li><a class="getstarted scrollto" onClick={() => nav("/Contact")}>Contact</a></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
};