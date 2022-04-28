import React from "react";
import styles from "./Author.module.scss";
import image from "../../../assets/mock/author.png";
import {CONTAINER_WIDTH} from "../../../constans";
import Container from "../../../ui/Container/Container";
import FlexRow from "../../../ui/Flex/FlexRow/FlexRow";

const Author = () => {
    return (
        <div className={styles.author}>
            <Container width={CONTAINER_WIDTH}>
                <FlexRow position="between" gap="62" optionalStyle={styles.wrapper}>
                    <p>Copyright © 2022 Усі права захищені</p>
                    <img src={image} alt="Спосіб оплати"/>
                    <a href="https://t.me/mshchnkm">Created by Mishchenko Mykhailo</a>
                </FlexRow>
            </Container>
        </div>
    );
};

export default Author;