import React from "react";
import styles from "./Footer.module.scss";
import {NavLink, useNavigate} from "react-router-dom";
import {ReactComponent as Location} from "../../assets/icon/location.svg";
import {ReactComponent as Phone} from "../../assets/icon/phone.svg";
import {ReactComponent as Clock} from "../../assets/icon/clock.svg";
import {ReactComponent as Mail} from "../../assets/icon/mail.svg";
import Container from "../../ui/Container/Container";
import {CONTAINER_WIDTH} from "../../constans";
import FlexRow from "../../ui/Flex/FlexRow/FlexRow";
import Author from "./Author/Author";

const Footer = () => {

    const navigate = useNavigate();

    const data = {
        categories: [
            {id: "1", href: "/women", title: "Для Жінок"},
            {id: "2", href: "/men", title: "Для Чоловіків"},
            {id: "3", href: "/accessories", title: "Аксесуари"},
            {id: "4", href: "/sales", title: "Розпродаж"}
        ],
        information: [
            {id: "1", href: "/about-us", title: "Про нас"},
            {id: "2", href: "/blog", title: "Блог"},
            {id: "3", href: "/contacts", title: "Контакти"},
            {id: "4", href: "/FAQs", title: "Питання & Відповідь"}
        ],
        helpful_link: [
            {id: "1", href: "/terms-conditions", title: "Умови"},
            {id: "2", href: "/returns-exchanges", title: "Повернення & Обмін"},
            {id: "3", href: "/shipping-and-delivery", title: "Доставка"},
            {id: "4", href: "/privacy-policy", title: "Політика конфіденційности"}
        ],
        contacts: [
            {id: "1", href: "", title: "Київ. Україна", image: Location},
            {id: "2", href: "tel:+380977993832", title: "+380977993832", image: Phone},
            {id: "3", href: "", title: "Цілодобово 24/7", image: Clock},
            {id: "4", href: "mailto:mishchenko.mykhailo@gmail.com", title: "mishchenko.mykhailo@gmail.com", image: Mail}
        ]
    };

    return (
        <footer>
            <Container width={CONTAINER_WIDTH}>
                <div className={styles.footer}>
                    <FlexRow position="between" gap="30" optionalStyle={styles.wrapper}>
                        <ul>
                            <li><h6>Категорії</h6></li>
                            {
                                data.categories.map(item => {
                                    const {id, href, title} = item;
                                    return (
                                        <li key={id}>
                                            <NavLink className={(nav) => nav.isActive ? styles.active : ""}
                                                     to={href}>{title}</NavLink>
                                        </li>
                                    );
                                })
                            }
                        </ul>

                        <ul>
                            <li><h6>Інформація</h6></li>
                            {
                                data.information.map(item => {
                                    const {id, href, title} = item;
                                    return (
                                        <li key={id}>
                                            <NavLink className={(nav) => nav.isActive ? styles.active : ""}
                                                     to={href}>{title}</NavLink>
                                        </li>
                                    );
                                })
                            }
                        </ul>

                        <ul>
                            <li><h6>Користні посилання</h6></li>
                            {
                                data.helpful_link.map(item => {
                                    const {id, href, title} = item;
                                    return (
                                        <li key={id}>
                                            <NavLink className={(nav) => nav.isActive ? styles.active : ""}
                                                     to={href}>{title}</NavLink>
                                        </li>
                                    );
                                })
                            }
                        </ul>

                        <ul>
                            <li><h6>Контакти</h6></li>
                            {
                                data.contacts.map(item => {
                                    const {id, title, image: Image} = item;
                                    return (
                                        <li key={id}>
                                            <Image/>
                                            {title}
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </FlexRow>
                </div>
            </Container>
            <Author/>
        </footer>
    );
};

export default Footer;