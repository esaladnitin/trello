import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addBoard } from "../actions";
import Board from "./Board";

const Thumbnails = styled.div`
  flex: 1;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color:#333;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color:#333;
  margin:20px;
`;

const CreateTitle = styled.h3`
  font-size: 48px;
  color: white;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

const CreateInput = styled.input`
  width: 400px;
  height: 100px;
  font-size: 22px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 3px;
  border: none;
  outline-color: blue;
  box-shadow: 0 2px 4px grey;
  align-self: center;
`;

const Home = ({ boards, boardOrder, dispatch }) => {

   const [newBoardTitle, setNewBoardTitle] = useState("");

   const handleChange = e => {
      setNewBoardTitle(e.target.value);
   };

   const handleSubmit = e => {
      e.preventDefault();
      dispatch(addBoard(newBoardTitle));
   };

   const renderBoards = () => {
      return boardOrder.map(boardID => {
         const board = boards[boardID];

         return (
            <Link
               key={boardID}
               to={`/${board.id}`}
               style={{ textDecoration: "none" }}
            >
               <Board {...board} />
            </Link>
         );
      });
   };

   const renderCreateBoard = () => {
      return (
         <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
            <CreateTitle>Create A New User</CreateTitle>
            <CreateInput
               onChange={handleChange}
               value={newBoardTitle}
               placeholder="Create User Story..."
               type="text"
            />
         </form>
      );
   };

   return (
      <HomeContainer>
         <Thumbnails>{renderBoards()}</Thumbnails>
         {renderCreateBoard()}
      </HomeContainer>
   );
};

const mapStateToProps = state => ({
   boards: state.boards,
   boardOrder: state.boardOrder
});

export default connect(mapStateToProps)(Home);