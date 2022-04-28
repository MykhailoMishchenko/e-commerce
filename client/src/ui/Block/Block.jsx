import React from "react";
import styles from "./Block.module.scss";
import PropTypes from "prop-types";

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

Block.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  to: PropTypes.string,
  optional: PropTypes.string
}
Block.defaultProps = {
  size: "sm",
}

export default Block;
