import React, { useContext, useState } from "react";
import styles from "./css/RightDiv.module.css";
import { EmptyDivContext } from "../contexts/EmptyDivContext";
import { MidBoxContext } from "../contexts/MidBoxContext";

const RightDiv = () => {
  const [num, setNum] = useState(0);

  const { balloons1, handleBalloonsUpdate1 } = useContext(EmptyDivContext);
  const { balloons2, handleBalloonsUpdate2 } = useContext(MidBoxContext);

  const handleSubmit = (id) => {
    if (id <= balloons2.length && id >= 1) {
      const element = balloons2[id - 1];
      const newMidArray = [];
      for (let i = 0; i < balloons2.length; i++) {
        if (i !== id - 1) {
          newMidArray.push(balloons2[i]);
        }
      }

      const newLeftArray = balloons1;
      newLeftArray.push(element);

      handleBalloonsUpdate1(newLeftArray);
      handleBalloonsUpdate2(newMidArray);
    }
  };

  return (
    <div className={styles.rightbox}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(num);
        }}
        className={styles.form}
      >
        <input
          type="number"
          placeholder="Enter balloon number to shoot"
          value={num}
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default RightDiv;
