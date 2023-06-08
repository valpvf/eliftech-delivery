import styled from "@emotion/styled";

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 22vw;
  height: 90vh;
  padding: 2vw;
  border: 1px solid #cccccc;
  border-radius: 30px;
`;

export const ItemStyled = styled.li`
  width: 15vw;
`;

export const BtnStyled = styled.button`
  display: inline-block;
  width: 15vw;
  padding: 10px 0;
  font-size: 18px;
  font-weight: 600;
  border: 1px solid #cccccc;
  border-radius: 10px;
`;
