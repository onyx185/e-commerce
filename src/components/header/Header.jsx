import { useNavigate } from "react-router-dom";
import CrwnLogo from "../../logo-svgs/CrwnLogo";
import CartIcon from "../cart-icon/CartIcon";
import "./header.scss"

const Header = () => {
    const navigate = useNavigate();
    const handleNav = (url) => {
        navigate(url);
    }
    return (
        <div className="header">
            <div className="logo-container">
                <CrwnLogo />
            </div>
            <div className="options">
                <div className="option" onClick={()=>handleNav(null)}>Home</div>
                <div className="option" onClick={()=>handleNav('/shop')}>Shop</div>
                <div className="option" onClick={()=>handleNav('/sign-in')}>Sign In</div>
                <div className="option">Contact</div>
                <CartIcon />
            </div>
        </div>

    )
}

export default Header