import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

const data = [
  ["Confesion", "Percent of population"],
  ["Eastern Orthodoxy", 72],
  ["Islamic", 19.11],
  ["Catholics", 3.44],
  ["Others", 4.14],
  ["Atheist", 1.31]
];

const options = {
  title: "Religions in Montenegro",
};

function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}

export default App;
