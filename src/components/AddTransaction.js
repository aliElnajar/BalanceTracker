import { useState, useRef, useContext } from "react";
import GlobalContext from "../store/GlobalContext";
const AddTranscation = () => {
  const { addTransactionHandler } = useContext(GlobalContext);

  const textRef = useRef();
  const amountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    let textValue = textRef.current.value;
    let amountValue = amountRef.current.value;
    addTransactionHandler({
      id: Math.floor(Math.random() * 1000),
      text: textValue,
      amount: +amountValue,
    });
    textRef.current.value = "";
    amountRef.current.value = "";
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            ref={textRef}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            ref={amountRef}
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTranscation;
