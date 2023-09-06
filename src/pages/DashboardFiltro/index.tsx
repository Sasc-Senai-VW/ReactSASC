import React from "react";
import ReactApexChart from "react-apexcharts";

import "./style.css";

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
  const chartOptionsLine = {
    // Define your chart options here
    chart: {
      type: "line",
      background: "#000",
    },

    series: [
      {
        name: "Label 1",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 35, 54, 100],
        color: "#CF4B83",
      },
      {
        name: "Label 2",
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
        color: "#01B574",
      },
      {
        name: "Label 3",
        data: [50, 20, 75, 82, 93, 111, 122, 200, 100, 20, 50, 35],
        color: "#999999",
      },
    ],

    xaxis: {
      categories: [
        "jan",
        "fev",
        "mar",
        "abr",
        "mai",
        "jun",
        "jul",
        "ago",
        "set",
        "out",
        "nov",
        "dez",
      ],
    },

    markers: {
      size: 5,
    },
  };

  const chartOptionsDonut = {
    // Define your chart options here
    chart: {
      type: "donut",
      background: "#fff",
    },

    series: [44, 55],
    labels: ["Apple", "Mango"],
  };

  const chartOptionsColumn = {
    // Define your chart options here
    chart: {
      type: "bar",
      background: "#fff",
    },

    series: [
      {
        data: [
          {
            x: "category A",
            y: 10,
          },
          {
            x: "category B",
            y: 18,
          },
          {
            x: "category C",
            y: 13,
          },
        ],
      },
    ],
  };

  const chartOptionsBar = {
    // Define your chart options here
    chart: {
      type: "bar",
      background: "#fff",
    },

    plotOptions: {
      bar: {
        horizontal: true,
      },
    },

    series: [
      {
        data: [
          {
            x: "category A",
            y: 20,
          },
          {
            x: "category B",
            y: 36,
          },
          {
            x: "category C",
            y: 26,
          },
        ],
      },
    ],
  };

  const chartOptionsDonut2 = {
    // Define your chart options here
    chart: {
      type: "donut",
      background: "#fff",
    },

    series: [44, 55],
    labels: ["Apple", "Mango"],
  };

  return (
    <main>
      <div className="graficoLine grafico">
        <ReactApexChart
          options={chartOptionsLine}
          series={chartOptionsLine.series}
          type="line"
          // height={350}
          // width={1000}
        />
      </div>
      <div className="graficoDonut grafico">
        <ReactApexChart
          options={chartOptionsDonut}
          series={chartOptionsDonut.series}
          type="donut"
          // height={350}
          // width={1000}
        />
      </div>
      <div className="graficoColumn grafico">
        <ReactApexChart
          options={chartOptionsColumn}
          series={chartOptionsColumn.series}
          type="bar"
          // height={350}
          // width={1000}
        />
      </div>
      <div className="graficoBar grafico">
        <ReactApexChart
          options={chartOptionsBar}
          series={chartOptionsBar.series}
          type="bar"
          // height={350}
          // width={1000}
        />
      </div>
      <div className="graficoDonut2 grafico">
        <ReactApexChart
          options={chartOptionsDonut2}
          series={chartOptionsDonut2.series}
          type="donut"
          // height={350}
          // width={1000}
        />
      </div>
    </main>
  );
};

export default MyComponent;
