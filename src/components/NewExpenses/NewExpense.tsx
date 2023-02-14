// components import
import ExpenseForm from "./ExpenseForm";
//css import
import classes from "./NewExpense.module.css";

const NewExpense: React.FC<{
  onAddExpense: (expense: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }) => void;
}> = (props) => {
  const saveExpenseHandler = (enteredExpenseData: {
    title: string;
    amount: number;
    date: Date;
  }) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className={classes.newExpense}>
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};
export default NewExpense;
