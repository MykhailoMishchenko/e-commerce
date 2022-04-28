import React from "react";
import styles from "../Product.module.scss";
import PropTypes from "prop-types";

import Title from "../Title/Title";
import Details from "../Details/Details";

const Description = ({id, name, category, brand, gender, countInStock, sale, price, percent, size}) => {
  return (
    <div className={styles.description}>
      <Title id={id} name={name} size={size} />
      <Details
        size={size}
        id={id}
        category={category}
        brand={brand}
        gender={gender}
        countInStock={countInStock}
        price={price}
        sale={sale}
        percent={percent}
        // dispatch={dispatch}
      />
    </div>
  );
};

Description.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    sale: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
    countInStock: PropTypes.number.isRequired,
    size: PropTypes.string,
}

export default Description;
