import React from 'react';
import styles from "./Blog.module.scss";

import Container from "../../../ui/Container/Container";
import FlexRow from "../../../ui/Flex/FlexRow/FlexRow";
import Article from "./Article/Article";

import {NavLink} from "react-router-dom";

import {CONTAINER_WIDTH} from "../../../constans";
import {articles} from "./articles";

const Blog = () => {
    return (
        <Container width={CONTAINER_WIDTH}>
            <div className={styles.block}>
                <h2>Блог</h2>
                <NavLink to="/blog">Весь Блог</NavLink>
            </div>
            <FlexRow position="between" gap="30">
                {
                    articles.slice(-3).reverse().map(post => <Article key={post.id} post={post}/>)
                }
            </FlexRow>
        </Container>
    );
};

export default Blog;