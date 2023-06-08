import { useSelector } from "react-redux";
import {
  selectorProduct,
  selectorShop,
} from "../../redux/product/productSelector";
import {
  ImgStyled,
  ItemStyled,
  ListStyled,
  SpanStyled,
} from "./CardStyled";
import { useMemo } from "react";

const Card = () => {
  const products = useSelector(selectorProduct);
  const shop = useSelector(selectorShop);

  // useEffect((render) => {
  //   getProductApi();
  // }, []);
  console.log(shop);

  const render = useMemo(() => {
    return shop
      ? products.filter((el) => el.shop.includes(shop))
      : products;
  }, [products, shop]);

  return (
    <ListStyled>
      {render.map((el) => (
        <ItemStyled key={el.id}>
          <ImgStyled
            src={`${el.picture}=${el.id}`}
            alt={el.product}
          />
          <SpanStyled>
            <h3>{el.product}</h3>
            <h2>{el.price}</h2>
          </SpanStyled>
        </ItemStyled>
      ))}
    </ListStyled>
  );
};

export default Card;
