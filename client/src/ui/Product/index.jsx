import React from "react";
import styles from "./Product.module.scss";
import PropTypes from "prop-types";

import FlexRow from "../Flex/FlexRow/FlexRow";

import Image from "./Image/Image";
import Sale from "./Sale/Sale";
import Title from "./Title/Title";
import Price from "./Price/Price";
import Rating from "./Rating/Rating";
import Description from "./Description/Description";

const Product = ({product, size}) => {

    if (size) {
        return (
            <>
                {
                    <FlexRow position={size === "lg" ? "between" : "center"} gap="22"
                             optionalStyle={styles[`product-${size}`]}>
                        <Image image={product.image} id={product.id} name={product.name} sale={product.sale}
                               percent={product.percent} size={size}/>
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
                }
            </>
        );
    }

    return (
        <>
            {
                <div className={styles.product}>
                    {product.sale && <Sale percent={product.percent}/>}
                    <Image image={product.image} id={product.id} name={product.name}/>
                    <FlexRow position="between" wrap={true}>
                        <Title id={product.id} name={product.name}/>
                        <Price price={product.price} percent={product.percent} sale={product.sale}/>
                        <Rating value={product.rating}/>
                    </FlexRow>
                </div>

            }
        </>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
    size: PropTypes.oneOf(["md", "lg"])
}

export default Product;
