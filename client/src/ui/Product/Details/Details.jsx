import React from "react";
import styles from "./Details.module.scss";
import PropTypes from "prop-types";

import {calcSalePrice, getLastPrice} from "../../../utils/calcPrice";

import {ReactComponent as Trash} from "../../../assets/icon/trash.svg";

const Details = ({category, brand, gender, countInStock, sale, percent, price, id, dispatch, size}) => {
  return (
    <div className={styles.details}>
      <div className={styles.characteristics}>
        <div className={styles.characteristic}>
          <p>Категория</p>
          <p>
            {
              category === "sunglasses"
                ? "Солнцезащитные очки"
                : "Аксессуары"
            }
          </p>
        </div>
        <div className={styles.characteristic}>
          <p>Бренд</p>
          <p>{brand}</p>
        </div>
        <div className={styles.characteristic}>
          <p>Пол</p>
          <p>
            {
              gender === "male"
                ? "Мужские"
                : "Женские"
            }
          </p>
        </div>
        {
          size === "lg"
            ? <div className={styles.characteristic}>
              <p>Наличие на складе</p>
              <p>
                {
                  countInStock === 0
                    ? "Нет в наличии"
                    : "Есть в наличии"
                }
              </p>
            </div>
            : <div className={styles.characteristic}>
              <p>Кол-во</p>
              <p>
                <select
                  value={1}
                  // onChange={e => dispatch(addToCartRequest(product, Number(e.target.value)))}
                >
                  {
                    [...Array(countInStock).keys()].map(x => (
                      <option
                        key={x + 1}
                        value={x + 1}
                      >{x + 1}</option>
                    ))
                  }
                </select>
              </p>
            </div>
        }
        <div className={styles.characteristic}>
          <div className={styles.PriceAndTrash}>
            {
              sale ? <strong
                  className={styles.withBefore}
                  data-price={getLastPrice(price)}>
                  ₴ {Math.floor(calcSalePrice(price, percent))}</strong>
                : <strong>₴ {price}</strong>
            }
            <Trash />
          </div>
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  sale: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
  countInStock: PropTypes.number.isRequired,
  size: PropTypes.string,
}

export default Details;
