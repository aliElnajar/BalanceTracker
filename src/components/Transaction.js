import { adjustNumbers } from "./Helpers";

const Transaction = ({ amount, text, id, removeTransaction }) => {
  const classes = `${amount > 0 ? "plus" : "minus"}`;
  const sign = `${amount > 0 ? "+" : "-"}`;

  const removeHandler = () => {
    removeTransaction(id);
  };
  return (
    <li className={classes}>
      {text}{" "}
      <span>
        {sign}
        {adjustNumbers(Math.abs(amount))}
      </span>
      <button className="delete-btn" onClick={removeHandler}>
        x
      </button>
    </li>
  );
};
export default Transaction;
