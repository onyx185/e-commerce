import { useState } from "react"
import ShoppingBagLogo from "../../logo-svgs/ShoppingBagLogo"
import "./cart-icon.scss"
import CartDropdown from "../cart-dropdown/CartDropdown";

const CartIcon = () => {
    const [hidden, setHidden] = useState(false);

    const handleDropdown = () => {
        setHidden(!hidden)
    }

    return (
        <div className="cart-icon" onClick={handleDropdown}>
            <ShoppingBagLogo className="shopping-icon" />
            {
                hidden ? <CartDropdown /> : null
            }
        </div>
    )
}

export default CartIcon;