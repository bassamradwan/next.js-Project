import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { LinearScale, CategoryScale } from "chart.js";

Chart.register(LinearScale, CategoryScale);

const VisitsChartComponent = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Visits",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "#007bff",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    cubicInterpolationMode: "monotone",
  };

  //   @ts-ignore
  return <Line data={data} options={options} />;
};

export default VisitsChartComponent;
