import React from "react";
import styles from "./css/Balloon.module.css";

const Balloon = ({ color, handleClick, id }) => {
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={styles.balloon}
      onClick={(e) => {
        e.preventDefault();
        handleClick(id);
      }}
    ></div>
  );
};

export default Balloon;
