import React from "react";
import styles from "./Advantages.module.scss";

import Container from "../../../ui/Container/Container";
import FlexRow from "../../../ui/Flex/FlexRow/FlexRow";

import {CONTAINER_WIDTH} from "../../../constans";

import {ReactComponent as Truck} from "../../../assets/icon/truck.svg";
import {ReactComponent as Refresh} from "../../../assets/icon/refresh.svg";
import {ReactComponent as Support} from "../../../assets/icon/support.svg";

const Advantages = () => {

  const data = [
    {
      id: "1",
      icon: Truck,
      title: "Безкоштовна доставка",
      text: "По всій України при замовленні від 1399 гривень ₴."
    },
    {
      id: "2",
      icon: Refresh,
      title: "Повернення протягом 30 діб",
      text: "Повернення продукції можливе протягом 30 днів з моменту покупки."
    },
    {
      id: "3",
      icon: Support,
      title: "Підтримка 24/7",
      text: "Пишіть нам. Ми працюємо 24 години на добу. 7 днів на тиждень."
    },
  ];

  return (
    <Container width={CONTAINER_WIDTH}>
      <FlexRow position="between" gap="30" optionalStyle={styles.advantages} wrap={false}>
        {
          data.map(advantage => {
            const {icon: Icon, title, text, id} = advantage;
            return (
              <FlexRow key={id} position="between" gap="8">
                <Icon className={styles.icon} />
                <div className={styles.text}>
                  <h6>{title}</h6>
                  <p>{text}</p>
                </div>
              </FlexRow>
            );
          })
        }
      </FlexRow>
    </Container>
  );
};

export default Advantages;
