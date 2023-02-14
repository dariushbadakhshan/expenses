import { useState } from "react";
//css import
import classes from "./ExpenseForm.module.css";

const ExpenseForm: React.FC<{
  onSaveExpense: (expenseData: {
    title: string;
    amount: number;
    date: Date;
  }) => void;
}> = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState<number>(0);
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(+event.target.value);
  };
  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event: React.FormEvent) => {
    event?.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpense(expenseData);
    setEnteredTitle("");
    setEnteredAmount(0);
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.newExpenseControls}>
        <div className={classes.newExpenseControl}>
          <label>TITLE</label>
          <input
            type="title"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className={classes.newExpenseControl}>
          <label>AMOUNT</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className={classes.newExpenseControl}>
          <label>DATE</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className={classes.newExpenseActions}>
        <button>Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
