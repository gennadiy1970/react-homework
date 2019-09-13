import React from 'react';
import PropTypes from 'prop-types';

import PricingItem from './PricingItem';
import styles from './PricingPlan.module.css';

const PricingPlan = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item.label} className={styles.item}>
          <PricingItem {...item} />
        </li>
      ))}
    </ul>
  );
};

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PricingPlan;
