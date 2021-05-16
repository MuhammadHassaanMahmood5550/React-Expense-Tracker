import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState';

export const IncomeExpenses = () => {
  const [data, setData] = useContext(GlobalContext);

  const amounts = data.map((cur) => cur.amount);

  const income = amounts.filter((cur) => cur > 0).reduce((pre, next) => (pre + next),0);

  const expense = amounts.filter((cur) => cur < 0).reduce((pre, next) => (pre + next),0);

    return (
            <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+{income}RS</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-{Math.abs(expense)}RS</p>
        </div>
      </div> 
    )
}
