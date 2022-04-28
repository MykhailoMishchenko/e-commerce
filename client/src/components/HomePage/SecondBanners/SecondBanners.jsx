import React from 'react';
import styles from "./SecondBanners.module.scss";

import Container from "../../../ui/Container/Container";
import FlexRow from "../../../ui/Flex/FlexRow/FlexRow";
import Block from "../../../ui/Block/Block";

import {CONTAINER_WIDTH} from "../../../constans";

import newCollections from "../../../assets/mock/second-banner-new-collections.jpeg";
import sales from "../../../assets/mock/second-banner-sales.jpeg";

const SecondBanners = () => {

    const data = [
        {id: 1, title: "Нова Колекція!", image: newCollections},
        {id: 2, title: "Знижки!", image: sales},
    ]

    return (
        <Container width={CONTAINER_WIDTH}>
            <FlexRow position="between" gap="30" optionalStyle={styles.wrapper}>
                {
                    data.map(banner => (
                        <Block key={banner.id} size="md" to="/new-collection" optional={styles.block}>
                            <img src={banner.image} alt={banner.title}/>
                            <h3>{banner.title}</h3>
                        </Block>
                    ))
                }
            </FlexRow>
        </Container>
    );
};

export default SecondBanners;