import ReactApexChart from "react-apexcharts";

const ReceiptAnalytics = () => {
  const options = {
    series: [
      {
        name: "Revenue (NRS)",
        data: [44, 55, 57, 56, 61, 58],
      },
      {
        name: "Expenses (NRS)",
        data: [76, 85, 101, 98, 87, 105],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };
  return (
    <div className="container-fluid">
      <div className="row gx-0">
        <div className="card">
          <h1 className="my-2 text-center font-medium">
            Income/Expenses Analytics View
          </h1>
          <div id="chart">
            <ReactApexChart
              options={options}
              series={options.series}
              type="bar"
              height={350}
              className="p-5 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptAnalytics;
