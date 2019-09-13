import React from 'react';
import PropTypes from 'prop-types';

import s from './Stats.module.css';

const Stats = props => {
  const { title, stats } = props;
  return (
    <section className={s['stats-section']}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s['stat-list']}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={s.item}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Stats;
