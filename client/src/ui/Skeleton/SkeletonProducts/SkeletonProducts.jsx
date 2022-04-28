import React from 'react';
import styles from "./SkeletonsProducts.module.scss";
import Skeleton from "./Skeleton/Skeleton";

const SkeletonProducts = (size) => {

    const skeletons = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
    ]

    return (
        <div className={styles.container}>
            {
                skeletons.map(skeleton => <Skeleton key={skeleton.id}/>)
            }
        </div>
    );
};

export default SkeletonProducts;