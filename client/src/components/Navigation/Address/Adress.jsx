import React from "react";
import styles from "./Address.module.scss";

import Container from "../../../ui/Container/Container";
import FlexRow from "../../../ui/Flex/FlexRow/FlexRow";

import {CONTAINER_WIDTH} from "../../../constans";

import {ReactComponent as Phone} from "../../../assets/icon/phone-bold.svg";
import {ReactComponent as Location} from "../../../assets/icon/location-bold.svg";
import {ReactComponent as Clock} from "../../../assets/icon/clock.svg";
import {ReactComponent as Facebook} from "../../../assets/icon/facebook.svg";
import {ReactComponent as Instagram} from "../../../assets/icon/instagram.svg";

const Address = () => {
  return (
    <nav className={styles.navigation}>
      <Container width={CONTAINER_WIDTH}>
        <FlexRow position="between">
          <ul>
            <li>
              <Phone />
              <a href="tel:+380977993832">+380977993832</a>
            </li>
            <li>
              <Location />
              <address>Київ, Україна</address>
            </li>
            <li>
              <Clock />
              <p>Цілодобово 24/7</p>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/?stype=lo&jlou=AfeSXheG4JfygVj5BMB6USBRBrpxoKbQRKvUfzr1ueVdkBWVE1XeGqtUHdrNqsSjW3tF5J95A4ZJqVo8vb9jMPyiFuB425KuW5Pft_hCspEiQw&smuh=25535&lh=Ac9I8ggvXJm4tTzL6us"
                target="_blank" rel="noreferrer">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mmshchnk/" target="_blank" rel="noreferrer">
                <Instagram />
              </a>
            </li>
          </ul>
        </FlexRow>
      </Container>
    </nav>
  );
};

export default Address;
