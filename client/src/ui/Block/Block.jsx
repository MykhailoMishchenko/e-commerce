import React from "react";
import styles from "./Block.module.scss";
import {useNavigate} from "react-router-dom";

const Block = ({
  children,
  size,
  to,
  optional
}) => {

  const navigate = useNavigate()

  const goTo = (to) => navigate(to)

  if(to) {
    return (
      <div onClick={() => goTo(to)} className={`${styles.block} ${styles[size]} ${optional && optional}`}>
        {children}
      </div>
    )
  }

  return (
    <div className={`${styles.block} ${styles[size]} ${optional && optional}`}>
      {children}
    </div>
  );
};

export default Block;
