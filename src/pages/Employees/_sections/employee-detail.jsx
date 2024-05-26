import { useEffect, useState } from "react";
import { getSingleEmployee } from "../../../features/reducer/employee/employeeSlice";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployeeData } from "../../../selectors/selectors";
import RectAvatarByName from "../_components/rect-avatar-by-name";
import { base_img_url } from "../../../utils/base_img_url";
import { deletBankDetails } from "../../../features/reducer/employee/bankSlice";
import { Icon } from "@iconify/react";
import NotFound from "../../../components/NotFound";

const EmployeeDetail = () => {
  const [selectedTab, setSelectedTab] = useState("account");

  const { id } = useParams();

  const dispatch = useDispatch();

  const { employeeDetail } = useSelector(getAllEmployeeData);

  useEffect(() => {
    dispatch(getSingleEmployee(id));
  }, [dispatch, id]);

  const handleDeleteBankDetail = (id) => {
    dispatch(deletBankDetails(id));
  };

  console.log(employeeDetail);

  return (
    <>
      <section className="w-full overflow-hidden dark:bg-gray-900 p-5">
        <div className="flex flex-col md:flex-row m-5 bg-white">
          {/* <!-- Cover Image --> */}
          <img
            src="https://images.unsplash.com/photo-1606189933558-71f9b4747578?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User Cover"
            className="w-full object-cover xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]"
          />

          {/* <!-- Profile Image --> */}
          <div className="sm:w-[80%] xs:w-[90%] mx-auto flex flex-row py-5 top-[-3rem] md:top-0 relative">
            {employeeDetail?.attributes?.profileImage?.data?.attributes?.url ? (
              <img
                src={
                  base_img_url +
                  employeeDetail?.attributes?.profileImage?.data?.attributes
                    ?.url
                }
                alt="User Profile"
                className="rounded-md object-cover w-[10rem] h-[10rem] sm:w-[8rem] sm:h-[8rem] lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
              />
            ) : (
              <RectAvatarByName
                firstname={employeeDetail?.attributes?.firstName}
                middlename={employeeDetail?.attributes?.middleName}
                lastname={employeeDetail?.attributes?.lastName}
              />
            )}

            {/* <!-- FullName --> */}
            <div className="flex flex-col md:flex-row items-start mt-10 ms-10 md:mt-0 md:mt-0">
              <h1 className="w-auto md:w-full my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl ">
                {employeeDetail?.attributes?.firstName}{" "}
                {employeeDetail?.attributes?.middleName}{" "}
                {employeeDetail?.attributes?.lastName}
              </h1>
              <h6 className="sm:mx-4 text-stone-400">
                {employeeDetail?.attributes?.userName}
              </h6>
            </div>
          </div>

          <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            {/* <!-- Description --> */}
            <p className="w-fit text-gray-700 dark:text-gray-400 text-md"></p>
            {/* ------------------------------------------------------------------------------------ */}
            <div className="w-full">
              <div className="block">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex gap-6" aria-label="Tabs">
                    <a
                      onClick={() => setSelectedTab("account")}
                      className={`shrink-0 px-1 pb-4 text-lg font-medium hover:text-blue-500 cursor-pointer  ${
                        selectedTab == "account"
                          ? "font-bold text-blue-500 border-b-4 border-blue-500"
                          : ""
                      }`}
                    >
                      Account Information
                    </a>

                    <a
                      onClick={() => setSelectedTab("professional")}
                      className={`shrink-0 b  px-1 pb-4 text-lg font-medium  hover:text-blue-500 cursor-pointer ${
                        selectedTab == "professional"
                          ? "font-bold text-blue-500 border-b-4 border-blue-500"
                          : ""
                      }`}
                    >
                      Professional Information
                    </a>
                  </nav>
                </div>
              </div>
            </div>

            {/* <!-- Detail --> */}
            {selectedTab == "account" && (
              <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
                <div className="flex flex-row items-center justify-between">
                  <h1 className="text-3xl font-[500]  mb-3 ">
                    Account Information
                  </h1>
                  <Link
                    to={`/employee/edit-employee/${employeeDetail?.id}`}
                    className="btn btn-primary py-[5px] cursor-pointer px-5 text-[13px] rounded text-white bg-primary leading-5 inline-block border border-primary font-medium"
                  >
                    Edit
                  </Link>
                </div>
                <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                  <div className="w-full">
                    <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                      <div className="flex flex-col pb-3">
                        <dt className="mb-1  md:text-lg dark:text-gray-400">
                          First Name
                        </dt>
                        <dd className="text-lg font-semibold">
                          {employeeDetail?.attributes?.firstName}{" "}
                          {employeeDetail?.attributes?.middleName}{" "}
                          {employeeDetail?.attributes?.lastName}
                        </dd>
                      </div>
                      <div className="flex flex-col py-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Email
                        </dt>
                        <dd className="text-lg font-semibold">
                          {employeeDetail?.attributes?.primaryEmail || "-"}
                        </dd>
                      </div>
                      <div className="flex flex-col py-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Date Of Birth
                        </dt>
                        <dd className="text-lg font-semibold">
                          {employeeDetail?.attributes?.dateOfBirth || "-"}
                        </dd>
                      </div>
                      <div className="flex flex-col py-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Gender
                        </dt>
                        <dd className="text-lg font-semibold">
                          {employeeDetail?.attributes?.gender || "-"}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="w-full">
                    <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                      <div className="flex flex-col pb-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Username
                        </dt>
                        <dd className="text-lg font-semibold">
                          {employeeDetail?.attributes?.userName || "-"}
                        </dd>
                      </div>
                      <div className="flex flex-col py-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Marital Status
                        </dt>
                        <dd className="text-lg font-semibold">
                          {employeeDetail?.attributes?.maritalStatus || "-"}
                        </dd>
                      </div>
                      <div className="flex flex-col py-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Nationality
                        </dt>
                        <dd className="text-lg font-semibold">
                          {employeeDetail?.attributes?.nationality || "-"}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                {/* Bank Detail */}

                <div className="flex flex-row items-center justify-between mt-10">
                  <h1 className="text-3xl font-[500]  mb-3 ">Bank Details</h1>
                  <Link
                    to="/employee/add-bank-details"
                    className="btn btn-primary py-[5px] cursor-pointer px-5 text-[13px] rounded text-white bg-primary leading-5 inline-block border border-primary font-medium"
                  >
                    Add
                  </Link>
                </div>

                {employeeDetail?.attributes?.bankDetails?.data?.length > 0 ? (
                  employeeDetail?.attributes?.bankDetails?.data
                    ?.slice(0, 2)
                    .map((item, index) => (
                      <div
                        key={index}
                        className="p-6 my-1 rounded-lg custom-box-shadow"
                      >
                        <div className="flex justify-between">
                          <h2 className="mb-2 font-bold text-2xl text-gray-600 tracking-wider">
                            {item?.attributes?.bankName}
                          </h2>
                          <div className="flex gap-2 sm:gap-4">
                            <Link
                              to={`/employee/edit-bank-details/${item?.id}`}
                              className="text-blue-500"
                            >
                              Edit
                            </Link>
                            <Link
                              onClick={() => handleDeleteBankDetail(item?.id)}
                              className="text-red-500"
                            >
                              Delete
                            </Link>
                          </div>
                        </div>
                        <p className="text-gray-500 tracking-widest">
                          <span className="font-bold tracking-wide">
                            Account holder :{" "}
                          </span>{" "}
                          {item?.attributes?.bankAccountHolderName}
                        </p>
                        <p className="text-gray-500 tracking-widest">
                          <span className="font-bold tracking-wide">
                            Account number :{" "}
                          </span>{" "}
                          {item?.attributes?.bankAccountNumber}
                        </p>
                        <p className="text-gray-500 tracking-widest">
                          <span className="font-bold tracking-wide">
                            Branch name :{" "}
                          </span>{" "}
                          {item?.attributes?.branchName}
                        </p>
                      </div>
                    ))
                ) : (
                  <div className="w-full h-96">
                    <NotFound title="No Bank Data" />
                  </div>
                )}

                {/* Education Detail */}
                <div className="flex flex-row items-center justify-between mt-10 mb-5">
                  <h1 className="text-3xl font-[500]  mb-3 ">Education</h1>
                  <Link
                    to="/employee/add-education"
                    className="btn btn-primary py-[5px] cursor-pointer px-5 text-[13px] rounded text-white bg-primary leading-5 inline-block border border-primary font-medium"
                  >
                    Add
                  </Link>
                </div>
                {employeeDetail?.attributes?.educationalQualifications?.data
                  .length > 0 ? (
                  employeeDetail?.attributes?.educationalQualifications?.data.map(
                    (item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex mb-5 gap-4 border-slate-300 rounded-2xl border-s-8 p-6 custom-box-shadow-low"
                        >
                          <div className="flex-none mr-4 h-full ">
                            <Icon
                              icon="ion:school-outline"
                              className="text-[#888888] text-6xl font-regular"
                            />
                          </div>
                          <div className="flex-grow flex justify-between">
                            <div className="mb-2">
                              <h2 className="text-2xl font-semibold">
                                {item?.attributes?.programName}
                              </h2>
                              <p className="text-lg text-[#000000]">
                                {item?.attributes?.schoolUniName} (
                                {item?.attributes?.facultyName})
                              </p>
                              <p className="text-sm text-gray-500">
                                ({item?.attributes?.startYear} to{" "}
                                {item?.attributes?.endYear})
                              </p>
                            </div>
                            <div className="flex gap-4">
                              <Link
                                to={`/employee/edit-education/${item?.id}`}
                                className="text-blue-500"
                              >
                                Edit
                              </Link>
                              <Link className="text-red-500">Delete</Link>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )
                ) : (
                  <div className="w-full h-96">
                    <NotFound title="No Education Data" />
                  </div>
                )}
              </div>
            )}

            {selectedTab == "professional" && (
              <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
                {/* Education Detail */}
                <div className="flex flex-row items-center justify-between mt-10 mb-5">
                  <h1 className="text-3xl font-[500]  mb-3 ">
                    Personal Information
                  </h1>
                  <Link
                    to="/employee/add-identification-information"
                    className="btn btn-primary py-[5px] cursor-pointer px-5 text-[13px] rounded text-white bg-primary leading-5 inline-block border border-primary font-medium"
                  >
                    Add
                  </Link>
                </div>
                {employeeDetail?.attributes?.personalIdentificationInfo.data !==
                null ? (
                  <>
                    <div className="bg-white rounded-lg shadow-lg  w-full">
                      <div className="bg-gray-100 text-2xl py-3 px-8 font-extrabold text-center">
                        <h2>Citizenship Information</h2>
                      </div>
                      <div className="w-full flex gap-3">
                        <a
                          className="w-1/2 border-[2px] border-slate-400"
                          href={
                            base_img_url +
                            employeeDetail?.attributes
                              ?.personalIdentificationInfo?.data?.attributes
                              ?.citizenshipScanCopyFront?.data?.attributes?.url
                          }
                          target="_blank"
                        >
                          <img
                            src={
                              base_img_url +
                              employeeDetail?.attributes
                                ?.personalIdentificationInfo?.data?.attributes
                                ?.citizenshipScanCopyFront?.data?.attributes
                                ?.url
                            }
                            className=" w-full h-60 object-cover"
                          />
                        </a>
                        <a
                          className="w-1/2"
                          target="_blank"
                          href={
                            base_img_url +
                            employeeDetail?.attributes
                              ?.personalIdentificationInfo?.data?.attributes
                              ?.citizenshipScanCopyBack?.data?.attributes?.url
                          }
                        >
                          <img
                            src={
                              base_img_url +
                              employeeDetail?.attributes
                                ?.personalIdentificationInfo?.data?.attributes
                                ?.citizenshipScanCopyBack?.data?.attributes?.url
                            }
                            className=" w-full h-60 object-cover"
                          />
                        </a>
                      </div>

                      <div className="flex w-full px-5 py-8 gap-10">
                        <div className="w-full h-auto divide-y flex flex-col gap-10">
                          <div className="flex justify-between 0">
                            <h3 className="text-md font-semibold">
                              Citizenship Number :
                            </h3>
                            <p>
                              {employeeDetail?.attributes
                                ?.personalIdentificationInfo?.data?.attributes
                                ?.citizenshipNumber || "N/A"}
                            </p>
                          </div>
                          <div className="flex justify-between 0">
                            <h3 className="text-md font-semibold">
                              Citizenship Issue Date :
                            </h3>
                            <p>
                              {employeeDetail?.attributes
                                ?.personalIdentificationInfo?.data?.attributes
                                ?.citizenshipIssueDate || "N/A"}
                            </p>
                          </div>
                          <div className="flex justify-between 0">
                            <h3 className="text-md font-semibold">
                              Citizenship Issued District :
                            </h3>
                            <p>
                              {employeeDetail?.attributes
                                ?.personalIdentificationInfo?.data?.attributes
                                ?.citizenshipIssuedDistrict || "N/A"}
                            </p>
                          </div>
                          <div className="flex justify-between 0">
                            <h3 className="text-md font-semibold">
                              Citizenship Issued Provience :
                            </h3>
                            <p className="">
                              {employeeDetail?.attributes
                                ?.personalIdentificationInfo?.data?.attributes
                                ?.citizenshipIssuedProvince || "N/A"}
                            </p>
                          </div>
                        </div>
                      </div>

                      <footer className="bg-gray-100 rounded-b-lg text-right py-3 px-8 text-xs text-gray-500">
                        Updated 3 day ago
                      </footer>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg  w-full mt-10">
                      <div className="bg-gray-100 text-2xl py-3 px-8 font-extrabold text-center">
                        <h2>PAN Details</h2>
                      </div>
                      <div className="w-full flex gap-3">
                        <a
                          className="w-1/2"
                          href={
                            base_img_url +
                            employeeDetail?.attributes
                              ?.personalIdentificationInfo?.data?.attributes
                              ?.panScanCopyFront?.data?.attributes?.url
                          }
                          target="_blank"
                        >
                          <img
                            src={
                              base_img_url +
                              employeeDetail?.attributes
                                ?.personalIdentificationInfo?.data?.attributes
                                ?.panScanCopyFront?.data?.attributes?.url
                            }
                            className=" w-full h-60 object-cover"
                          />
                        </a>
                        <a
                          className="w-1/2"
                          target="_blank"
                          href={
                            base_img_url +
                            employeeDetail?.attributes
                              ?.personalIdentificationInfo?.data?.attributes
                              ?.panScanCopyBack?.data?.attributes?.url
                          }
                        >
                          <img
                            src={
                              base_img_url +
                              employeeDetail?.attributes
                                ?.personalIdentificationInfo?.data?.attributes
                                ?.panScanCopyBack?.data?.attributes?.url
                            }
                            className=" w-full h-60 object-cover"
                          />
                        </a>
                      </div>

                      <div className="flex w-full px-5 py-8 gap-10">
                        <div className="w-full h-auto divide-y flex flex-col gap-10">
                          <div className="flex justify-between 0">
                            <h3 className="text-md font-semibold">
                              PAN Number :
                            </h3>
                            <p>
                              {employeeDetail?.attributes
                                ?.personalIdentificationInfo?.data?.attributes
                                ?.panNumber || "N/A"}
                            </p>
                          </div>
                          <div className="flex justify-between 0">
                            <h3 className="text-md font-semibold">
                              PAN Issue Date :
                            </h3>
                            <p>
                              {employeeDetail?.attributes
                                ?.personalIdentificationInfo?.data?.attributes
                                ?.panIssueDate || "N/A"}
                            </p>
                          </div>
                          <div className="flex justify-between 0">
                            <h3 className="text-md font-semibold">
                              PAN Issued District :
                            </h3>
                            <p>
                              {employeeDetail?.attributes
                                ?.personalIdentificationInfo?.data?.attributes
                                ?.panIssueDistrict || "N/A"}
                            </p>
                          </div>
                        </div>
                      </div>

                      <footer className="bg-gray-100 rounded-b-lg text-right py-3 px-8 text-xs text-gray-500">
                        Updated 3 day ago
                      </footer>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-96">
                    <NotFound title="No Personal Indentification Data" />
                  </div>
                )}
              </div>
            )}

            {/* <!-- Social Links --> */}
            <div className="fixed right-2 bottom-20 flex flex-col rounded-sm  bg-slate-200">
              <a href="https://www.linkedin.com/in/samuel-abera-6593a2209/">
                <div className="p-2 hover:text-primary hover:dark:text-primary">
                  <Icon icon="devicon:linkedin" className="text-3xl" />
                </div>
              </a>
              <a href="https://twitter.com/Samuel7Abera7">
                <div className="p-2 hover:text-primary hover:dark:text-primary">
                  <Icon icon="devicon:twitter" className="text-3xl" />
                </div>
              </a>
              <a href="">
                <div className="p-2 hover:text-blue-500 hover:dark:text-blue-500">
                  <Icon icon="devicon:facebook" className="text-3xl" />
                </div>
              </a>
              <a href="https://www.youtube.com/@silentcoder7">
                <div className="p-2 hover:text-primary hover:dark:text-primary">
                  <Icon icon="devicon:github" className="text-3xl" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Photo by '@jessbaileydesigns' & '@von_co' on Unsplash --> */}
    </>
  );
};

export default EmployeeDetail;
