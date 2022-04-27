import React from "react";
import styles from "./Sale.module.scss";
import PropTypes from "prop-types";

const Sale = ({percent}) => <div className={styles.discount}>-{percent}% </div>;

Sale.propTypes = {
  percent: PropTypes.number.isRequired
}

export default Sale;
