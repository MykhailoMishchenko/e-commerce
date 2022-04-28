import React from 'react';
import styles from "./Products.module.scss";
import PropTypes from "prop-types";

import Container from "../../../ui/Container/Container";
import Grid from "../../../ui/Grid/Grid";

import Product from "../../../ui/Product";

import {useNavigate} from "react-router-dom";

import {CONTAINER_WIDTH} from "../../../constans";
import SkeletonProducts from "../../../ui/Skeleton/SkeletonProducts/SkeletonProducts";

const Products = ({title, products, gender, to, loading}) => {

    const navigate = useNavigate()

    return (
        <Container width={CONTAINER_WIDTH}>
            <h2>{title}</h2>
            <Grid>
                {
                    products.filter(products => products.gender === gender).map(product => <Product key={product.id} product={product} />)
                }
                {/*<SkeletonProducts/>*/}
            </Grid>
            <button className={styles.button} onClick={() => navigate(to)}>Весь асортимент</button>
        </Container>
    );
};

Products.propTypes = {
    title: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
    to: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Products;