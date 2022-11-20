import { Fragment } from "react";
import AddTranscation from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
const App = () => {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTranscation />
      </div>
    </Fragment>
  );
};

export default App;
