import { Grid } from "@mui/material";
import React from "react";
import Playspace from "../playspace/Playspace";

function TicTacToe({
  setIsGameRunning,
  setLastPlay,
  board,
  setBoard,
  setWinner,
  lastPlay,
  isGameRunning,
  whichTurn,
  setWhichTurn,
  winnerSequence,
  setWinnerSequence,
}) {
  React.useEffect(() => {
    console.log(board);
    if (board.every((cell) => cell !== "-")) {
      setIsGameRunning(false);
    }
  }, [board]);

  React.useEffect(() => {
    const winningSequences = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const sequence of winningSequences) {
      const [a, b, c] = sequence;
      if (board[a] !== "-" && board[a] === board[b] && board[a] === board[c]) {
        setWinnerSequence(sequence);
        setWinner(lastPlay.signal);
        setIsGameRunning(false);
        return;
      }
    }

    if (board.every((cell) => cell !== "-")) {
      setWinner("none");
    }
  }, [board]);

  return (
    <Grid container width={"600px"} height={"400px"}>
      {board &&
        board.map((item, index) => (
          <Playspace
            content={item}
            position={index}
            setBoard={setBoard}
            board={board}
            whichTurn={whichTurn}
            setWhichTurn={setWhichTurn}
            setLastPlay={setLastPlay}
            isGameRunning={isGameRunning}
            winningSequence={winnerSequence}
          ></Playspace>
        ))}
    </Grid>
  );
}

export default TicTacToe;
