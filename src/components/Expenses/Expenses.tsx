import { useState } from "react";
// components import
import Card from "../../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";
//css import
import classes from "./Expenses.module.css";

const Expenses: React.FC<{
  items: { id: string; date: Date; title: string; amount: number }[];
}> = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const changeFilterHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className={classes.expenses}>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};
export default Expenses;
