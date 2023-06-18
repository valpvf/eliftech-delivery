import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";

import {
  selectorProduct,
  selectorShop,
} from "../../redux/product/productSelector";
// import { getProduct } from "../../redux/product/productOperations";

import {
  BoxStyled,
  ImgStyled,
  InputStyled,
  ItemStyled,
  ListStyled,
  SpanStyled,
} from "./CartCard.styled";
import { selectorCart } from "../../redux/user/userSelector";

const CartCard = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectorProduct);
  const cart = useSelector(selectorCart);

  // useEffect(() => {
  //   dispatch(getProduct());
  // }, []);

//   const render = useMemo(() => {
//     return shop
//       ? products.filter((el) => el.shop.includes(shop))
//       : products;
//   }, [products, shop]);

  const handleClickToCart = (e) => {
    // const id = e.target.id - 1;
    // if (!shop) {
    //   dispatch(changeShop(render[id].shop));
    //   setCart([{ ...products[id], amount: 1 }]);
    // } else if (cart[0].shop !== shop) {
    //   alert(
    //     `You can only order from one store at a time. Place your order in the &{cart[0].shop} store and then move on to the next one.`
    //   );
    // } else if (products[id].shop === shop) {
    //   const idx = cart.findIndex((el) => el.id === id + 1);
    //   console.log("change", cart[idx], id + 1);
    //   idx === -1
    //     ? setCart((prev) => [...prev, { ...products[id], amount: 1 }])
    //     : setCart((prev) =>
    //         prev.map((el) =>
    //           el.id === id + 1 ? { ...el, amount: el.amount + 1 } : el
    //         )
    //       );
    // }
  };

  return (
    <ListStyled>
      {/* {(cart[0].shop !== shop) && <Alert severity="warning">
          This is a warning alert — check it out!
          </Alert>} */}
      {cart.map((el) => (
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
              <h2>Price: {el.price.toFixed(2)}</h2>
            </SpanStyled>
            <InputStyled
              type="number"
              placeholder="0"
              value={el.amount}
            ></InputStyled>
          </BoxStyled>
        </ItemStyled>
      ))}
    </ListStyled>
  );
};

export default CartCard;
