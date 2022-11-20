import GlobalContext from "../store/GlobalContext";
import { useContext } from "react";
import { adjustNumbers } from "./Helpers";
const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((trn) => trn.amount);
  const incomes = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, nxt) => (acc += nxt), 0);
  const expenses =
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, nxt) => (acc += nxt), 0) * -1;

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          {adjustNumbers(incomes)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          {adjustNumbers(expenses)}
        </p>
      </div>
    </div>
  );
};
export default IncomeExpenses;
