import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState';

export const Balance = () => {
    const [data, setData] = useContext(GlobalContext);

    const amounts = data.map((cur) => cur.amount);
    const total = amounts.reduce((previous, next) => (previous + next), 0 );
    console.log(total);
    return (
        <div>
           <h4>Your Balance</h4>
           <h1>{`${total}RS`}</h1>
        </div>
    )
}
