import { FormStyled, InputStyled, LabelStyled } from "./InputDataUserStyled";

const InputDataUser = () => {
  return (
    <FormStyled type="submit">
      <LabelStyled>
        Name:
        <InputStyled type="text" name="name" placeholder="input" />
      </LabelStyled>
      <LabelStyled>
        Email:
        <InputStyled type="email" name="email" placeholder="input" />
      </LabelStyled>
      <LabelStyled>
        Phone:
        <InputStyled type="tel" name="phone" placeholder="input" />
      </LabelStyled>
      <LabelStyled>
        Address:
        <InputStyled type="text" name="address" placeholder="input" />
      </LabelStyled>
    </FormStyled>
  );
};

export default InputDataUser;
