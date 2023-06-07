import { NavLink } from "react-router-dom"

const Header = () => {
    return <nav>
        <ul>
            <li>
                <NavLink>Shop</NavLink>
            </li>
            <li>
                <NavLink>ShoppingCart</NavLink>
            </li>
        </ul>
    </nav>
}