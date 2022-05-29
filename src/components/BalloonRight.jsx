import React from "react";
import styles from "./css/BalloonRight.module.css";

const BalloonRight = ({ color }) => {
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={styles.balloon}
    ></div>
  );
};

export default BalloonRight;
