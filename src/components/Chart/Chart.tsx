// components import
import ChartBar from "./ChartBar";
//css import
import classes from "./Chart.module.css";

const Chart: React.FC<{
  dataPoints: {
    label: string;
    value: number;
  }[];
}> = (props) => {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className={classes.chart}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
