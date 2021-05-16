import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {

  const [data, setData] = useContext(GlobalContext);
   
    return (
        <div>
             <h3>History</h3>  
             <ul  className="list">   
        {data.map((cur) => (
          
          <Transaction key={cur.id} dat={cur}/>
         
        ))}
        </ul>
        </div>
    )
}
