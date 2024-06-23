import { useSelector } from "react-redux";
import SalesView from "./section/SalesView";
import { getAllSalesLead } from "../../selectors/selectors";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSalesLead } from "../../features/reducer/sales/salesSlice";
import Breadcumb from "../../components/Breadcumb";
import KanbanSkeletonLoader from "../../components/skeleton/Kanban";

const Sales = () => {
  const { isLoading } = useSelector(getAllSalesLead);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSalesLead());
  }, [dispatch]);

  return (
    <>
      <div className="content-body">
        <Breadcumb title="Home" subtitle="Sales" />

        <div className="container-fluid p-0">
          <div className="row">
            <div className="w-full">
              <div className="row">
                <div className="w-full">
                  {isLoading ? <KanbanSkeletonLoader /> : <SalesView />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales;
