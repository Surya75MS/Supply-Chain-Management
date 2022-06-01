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
        <nav>
            <ul>
                <li>
                    {/* <NavLink style={NavStyles} to="/">Home</NavLink> */}
                    <button onClick={() => nav('/')}>Home</button>
                </li>
                <li>
                    {/* <NavLink style={NavStyles} to="/about">About Us</NavLink> */}
                    <button onClick={() => nav('/about')}>About Us</button>
                </li>
                <li>
                    <NavLink style={NavStyles} to="/products">Products</NavLink>
                </li>
            </ul>
        </nav>
    );
};