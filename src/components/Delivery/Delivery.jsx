import { useDispatch } from "react-redux";
import { BtnStyled, ItemStyled, ListStyled } from "./DeliveryStyled";
import { changeShop } from "../../redux/product/productSlice";

const Delivery = () => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(changeShop(e.target.name));
    }
    
  return (
    <ListStyled>
      <ItemStyled>
        <BtnStyled name="MC Donny" onClick={handleChange}>MC Donny</BtnStyled>
      </ItemStyled>
      <ItemStyled>
        <BtnStyled name="CFK" onClick={handleChange}>CFK</BtnStyled>
      </ItemStyled>
      <ItemStyled>
        <BtnStyled name="Bell Taco" onClick={handleChange}>Bell Taco</BtnStyled>
      </ItemStyled>
      <ItemStyled>
        <BtnStyled name="WaySub" onClick={handleChange}>WaySub</BtnStyled>
      </ItemStyled>
      <ItemStyled>
        <BtnStyled name="Denwy" onClick={handleChange}>Denwy</BtnStyled>
      </ItemStyled>
    </ListStyled>
  );
};

export default Delivery;
