import GlobalContext from "../store/GlobalContext";
import { useContext } from "react";
import Transaction from "./Transaction";
const TransactionList = () => {
  const { transactions, removeTransaction } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((trn) => {
          return (
            <Transaction
              key={trn.id}
              {...trn}
              removeTransaction={removeTransaction}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TransactionList;
