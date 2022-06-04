import { NavLink, useNavigate } from 'react-router-dom';

export const Navbar_Comp = () => {
    const nav = useNavigate();

    // NavLink sets a property 'isactive' which can be destructured in below function parameter.
    const NavStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    };
    return (
        // <nav className='navbar navbar-expand-lg bg-light'>
        //     <ul>
        //         <li>
        //             {/* <NavLink style={NavStyles} to="/">Home</NavLink> */}
        //             <button onClick={() => nav('/')}>Home</button>
        //         </li>
        //         <li>
        //             {/* <NavLink style={NavStyles} to="/about">About Us</NavLink> */}
        //             <button onClick={() => nav('/about')}>About Us</button>
        //         </li>
        //         <li>
        //             <NavLink style={NavStyles} to="/products">Products</NavLink>
        //         </li>
        //     </ul>
        // </nav>
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};