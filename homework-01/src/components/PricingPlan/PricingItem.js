import React from 'react';
import PropTypes from 'prop-types';

import style from './PricingItem.module.css';

function PricingItem(props) {
  const { label, capacity, description, price } = props;
  const imagePath = `${
    process.env.PUBLIC_URL
  }/assets/img/${label.toLowerCase()}-icon.png`;
  return (
    <div className={style['pricing-item']}>
      <i
        className={style.icon}
        style={{ backgroundImage: `url(${imagePath})` }}
      ></i>
      <h2 className={`${style.label} ${style[`label--${label}`]}`}>{label}</h2>
      <p className={style.capacity}>{capacity}</p>
      <p className={style.description}>{description}</p>
      <p className={style.price}>${price}/MO</p>
      <button className={`${style.button} ${style[`button--${label}`]}`}>
        Get Started
      </button>
    </div>
  );
}
PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default PricingItem;
