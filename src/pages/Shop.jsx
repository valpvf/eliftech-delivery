// import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectorProduct } from "../redux/product/productSelector";

const Shop = () => {
  const render = useSelector(selectorProduct);

  // useEffect((render) => {
  //   getProductApi();
  // }, []);
  console.log(render);
  return (
    <>
      <ul>
        {render.map((el) => (
          <li key={el.id}>
            <img src={el.picture} alt={el.product} />
            <h3>{el.product}</h3>
            <h2>{el.price}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Shop;
