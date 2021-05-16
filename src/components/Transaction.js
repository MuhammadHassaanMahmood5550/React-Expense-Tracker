import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState';

export const Transaction = ({ dat }) => {
    const sign = dat.amount < 0 ? "-" : "+";

    const [data, setData] = useContext(GlobalContext);

        //Action
        const DeleteTransaction = (id) => {
            const newData = data.filter((cur) => cur.id !== id);
            setData(newData);
        }


    return (
        <div>
             <li className={dat.amount > 0 ? "plus" : "minus"}>
           {dat.text} <span>{`${sign}${Math.abs(dat.amount)}`}</span>
           
           <button onClick={() => DeleteTransaction(dat.id)} className="delete-btn">x</button>
        </li>  
        </div>
    )
}
