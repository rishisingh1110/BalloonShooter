import React, { useContext } from "react";
import styles from "./css/MidDiv.module.css";
import { EmptyDivContext } from "../contexts/EmptyDivContext";
import { MidBoxContext } from "../contexts/MidBoxContext";
import BalloonRight from "./BalloonRight";

const MidDiv = () => {
  const { balloons2 } = useContext(MidBoxContext);
  return (
    <div className={styles.midbox}>
      {balloons2.map((el) => {
        return <BalloonRight key={el.originalID} color={el.color} />;
      })}
    </div>
  );
};

export default MidDiv;
