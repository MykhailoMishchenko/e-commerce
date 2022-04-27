import React from "react";
import styles from "./Advantages.module.scss";
import {ReactComponent as Truck} from "../../../assets/icon/truck.svg";
import {ReactComponent as Refresh} from "../../../assets/icon/refresh.svg";
import {ReactComponent as Support} from "../../../assets/icon/support.svg";
import Container from "../../../ui/Container/Container";
import {CONTAINER_WIDTH} from "../../../constans";
import FlexRow from "../../../ui/Flex/FlexRow/FlexRow";


const Advantages = () => {

  const data = [
    {
      id: "1",
      icon: Truck,
      title: "Бесплатная доставка",
      text: "По всей украине при заказе от 1399 гривен ₴."
    },
    {
      id: "2",
      icon: Refresh,
      title: "Возврат в течении 30 дней",
      text: "Возврат товара в течении 30 дней с момента покупки."
    },
    {
      id: "3",
      icon: Support,
      title: "Поддержка 24/7",
      text: "Пишите нам. Мы работаем 24 часа в сутки. 7 дней в неделю."
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
