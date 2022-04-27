import React from "react";
import styles from "./Price.module.scss";
import PropTypes from "prop-types";
import {calcSalePrice, getLastPrice} from "../../../utils/calcPrice";

const Price = ({sale, price, percent}) => {
  return (
    <>
      {
        sale
          ? <p
            data-price={getLastPrice(price)}
            className={styles.newPrice}>
            ₴ {Math.floor(calcSalePrice(price, percent))}</p>
          : <p className={styles.priceOfProduct}>₴ {Math.floor(price)}</p>
      }
    </>
  );
};

Price.propTypes = {
  sale: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired
};

export default Price;
