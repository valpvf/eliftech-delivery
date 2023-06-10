import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";

import {
  selectorProduct,
  selectorShop,
} from "../../redux/product/productSelector";
import { getProduct } from "../../redux/product/productOperations";
import {
  AlertStyled,
  BoxStyled,
  BtnToCart,
  ImgStyled,
  ItemStyled,
  ListStyled,
  SpanStyled,
} from "./CardStyled";
import { changeShop } from "../../redux/product/productSlice";
import { addCart } from "../../redux/user/userSlice";

let message = "";

const Card = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectorProduct);
  const shop = useSelector(selectorShop);
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   dispatch(getProduct());
  // }, []);

  const render = useMemo(() => {
    return shop
      ? products.filter((el) => el.shop.includes(shop))
      : products;
  }, [products, shop]);

  const handleClickToCart = (e) => {
    const id = e.target.id - 1;
    if (!shop) {
      dispatch(changeShop(render[id].shop));
      setCart([{ ...products[id], amount: 1 }]);
    } else if (cart[0].shop !== shop) {
      message = cart[0].shop;
    } else if (products[id].shop === shop) {
      const idx = cart.findIndex((el) => el.id === id + 1);
      console.log("change", cart[idx], id + 1);
      idx === -1
        ? setCart((prev) => [...prev, { ...products[id], amount: 1 }])
        : setCart((prev) =>
            prev.map((el) =>
              el.id === id + 1 ? { ...el, amount: el.amount + 1 } : el
            )
          );
    }
    // const total = cart ? cart.reduce((acc, el) => {return Number(el.amout) * Number(el.price)}) : 0;
    console.log('cart', cart);
    dispatch(addCart(cart));
  };

  return (
    <ListStyled>
      {message.length > 0 && (
        <AlertStyled
          variant="filled"
          severity="warning"
          action={
            <Button
              color="inherit"
              size="small"
              onClick={() => { dispatch(changeShop(message)); message=''}}
            >
              X
            </Button>
          }
        >
          `You can only order from one store at a time. Place your
          order in the <strong> {message} </strong> store and then
          move on to the next one.`
        </AlertStyled>
      )}
      {render.map((el) => (
        <ItemStyled key={el.id}>
          <ImgStyled
            src={`${el.picture},${el.product
              .split(" ")[0]
              .toLowerCase()}?lock=${el.id}`}
            alt={el.product}
          />
          <BoxStyled>
            <SpanStyled>
              <h3>{el.product}</h3>
              <h2>{el.price.toFixed(2)}</h2>
            </SpanStyled>
            <BtnToCart
              type="button"
              id={el.id}
              onClick={handleClickToCart}
            >
              add to Cart
            </BtnToCart>
          </BoxStyled>
        </ItemStyled>
      ))}
    </ListStyled>
  );
};

export default Card;
