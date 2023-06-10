import CartCard from "../components/CartCard/CartCard";
import InputDataUser from "../components/InputDataUser/InputDataUser";
import { BottomBlockStyled, BtnToCart, WrapStyled } from "./pagesStyled";

const ShoppingCart = () => {
  return (
    <>
      <WrapStyled>
        <InputDataUser />
        <CartCard />
      </WrapStyled>
      <BottomBlockStyled>
        <h1>Total price:</h1>
        <BtnToCart type="submit">Submit</BtnToCart>
      </BottomBlockStyled>
    </>
  );
};

export default ShoppingCart;
