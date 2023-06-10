import Card from "../components/Card/Card";
import Delivery from "../components/Delivery/Delivery";
import { WrapStyled } from "./pagesStyled";

const Shop = () => {
  return (
    <WrapStyled>
      <Delivery />
      <Card />
    </WrapStyled>
  );
};

export default Shop;
