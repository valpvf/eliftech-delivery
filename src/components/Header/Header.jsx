import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  HeaderStyled,
  ListSyled,
  NavLinkStyled,
} from "./HeaderStyled";
import { selectorCart } from "../../redux/user/userSelector";
import { useSelector } from "react-redux";
import { selectorInCart } from "../../redux/product/productSelector";

const Header = () => {
  const inCart = useSelector(selectorInCart);
  console.log('inCart', inCart);
  return (
    <HeaderStyled>
      <nav>
        <ListSyled>
          <li>
            <NavLinkStyled to={"/"} datatype="one">
              Shop
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to={"/cart"}>ShoppingCart <ShoppingCartIcon/> {inCart[0]}</NavLinkStyled>
          </li>
        </ListSyled>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
