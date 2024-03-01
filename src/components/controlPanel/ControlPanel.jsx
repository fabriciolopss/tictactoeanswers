import { Box, Stack } from "@mui/material";
import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import styles from "./ControlPanel.module.scss";

export default function ControlPanel({
  isGameRunning,
  setIsGameRunning,
  lastPlay,
  setBoard,
  winner,
  setWhichTurn,
  setWinner,
  setLastPlay,
  setWinnerSequence,
}) {
  return (
    <Stack
      direction="row"
      justifyContent={"space-around"}
      alignItems={"center"}
      height="200px"
    >
      {winner ? (
        <p className={styles.text}>{`O vencedor foi ${winner}!`}</p>
      ) : (
        lastPlay.Movement !== "" && (
          <p className={styles.text}>
            Ultima jogada: {lastPlay.signal} foi colocado na casa{" "}
            {lastPlay.Movement}!
          </p>
        )
      )}

      <Box className={styles.controlButton}>
        {isGameRunning ? (
          <ReplayIcon
            className={styles.icon}
            onClick={() => {
              setIsGameRunning(false);
              setBoard(
                Array(9)
                  .fill()
                  .map(() => "-")
              );
            }}
          />
        ) : (
          <PlayArrowIcon
            className={styles.icon}
            onClick={() => {
              setIsGameRunning(true);
              setBoard(
                Array(9)
                  .fill()
                  .map(() => "-")
              );
              setWhichTurn("X");
              setWinner(null);
              setLastPlay({ Movement: "", signal: "" });
              setWinnerSequence([]);
            }}
          />
        )}
      </Box>
    </Stack>
  );
}
