import { useState } from "react";
import IncomeTable from "./IncomeTable";
import ExpensesTable from "./ExpensesTable";

const ReceiptView = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="w-full">
          {/* <div className="card overflow-hidden relative"> */}
          <div className="overflow-x-auto active-projects style-1">
            <div className="card-body p-0"></div>
            <div className="flex flex-col items-center ">
              <div className="flex border-b gap-10 w-full border-gray-400">
                <button
                  className={`px-4 tex-3xl w-1/2 py-3 focus:outline-none ${
                    activeTab === "tab1"
                      ? "border-b-2 border-blue-400 bg-primary-light rounded-t-md  text-primary font-bold"
                      : ""
                  }`}
                  onClick={() => setActiveTab("tab1")}
                >
                  All Income
                </button>
                <button
                  className={`px-4 w-1/2 py-2 focus:outline-none ${
                    activeTab === "tab2"
                      ? "border-b-2 border-blue-400 bg-primary-light rounded-t-md  text-primary font-bold"
                      : ""
                  }`}
                  onClick={() => setActiveTab("tab2")}
                >
                  All Expenses
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
