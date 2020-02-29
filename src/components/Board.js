import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`
  height: 80px;
  width: 80px;
  background:  #cccc00;
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px grey;
`;

const Title = styled.h4`
  color: #ffff89;
  text-decoration: none;
`;

const Board = ({ title }) => {
   console.log(title);
   return (
      <Thumbnail>
         <Title>{title}</Title>
      </Thumbnail>
   );
};

export default Board;