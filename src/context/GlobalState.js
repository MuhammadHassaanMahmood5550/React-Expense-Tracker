/*each time we update data using useContext the other components use the useContext
rerender */

/*Basically reducers are there to manage state in an application. 
For instance, if a user writes something in an HTML input field, the 
application has to manage this UI state
OR
Reducer to manage application state*/


/*Context provides a way to pass data through the component tree without having to pass props down manually at every level.
OR
Context to pass data through component*/

/*The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application.*/

import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [data, setData] = useState([
        {text: "flower", amount: 200, id: 1},
        {text: "car", amount: -30, id: 2},
        {text: "perfume", amount: 40, id: 3}
    ]);
    return(
        <GlobalContext.Provider value={[data, setData]}>
            {props.children}
        </GlobalContext.Provider>
    );
};



// //initial state
// const initialState = {
//     transactions: [
//         {id: 1, text: "salary", amount: 200},
//         {id: 2, text: "car", amount: -20},
//         {id: 3, text: "fruit", amount: -40},
//         {id: 4, text: "food", amount: 40}
//     ]
// }

// //create context
// export const GlobalContext = createContext(initialState);

// //provider component
// export const GlobalProvider = ({children}) => {  
//     //dispatch means remove
//     const [state, dispatch] = useReducer(AppReducer, initialState);

//     //Action
//     function DeleteTransaction(id){
//         dispatch({
//             type: "DELETE_TRANSACTION",
//             payload: id
//         });
//     }

//     function AddTransaction(transaction){
//         dispatch({
//             type: "Add_TRANSACTION",
//             payload: transaction
//         });
//     }

//     return (<GlobalContext.Provider value={{
//         transactions: state.transactions,
//         DeleteTransaction,
//         AddTransaction
//         }}>
//         {children}
//     </GlobalContext.Provider>);
// }