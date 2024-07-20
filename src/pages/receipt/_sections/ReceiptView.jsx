import { useEffect, useState } from "react";
import IncomeTable from "./IncomeTable";
import ExpensesTable from "./ExpensesTable";
import { useDispatch } from "react-redux";
import { getAllReceipt } from "../../../features/reducer/receipt/receiptSlice";

const ReceiptView = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReceipt());
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="w-full">
          {/* <div className="card overflow-hidden relative"> */}
          <div className="overflow-x-auto active-projects style-1">
            <div className="card-body p-0"></div>
            <div className="flex flex-col items-start border-b-2 w-full ">
              <div className="flex  gap-5 w-auto">
                <button
                  className={`px-10 tex-3xl w-1/2 py-3 focus:outline-none ${
                    activeTab === "tab1"
                      ? "border-b-2  border-blue-400 bg-primary-light rounded-t-[4px]  text-primary font-bold"
                      : ""
                  }`}
                  onClick={() => setActiveTab("tab1")}
                >
                  All Income
                </button>
                <button
                  className={`px-10 w-1/2 py-2 focus:outline-none ${
                    activeTab === "tab2"
                      ? "border-b-2 border-blue-400 bg-primary-light rounded-t-[4px]  text-primary font-bold"
                      : ""
                  }`}
                  onClick={() => setActiveTab("tab2")}
                >
                  All&nbsp;Expenses
                </button>
              </div>
            </div>
            <div className="mt-4 ">
              {activeTab === "tab1" && <IncomeTable />}
              {activeTab === "tab2" && <ExpensesTable />}
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ReceiptView;
