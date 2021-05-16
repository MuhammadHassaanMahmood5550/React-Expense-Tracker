import React, { useState } from 'react'
import { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const [data, setData] = useContext(GlobalContext);

  const onsubmit = (e) => {
     e.preventDefault();

     const newTransaction = {
        text,
        amount: +amount, //in order to turn it into number
       id: Math.round(Math.random()*10000000)
     }
     console.log(newTransaction);
     setData(preTransaction => [...preTransaction, newTransaction]);
  }

    return (
        <div>
            <h3>Add new transaction</h3>
      <form onSubmit={onsubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"  placeholder="Enter text..." 
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" placeholder="Enter amount..."
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div> 
        
    )
}
