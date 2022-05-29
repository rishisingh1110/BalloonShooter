import { useContext } from "react";
import styles from "./App.module.css";
import LeftDiv from "./components/LeftDiv";
import MidDiv from "./components/MidDiv";
import RightDiv from "./components/RightDiv";
import { EmptyDivContext } from "./contexts/EmptyDivContext";
import { MidBoxContext } from "./contexts/MidBoxContext";

function App() {
  const { balloons1 } = useContext(EmptyDivContext);
  const { balloons2 } = useContext(MidBoxContext);
  // console.log(balloons1, balloons2);
  return (
    <>
      <h1>Balloon Shooter</h1>
      <div className={styles.App}>
        <LeftDiv />
        <MidDiv />
        <RightDiv />
      </div>
    </>
  );
}

export default App;
