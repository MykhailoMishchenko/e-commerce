import React from "react";
import styles from "./Title.module.scss";
import PropTypes from "prop-types";

import {NavLink} from "react-router-dom";

const Title = ({id, name, size}) => {
  return (
    <NavLink to={`/product/${id}`} className={!size ? styles.title : styles[`title-${size}`]}>
      <p>{name}</p>
    </NavLink>
  );
};

Title.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Title;
