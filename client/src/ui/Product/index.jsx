import React from "react";
import styles from "./Product.module.scss";
import FlexRow from "../Flex/FlexRow/FlexRow";
import Image from "./Image/Image";
import Sale from "./Sale/Sale";
import Title from "./Title/Title";
import Price from "./Price/Price";
import Rating from "./Rating/Rating";
import data from "./data";
import Description from "./Description/Description";

const Product = ({
  product,
  size
}) => {

  if (size) {
    return (<>
        {
          data.map(product => (
            <div key={product.id}>
              <FlexRow position={size === "lg" ? "between" : "center"} gap="22" optionalStyle={styles[`product-${size}`]}>
                <Image image={product.image} id={product.id} name={product.name} sale={product.sale} percent={product.percent} size={size}/>
                <Description
                  size={size}
                  id={product.id}
                  name={product.name}
                  brand={product.brand}
                  category={product.category}
                  gender={product.gender}
                  sale={product.sale}
                  price={product.price}
                  countInStock={product.countInStock}
                  percent={product.percent}
                  // dispatch={dispatch}
                />
              </FlexRow>
            </div>
          ))
        }
      </>
    );
  }

  return (
    <>
      {
        data.map(product => (
          <div key={product.id} className={styles.product}>
            {product.sale && <Sale percent={product.percent} />}
            <Image image={product.image} id={product.id} name={product.name} />
            <FlexRow position="between" wrap={true}>
              <Title id={product.id} name={product.name} />
              <Price price={product.price} percent={product.percent} sale={product.sale} />
              <Rating value={product.rating} />
            </FlexRow>
          </div>
        ))
      }
    </>
  );
};

export default Product;
