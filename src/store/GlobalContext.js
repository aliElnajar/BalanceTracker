import React, { useEffect, useReducer } from "react";

const GlobalContext = React.createContext();

const getData = () => {
  let transactions = localStorage.getItem("transaction");
  if (transactions) {
    return JSON.parse(localStorage.getItem("transaction"));
  } else {
    return [];
  }
};

const initialState = {
  transactions: getData(),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "REMOVE_TRANSACTION":
      const newTransactions = state.transactions.filter(
        (trn) => trn.id !== action.payload
      );
      return { ...state, transactions: newTransactions };
    default:
      return { ...state };
  }
};

export const ContextProvider = ({ children }) => {
  const [state, stateDispatch] = useReducer(reducer, initialState);

  const addTransactionHandler = (transaction) => {
    stateDispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const removeTransaction = (id) => {
    stateDispatch({ type: "REMOVE_TRANSACTION", payload: id });
  };

  useEffect(() => {
    localStorage.setItem("transaction", JSON.stringify(state.transactions));
  }, [state.transactions]);

  return (
    <GlobalContext.Provider
      value={{ ...state, addTransactionHandler, removeTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
