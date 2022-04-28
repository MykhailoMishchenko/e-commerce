import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

import {Link} from "react-router-dom";

const Button = ({
  text,
  color,
  size,
  to,
  isLoading,
  onClick
}) => {

  if (to) {
    return (
      <Link className={`${isLoading ? styles.loading : styles.button} ${styles[size]} ${styles[color]}`}>
        {text}
      </Link>
    );
  }
  return (
    <button
      className={`${isLoading ? styles.loading : styles.button} ${styles[size]} ${styles[color]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["primary", "secondary", "outline"]).isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  to: PropTypes.string,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func
};
Button.defaultProps = {
  text: "",
  color: "primary",
  size: "md",
  to: "",
  isLoading: false
};

export default Button;