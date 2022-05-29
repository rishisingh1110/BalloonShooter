import React, { useContext } from "react";
import styles from "./css/LeftDiv.module.css";
import { EmptyDivContext } from "../contexts/EmptyDivContext";
import { MidBoxContext } from "../contexts/MidBoxContext";
import Balloon from "./Balloon";

const LeftDiv = () => {
  const { balloons1, handleBalloonsUpdate1 } = useContext(EmptyDivContext);
  const { balloons2, handleBalloonsUpdate2 } = useContext(MidBoxContext);

  const handleClick = (id) => {
    const element = balloons1.filter((el) => {
      return el.originalID === id;
    })[0];
    const newLeftArray = balloons1.filter((el) => {
      return el.originalID !== id;
    });
    handleBalloonsUpdate1(newLeftArray);

    const newMidArray = balloons2;
    newMidArray.push(element);
    newMidArray.sort((a, b) => {
      return a.originalID - b.originalID;
    });

    handleBalloonsUpdate2(newMidArray);
  };

  return (
    <div className={styles.leftbox}>
      {balloons1.map((el) => {
        return (
          <Balloon
            key={el.originalID}
            id={el.originalID}
            handleClick={handleClick}
            color={el.color}
          />
        );
      })}
    </div>
  );
};

export default LeftDiv;
