import GlobalContext from "../store/GlobalContext";
import { useContext } from "react";
import { adjustNumbers } from "./Helpers";
const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((trn) => trn.amount);
  const balance = amounts.reduce((acc, nxt) => (acc += nxt), 0);
  return (
    <>
      <h4>Your Balance</h4>
      <h1> {adjustNumbers(balance)}</h1>
    </>
  );
};
export default Balance;
