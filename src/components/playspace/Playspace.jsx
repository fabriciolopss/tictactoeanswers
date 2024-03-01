import { Grid } from "@mui/material";
import React from "react";
import styles from "./Playspace.module.scss";

function Playspace({
  content,
  position,
  setBoard,
  board,
  whichTurn,
  setWhichTurn,
  setLastPlay,
  isGameRunning,
  winningSequence,
}) {
  const spaceClassName = styles[`space${position}`];
  const spaceGeneric = styles.space;

  const updateBoard = (index, newValue) => {
    setLastPlay({ Movement: `${index + 1}`, signal: `${newValue}` });
    if (board[index] === "-") {
      const updatedBoard = [...board];
      updatedBoard[index] = newValue;
      setBoard(updatedBoard);
      if (newValue === "X") {
        setWhichTurn("O");
      } else {
        setWhichTurn("X");
      }
    }
  };

  return (
    <Grid
      item
      xs={4}
      className={`${spaceClassName} ${spaceGeneric} ${
        winningSequence.includes(position) && styles.winner
      }`}
      onClick={() => {
        if (isGameRunning) {
          updateBoard(position, whichTurn);
        }
      }}
    >
      {content}
    </Grid>
  );
}

export default Playspace;
