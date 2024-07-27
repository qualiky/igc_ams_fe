import { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useDispatch } from "react-redux";
import { getReceiptAnalytics } from "../../../features/reducer/receipt/receiptSlice";
import { getReceiptAnalyticsData } from "../../../selectors/selectors";
import { useSelector } from "react-redux";

const ReceiptAnalytics = () => {
  const dispatch = useDispatch();

  const { date, income, expenses } = useSelector(getReceiptAnalyticsData);

  const options = {
    series: [
      {
        name: "Revenue (NRS)",
        data: income,
      },
      {
        name: "Expenses (NRS)",
        data: expenses,
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
      categories: date,
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
  useEffect(() => {
    dispatch(getReceiptAnalytics());
  }, [dispatch]);

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
