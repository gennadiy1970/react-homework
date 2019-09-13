import React from 'react';

import PricingPlan from '../PricingPlan';
import Profile from '../Profile';
import Stats from '../Stats';
import TransactionHistory from '../TransactionHistory';

import style from './App.module.css';

import { stats, title } from '../../db/dataStat';
import user from '../../db/user';
import pricingPlanItems from '../../db/pricing-plan.json';
import transactions from '../../db/transactions.json';

function App() {
  return (
    <div className={style.App}>
      <PricingPlan items={pricingPlanItems} />
      <Profile {...user} />
      <div className={style.wrapper}>
        <Stats stats={stats} title={title} />
      </div>
      <div className={style.wrapper}>
        <Stats stats={stats} />
      </div>
      <div className={style.wrapper}>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}

export default App;
