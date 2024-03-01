import React from "react";
import Box from "@mui/material/Box";
import styles from "./Card.module.scss";
import TicTacToe from "../tictactoe/TicTacToe";
import ControlPanel from "../controlPanel/ControlPanel";

export default function Card() {
  const [isGameRunning, setIsGameRunning] = React.useState(false);
  const [lastPlay, setLastPlay] = React.useState({ Movement: "", signal: "" });
  const [board, setBoard] = React.useState(
    Array(9)
      .fill()
      .map(() => "-")
  );
  const [winner, setWinner] = React.useState(null);
  const [whichTurn, setWhichTurn] = React.useState("X");
  const [winnerSequence, setWinnerSequence] = React.useState([]);

  return (
    <Box className={styles.cardTicTacToe}>
      <Box className={styles.upperPart}>
        <TicTacToe
          setIsGameRunning={setIsGameRunning}
          setLastPlay={setLastPlay}
          board={board}
          setBoard={setBoard}
          setWinner={setWinner}
          lastPlay={lastPlay}
          isGameRunning={isGameRunning}
          whichTurn={whichTurn}
          setWhichTurn={setWhichTurn}
          winnerSequence={winnerSequence}
          setWinnerSequence={setWinnerSequence}
        />
      </Box>
      <Box className={styles.lowerPart}>
        <ControlPanel
          isGameRunning={isGameRunning}
          setIsGameRunning={setIsGameRunning}
          lastPlay={lastPlay}
          setBoard={setBoard}
          winner={winner}
          setWhichTurn={setWhichTurn}
          setWinner={setWinner}
          setLastPlay={setLastPlay}
          setWinnerSequence={setWinnerSequence}
        />
      </Box>
    </Box>
  );
}
