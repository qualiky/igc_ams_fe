import { useNavigate } from "react-router-dom";
import { paths } from "../../../routes/path";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllClient } from "../../../features/reducer/client/clientSlice";
import { useSelector } from "react-redux";
import { getAllClientList } from "../../../selectors/selectors";
import AvatarByNameRect from "../../../components/AvatarByNameRect";
import { formatDate } from "../../../const/format-date";
import TableSkeleton from "../../../components/skeleton/TableSkeleton";
import { base_img_url } from "../../../utils/base_img_url";

const ClientView = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { allClient, isLoading } = useSelector(getAllClientList);

  useEffect(() => {
    dispatch(getAllClient());
  }, [dispatch]);

  const handleNavigateToDetail = (id) => {
    navigate(paths.dashboard.clients.details(id));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="w-full">
          <div className="card flex flex-col">
            <div className="card-body">
              <div className="overflow-x-auto active-projects">
                <div className="p-5">
                  <h4 className="heading">Manage Client</h4>
                </div>
                {isLoading ? (
                  <TableSkeleton />
                ) : (
                  <table id="reports-tbl" className="table w-full">
                    <thead>
                      <tr>
                        <th className="text-[13px] py-2.5 pl-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                          Full Name
                        </th>
                        <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                          Company Info
                        </th>
                        <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                          Company Contact
                        </th>

                        <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                          Location
                        </th>
                        <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-right">
                          Joined Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {allClient?.map((item, index) => (
                        <tr
                          key={index}
                          onClick={() => handleNavigateToDetail(1)}
                          className="cursor-pointer hover:bg-primary-light"
                        >
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src={
                                  base_img_url +
                                  item?.attributes?.logo?.data?.attributes?.url
                                }
                                className="w-[2.25rem] h-[2.25rem] inline-block mr-2.5 relative object-cover rounded-full"
                              />
                              {/* <AvatarByNameRect
                                name={item?.attributes?.clientContactPersonName}
                              /> */}
                              <div>
                                <h6 className="text-sm">
                                  {item?.attributes?.clientContactPersonName}
                                </h6>
                                <span className="text-body-color dark:text-white text-xs block">
                                  {item?.attributes?.clientContactPersonEmail}
                                </span>
                                <span className="text-body-color dark:text-white text-xs">
                                  {item?.attributes?.clientContactPersonNumber}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap">
                            <div>
                              <h6 className="text-sm">
                                {item?.attributes?.companyName}
                              </h6>
                              <span className="text-body-color text-xs text-primary underline">
                                {item?.attributes?.clientEmail}
                              </span>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white">
                              {item?.attributes?.clientContactNumber}
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white">
                              {item?.attributes?.clientAddress}
                            </span>
                          </td>
                          <td className="border-b text-end border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white">
                              {formatDate(item?.attributes?.createdAt)}
                            </span>
                          </td>
                          {/* <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap text-right">
                          <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-success bg-success-light">
                            Active
                          </span>
                        </td> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientView;
