import React from "react";
import styles from "./Links.module.scss";
import Container from "../../../ui/Container/Container";
import {CONTAINER_WIDTH} from "../../../constans";
import FlexRow from "../../../ui/Flex/FlexRow/FlexRow";
import {NavLink, useNavigate} from "react-router-dom";

import {ReactComponent as User} from "../../../assets/icon/user.svg";
import {ReactComponent as Bag} from "../../../assets/icon/shopping-bag.svg";
import {ReactComponent as Like} from "../../../assets/icon/heart.svg";

const Links = () => {

  const navigate = useNavigate();

  const cartItems = 15;
  const favoriteItems = 12;
  const credentials = true;
  const links = [
    {id: "1", href: "/about-us", title: "Про нас"},
    {id: "2", href: "/women", title: "Для Жінок"},
    {id: "3", href: "/men", title: "Для Чоловіків"},
    {id: "4", href: "/accessories", title: "Аксесуари"},
    {id: "5", href: "/sales", title: "Розпродаж"},
    {id: "6", href: "/blog", title: "Блог"},
    {id: "7", href: "/contacts", title: "Контаки"}
  ];

  const goTo = () => navigate("/")

  return (
    <nav className={styles.navigation}>
      <Container width={CONTAINER_WIDTH}>
        <FlexRow position="between" optionalStyle={styles.optional}>
          <h1 onClick={goTo}>#НаОчі</h1>
          <ul className={styles.links}>
            {
              links.map(item => {
                const {id, href, title} = item;
                return (
                  <li key={id}>
                    <NavLink className={(nav) => nav.isActive ? styles.active : ""} to={href}>{title}</NavLink>
                  </li>
                );
              })
            }
          </ul>
          <ul className={styles.userProfile}>
            {
              credentials
                ? <li>
                  <NavLink className={(nav) => nav.isActive ? styles.userProfileActive : ""} to="/profile">
                    <User />
                  </NavLink>
                </li>
                : <li>
                  <NavLink to="/login">Войти</NavLink>
                </li>
            }
            {
              !!cartItems
                ? <li data-cart={cartItems} className={styles.circle}>
                  <NavLink className={(nav) => nav.isActive ? styles.userProfileActive : ""} to="/cart">
                    <Bag />
                  </NavLink>
                </li>
                : <li>
                  <NavLink className={(nav) => nav.isActive ? styles.userProfileActive : ""} to="/cart">
                    <Bag />
                  </NavLink>
                </li>
            }
            {
              !!favoriteItems
                ? <li data-cart={favoriteItems} className={styles.cart}>
                  <NavLink className={(nav) => nav.isActive ? styles.userProfileActive : ""}
                           to="/favorite">
                    <Like />
                  </NavLink>
                </li>
                : <li>
                  <NavLink className={(nav) => nav.isActive ? styles.userProfileActive : ""}
                           to="/favorite">
                    <Like />
                  </NavLink>
                </li>
            }
          </ul>
        </FlexRow>
      </Container>
    </nav>
  );
};

export default Links;
