import styled from "@emotion/styled";

export const WrapStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 30px;
  width: 45vw;
  height: 75vh;
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
  display: flex;
  gap: 3vw;
  width: 40vw;
  padding: 1.5vh 0.2vw 3vw 1vw;
  border: 1px solid #cccccc;
  border-radius: 15px;
`;

export const ImgStyled = styled.img`
  display: block;
  width: 24vw;
  aspect-ratio: 2/1;
  object-fit: cover;
  border-radius: 10px;
`;

export const SpanStyled = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3vh;
  /* width: 20vw; */
  /* height: 1vh; */
`;

export const BoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.2vh;
`;

export const InputStyled = styled.input`
  display: block;
  width: 14vw;
  border-radius: 10px;
  padding: 10px 0;
  &::placeholder {
    text-align: center;
    font-size: 18px;
  }
`;

