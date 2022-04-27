import React from "react";
import styles from "../Product.module.scss";
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

export default Description;
