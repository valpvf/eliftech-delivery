import styled from "@emotion/styled";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
  width: 45vw;
  height: 75vh;
  padding: 2vw;
  border: 1px solid #cccccc;
  border-radius: 30px;
`;

export const LabelStyled = styled.label`
  font-size: 20px;

  &:first-of-type {
    margin-top: 20px;
  }
`;
export const InputStyled = styled.input`
  display: block;
  width: 33vw;
  margin-top: 10px;
  padding: 20px 0;
  text-align: center;
  border-radius: 10px;

  &::placeholder {
    font-size: 18px;
    font-style: italic;
  }
`;
