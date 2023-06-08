import { HeaderStyled, ListSyled, NavLinkStyled } from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
        <nav>
          <ListSyled>
            <li>
              <NavLinkStyled to={'/'} datatype="one">Shop</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to={'/cart'}>ShoppingCart</NavLinkStyled>
            </li>
          </ListSyled>
        </nav>
    </HeaderStyled>
  );
};

export default Header;