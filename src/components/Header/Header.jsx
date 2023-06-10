import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  HeaderStyled,
  ListSyled,
  NavLinkStyled,
} from "./HeaderStyled";
import { selectorCart } from "../../redux/user/userSelector";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector(selectorCart);
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
            <NavLinkStyled to={"/cart"}>ShoppingCart{cart&&<ShoppingCartIcon/>}</NavLinkStyled>
          </li>
        </ListSyled>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
