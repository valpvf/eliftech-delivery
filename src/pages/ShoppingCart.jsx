import { useSelector } from "react-redux";
import CartCard from "../components/CartCard/CartCard";
import InputDataUser from "../components/InputDataUser/InputDataUser";
import { BottomBlockStyled, BtnToCart, WrapStyled } from "./pagesStyled";
import { selectorInCart } from "../redux/product/productSelector";

const ShoppingCart = () => {
  const total = useSelector(selectorInCart)
  console.log('total', total);
  return (
    <>
      <WrapStyled>
        <InputDataUser />
        <CartCard />
      </WrapStyled>
      <BottomBlockStyled>
        <h1>Total price: {total[1].toFixed(2)}</h1>
        <BtnToCart type="submit">Submit</BtnToCart>
      </BottomBlockStyled>
    </>
  );
};

export default ShoppingCart;
