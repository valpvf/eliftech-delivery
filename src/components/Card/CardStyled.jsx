import styled from "@emotion/styled";

export const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 30px;
  width: 70vw;
  height: 90vh;
  padding: 2vw;
  border: 1px solid #cccccc;
  border-radius: 30px;

  overflow-x: hidden;
  overflow-y: scroll;
  max-width: 70vw;
  max-height: 85vw;

  &::-webkit-scrollbar {
    display: block;
    height: 82px;
    width: 15px;
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background-color: #bbbbbb;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-track-piece:end {
    background-color: transparent;
    margin-bottom: 2px;
  }
  &::-webkit-scrollbar-track-piece:start {
    background-color: transparent;
    margin-top: 2px;
  }
`;

export const ItemStyled = styled.li`
  width: 30vw;
  height: 35vh;
  padding: 15px;
  border: 1px solid #cccccc;
  border-radius: 15px;
`;

export const ImgStyled = styled.img`
  display: block;
  width: 100%;
  height: 90%;
    object-fit: cover;
  border-radius: 10px;
`;

export const SpanStyled = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px 15px 0;
`;
