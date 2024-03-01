import Card from "./components/card/Card";
import styles from "./App.module.scss";
import { Stack } from "@mui/material";

function App() {
  return (
    <div className={styles.App}>
      O teste é fazer um jogo da velha, com as funcionalidades básicas:
      <br />
      -Posicionar o X ou 0 <br />
      -Atualizar o tabuleiro
      <br />
      -Definir quem é o vencedor
      <Stack justifyContent={"center"} alignItems={"center"} marginTop="50px">
        <Card />
      </Stack>
    </div>
  );
}

export default App;
