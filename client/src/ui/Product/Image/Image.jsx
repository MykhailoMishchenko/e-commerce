import React from "react";
import styles from "./Image.module.scss";
import PropTypes from "prop-types";

import {NavLink} from "react-router-dom";

const Image = ({id, image, name, size, sale, percent}) => {

  const fixStyle = {
    width: "245px",
    height: "163px"
  };

  return (
    <NavLink to={`/product/${id}`} className={size && styles[`photo-${size}`]}>
      <img style={size ? null : fixStyle} src={image} alt={name} />
      {
        size && sale ? <div className={styles.discount}>-{percent}%</div> : null
      }
    </NavLink>
  );
};

Image.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Image;
