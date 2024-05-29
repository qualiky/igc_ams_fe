import Breadcumb from "../../components/Breadcumb";

import "../../../public/assets/vendor/apexchart/apexchart.min.js";

const Home = () => {
  return (
    <>
      <div className="content-body">
        {/* row 	 */}
        <Breadcumb title="Dashboard" subtitle="Home" />
        <div className="container-fluid">
          <div className="row">
            <div className="2xl:w-3/4 w-full">
              <div className="row">
                <div className="xl:w-1/4 sm:w-1/2 w-full">
                  <div className="card chart-grd same-card overflow-hidden relative">
                    <div className="card-body depostit-card p-0">
                      <div className="depostit-card-media flex justify-between px-5 pt-[18px] relative z-[1]">
                        <div>
                          <h6 className="font-normal">Total Deposit</h6>
                          <h3 className="font-semibold leading-[1.346]">
                            $1200.00
                          </h3>
                        </div>
                        <div className="icon-box bg-primary-light h-[2.5rem] w-[2.5rem] relative flex items-center justify-center rounded-md">
                          <svg
                            width="12"
                            height="20"
                            viewBox="0 0 12 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.4642 13.7074C11.4759 12.1252 10.8504 10.8738 9.60279 9.99009C8.6392 9.30968 7.46984 8.95476 6.33882 8.6137C3.98274 7.89943 3.29927 7.52321 3.29927 6.3965C3.29927 5.14147 4.93028 4.69493 6.32655 4.69493C7.34341 4.69493 8.51331 5.01109 9.23985 5.47964L10.6802 3.24887C9.73069 2.6333 8.43112 2.21342 7.14783 2.0831V0H4.49076V2.22918C2.12884 2.74876 0.640949 4.29246 0.640949 6.3965C0.640949 7.87005 1.25327 9.03865 2.45745 9.86289C3.37331 10.4921 4.49028 10.83 5.56927 11.1572C7.88027 11.8557 8.81873 12.2813 8.80805 13.691L8.80799 13.7014C8.80799 14.8845 7.24005 15.3051 5.89676 15.3051C4.62786 15.3051 3.248 14.749 2.46582 13.9222L0.535522 15.7481C1.52607 16.7957 2.96523 17.5364 4.4907 17.8267V20.0001H7.14783V17.8735C9.7724 17.4978 11.4616 15.9177 11.4642 13.7074Z"
                              fill="var(--primary)"
                            />
                          </svg>
                        </div>
                      </div>
                      <div id="NewCustomers"></div>
                      {/* <Chart
                        options={options}
                        series={series}
                        type="bar"
                        width="500"
                      /> */}
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/4 sm:w-1/2 w-full">
                  <div className="card same-card relative flex flex-col">
                    <div className="card-body flex items-center px-5 py-2 flex-auto">
                      <div id="AllProject" className="ml-[-2.063rem]"></div>
                      <ul className="project-list ml-[-1.25rem]">
                        <li className="text-[0.813rem] py-[1px] text-body-color whitespace-nowrap mb-[2px]">
                          <h6 className="font-medium">All Projects</h6>
                        </li>
                        <li className="text-[0.813rem] py-[1px] text-body-color whitespace-nowrap">
                          <svg
                            className="inline-block"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="10"
                              height="10"
                              rx="3"
                              fill="#3AC977"
                            />
                          </svg>
                          Compete
                        </li>
                        <li className="text-[0.813rem] py-[1px] text-body-color">
                          <svg
                            className="inline-block"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="10"
                              height="10"
                              rx="3"
                              fill="var(--primary)"
                            />
                          </svg>
                          Pending
                        </li>
                        <li className="text-[0.813rem] py-[1px] text-body-color">
                          <svg
                            className="inline-block"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="10"
                              height="10"
                              rx="3"
                              fill="var(--secondary)"
                            />
                          </svg>
                          Not Start
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/4 sm:w-1/2 w-full">
                  <div className="card chart-grd same-card overflow-hidden relative">
                    <div className="card-body depostit-card p-0">
                      <div className="depostit-card-media flex justify-between px-5 pt-[18px] relative z-[1]">
                        <div>
                          <h6 className="font-normal">Total Expenses</h6>
                          <h3 className="font-semibold leading-[1.346]">
                            $1200.00
                          </h3>
                        </div>
                        <div className="icon-box bg-danger-light h-[2.5rem] w-[2.5rem] relative flex items-center justify-center rounded-md">
                          <svg
                            width="12"
                            height="20"
                            viewBox="0 0 12 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.4642 13.7074C11.4759 12.1252 10.8504 10.8738 9.60279 9.99009C8.6392 9.30968 7.46984 8.95476 6.33882 8.6137C3.98274 7.89943 3.29927 7.52321 3.29927 6.3965C3.29927 5.14147 4.93028 4.69493 6.32655 4.69493C7.34341 4.69493 8.51331 5.01109 9.23985 5.47964L10.6802 3.24887C9.73069 2.6333 8.43112 2.21342 7.14783 2.0831V0H4.49076V2.22918C2.12884 2.74876 0.640949 4.29246 0.640949 6.3965C0.640949 7.87005 1.25327 9.03865 2.45745 9.86289C3.37331 10.4921 4.49028 10.83 5.56927 11.1572C7.88027 11.8557 8.81873 12.2813 8.80805 13.691L8.80799 13.7014C8.80799 14.8845 7.24005 15.3051 5.89676 15.3051C4.62786 15.3051 3.248 14.749 2.46582 13.9222L0.535522 15.7481C1.52607 16.7957 2.96523 17.5364 4.4907 17.8267V20.0001H7.14783V17.8735C9.7724 17.4978 11.4616 15.9177 11.4642 13.7074Z"
                              fill="#FF5E5E"
                            />
                          </svg>
                        </div>
                      </div>
                      <div id="NewExperience"></div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/4 sm:w-1/2 w-full same-card">
                  <div className="card">
                    <div className="card-body depostit-card p-5">
                      <div className="depostit-card-media flex justify-between relative z-[2]">
                        <div>
                          <h6 className="font-normal">Total Deposit</h6>
                          <h3 className="font-semibold leading-[1.346]">20</h3>
                        </div>
                        <div className="icon-box bg-primary-light h-[2.5rem] w-[2.5rem] relative flex items-center justify-center rounded-md">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.3787 1.875H15.625V1.25C15.625 1.08424 15.5592 0.925268 15.4419 0.808058C15.3247 0.690848 15.1658 0.625 15 0.625C14.8342 0.625 14.6753 0.690848 14.5581 0.808058C14.4408 0.925268 14.375 1.08424 14.375 1.25V1.875H10.625V1.25C10.625 1.08424 10.5592 0.925268 10.4419 0.808058C10.3247 0.690848 10.1658 0.625 10 0.625C9.83424 0.625 9.67527 0.690848 9.55806 0.808058C9.44085 0.925268 9.375 1.08424 9.375 1.25V1.875H5.625V1.25C5.625 1.08424 5.55915 0.925268 5.44194 0.808058C5.32473 0.690848 5.16576 0.625 5 0.625C4.83424 0.625 4.67527 0.690848 4.55806 0.808058C4.44085 0.925268 4.375 1.08424 4.375 1.25V1.875H3.62125C2.99266 1.87599 2.3901 2.12614 1.94562 2.57062C1.50114 3.0151 1.25099 3.61766 1.25 4.24625V17.0037C1.25099 17.6323 1.50114 18.2349 1.94562 18.6794C2.3901 19.1239 2.99266 19.374 3.62125 19.375H16.3787C17.0073 19.374 17.6099 19.1239 18.0544 18.6794C18.4989 18.2349 18.749 17.6323 18.75 17.0037V4.24625C18.749 3.61766 18.4989 3.0151 18.0544 2.57062C17.6099 2.12614 17.0073 1.87599 16.3787 1.875ZM17.5 17.0037C17.499 17.3008 17.3806 17.5854 17.1705 17.7955C16.9604 18.0056 16.6758 18.124 16.3787 18.125H3.62125C3.32418 18.124 3.03956 18.0056 2.8295 17.7955C2.61944 17.5854 2.50099 17.3008 2.5 17.0037V4.24625C2.50099 3.94918 2.61944 3.66456 2.8295 3.4545C3.03956 3.24444 3.32418 3.12599 3.62125 3.125H4.375V3.75C4.375 3.91576 4.44085 4.07473 4.55806 4.19194C4.67527 4.30915 4.83424 4.375 5 4.375C5.16576 4.375 5.32473 4.30915 5.44194 4.19194C5.55915 4.07473 5.625 3.91576 5.625 3.75V3.125H9.375V3.75C9.375 3.91576 9.44085 4.07473 9.55806 4.19194C9.67527 4.30915 9.83424 4.375 10 4.375C10.1658 4.375 10.3247 4.30915 10.4419 4.19194C10.5592 4.07473 10.625 3.91576 10.625 3.75V3.125H14.375V3.75C14.375 3.91576 14.4408 4.07473 14.5581 4.19194C14.6753 4.30915 14.8342 4.375 15 4.375C15.1658 4.375 15.3247 4.30915 15.4419 4.19194C15.5592 4.07473 15.625 3.91576 15.625 3.75V3.125H16.3787C16.6758 3.12599 16.9604 3.24444 17.1705 3.4545C17.3806 3.66456 17.499 3.94918 17.5 4.24625V17.0037Z"
                              fill="var(--primary)"
                            />
                            <path
                              d="M7.68311 7.05812L6.24999 8.49125L5.44186 7.68312C5.38421 7.62343 5.31524 7.57581 5.23899 7.54306C5.16274 7.5103 5.08073 7.49306 4.99774 7.49234C4.91475 7.49162 4.83245 7.50743 4.75564 7.53886C4.67883 7.57028 4.60905 7.61669 4.55037 7.67537C4.49168 7.73406 4.44528 7.80384 4.41385 7.88065C4.38243 7.95746 4.36661 8.03976 4.36733 8.12275C4.36805 8.20573 4.3853 8.28775 4.41805 8.364C4.45081 8.44025 4.49842 8.50922 4.55811 8.56687L5.80811 9.81687C5.92532 9.93404 6.08426 9.99986 6.24999 9.99986C6.41572 9.99986 6.57466 9.93404 6.69186 9.81687L8.56686 7.94187C8.68071 7.82399 8.74371 7.66612 8.74229 7.50224C8.74086 7.33837 8.67513 7.18161 8.55925 7.06573C8.44337 6.94985 8.28661 6.88412 8.12274 6.8827C7.95887 6.88127 7.80099 6.94427 7.68311 7.05812Z"
                              fill="var(--primary)"
                            />
                            <path
                              d="M15 8.125H10.625C10.4592 8.125 10.3003 8.19085 10.1831 8.30806C10.0658 8.42527 10 8.58424 10 8.75C10 8.91576 10.0658 9.07473 10.1831 9.19194C10.3003 9.30915 10.4592 9.375 10.625 9.375H15C15.1658 9.375 15.3247 9.30915 15.4419 9.19194C15.5592 9.07473 15.625 8.91576 15.625 8.75C15.625 8.58424 15.5592 8.42527 15.4419 8.30806C15.3247 8.19085 15.1658 8.125 15 8.125Z"
                              fill="var(--primary)"
                            />
                            <path
                              d="M7.68311 12.6831L6.24999 14.1162L5.44186 13.3081C5.38421 13.2484 5.31524 13.2008 5.23899 13.1681C5.16274 13.1353 5.08073 13.1181 4.99774 13.1173C4.91475 13.1166 4.83245 13.1324 4.75564 13.1639C4.67883 13.1953 4.60905 13.2417 4.55037 13.3004C4.49168 13.3591 4.44528 13.4288 4.41385 13.5056C4.38243 13.5825 4.36661 13.6648 4.36733 13.7477C4.36805 13.8307 4.3853 13.9127 4.41805 13.989C4.45081 14.0653 4.49842 14.1342 4.55811 14.1919L5.80811 15.4419C5.92532 15.559 6.08426 15.6249 6.24999 15.6249C6.41572 15.6249 6.57466 15.559 6.69186 15.4419L8.56686 13.5669C8.68071 13.449 8.74371 13.2911 8.74229 13.1272C8.74086 12.9634 8.67513 12.8066 8.55925 12.6907C8.44337 12.5749 8.28661 12.5091 8.12274 12.5077C7.95887 12.5063 7.80099 12.5693 7.68311 12.6831Z"
                              fill="var(--primary)"
                            />
                            <path
                              d="M15 13.75H10.625C10.4592 13.75 10.3003 13.8158 10.1831 13.9331C10.0658 14.0503 10 14.2092 10 14.375C10 14.5408 10.0658 14.6997 10.1831 14.8169C10.3003 14.9342 10.4592 15 10.625 15H15C15.1658 15 15.3247 14.9342 15.4419 14.8169C15.5592 14.6997 15.625 14.5408 15.625 14.375C15.625 14.2092 15.5592 14.0503 15.4419 13.9331C15.3247 13.8158 15.1658 13.75 15 13.75Z"
                              fill="var(--primary)"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="progress-box mt-0">
                        <div className="flex justify-between">
                          <p className="mb-0">Tasks Not Finished</p>
                          <p className="mb-0">20/28</p>
                        </div>
                        <div className="progress h-[5px] flex overflow-hidden rounded-md">
                          <div
                            className="progress-bar bg-primary rounded-[4px]"
                            style={{ width: "50%", height: "5px" }}
                            role="progressbar"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="2xl:w-1/4 w-full t-earn">
              <div className="card overflow-hidden relative flex flex-col">
                <div className="card-header flex justify-between items-center bg-transparent px-5 pt-6 relative z-[2]">
                  <h4 className="heading">Total Earning</h4>
                </div>
                <div className="card-body py-5 overflow-hidden">
                  <div className="total-earning text-center">
                    <h2 className="text-[38px] font-semibold mb-2">
                      $6,743.00
                    </h2>
                    <ul className="nav nav-pills earning-tab earning-chart flex flex-wrap mb-4 justify-center dz-tab-area">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link text-body-color py-1 px-[5px] border-b-[3px] border-transparent my-1.5 mx-4 text-sm bg-transparent tab-btn shadow-none duration-300 active"
                          data-series="day"
                          data-tab="tab-day"
                          type="button"
                        >
                          Day
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link text-body-color py-1 px-[5px] border-b-[3px] border-transparent my-1.5 mx-4 text-sm bg-transparent shadow-none duration-300 tab-btn"
                          id="pills-week-tab1"
                          data-series="week"
                          data-tab="tab-week"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-week1"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          Week
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link text-body-color py-1 px-[5px] border-b-[3px] border-transparent my-1.5 mx-4 text-sm bg-transparent shadow-none duration-300 tab-btn"
                          id="pills-month-tab1"
                          data-series="month"
                          data-tab="tab-month"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-month1"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          Month
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link text-body-color py-1 px-[5px] border-b-[3px] border-transparent my-1.5 mx-4 text-sm bg-transparent shadow-none duration-300 tab-btn"
                          id="pills-year-tab1"
                          data-series="year"
                          data-tab="tab-year"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-year1"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          Year
                        </button>
                      </li>
                    </ul>
                    <div id="earningChart" className="mt-[35px]"></div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="2xl:w-1/2 w-full active-p">
              <div className="card">
                <div className="card-body p-0">
                  <div className="overflow-x-auto active-projects shorting">
                    <div className="p-5">
                      <h4 className="heading">Active Projects</h4>
                    </div>
                    <table
                      id="projects-tbl"
                      className="table ItemsCheckboxSec text-sm w-full"
                    >
                      <thead>
                        <tr>
                          <th className="text-[13px] py-2.5 pl-4 pr-0 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <div className="form-check custom-checkbox ms-0">
                              <input
                                type="checkbox"
                                className="form-check-input checkAll ml-0"
                                id="checkInput"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="checkInput"
                              ></label>
                            </div>
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                            Project Name
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                            Project Lead
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                            Progress
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                            Assignee
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                            Status
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-right">
                            Due Date
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-[13px] font-normal py-2.5 pl-4 pr-0 whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox2"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox2"
                              ></label>
                            </div>
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap text-body-color">
                            Batman
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block w-[1.875rem] min-w-[1.875rem] h-[1.875rem] rounded-full relative object-cover"
                                width="30px"
                                height="30px"
                                alt=""
                              />
                              <p className="ml-2 dark:text-white text-[13px]">
                                Liam Risher
                              </p>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="flex items-center">
                              <div className="progress bg-[#f6f6f6] dark:bg-[#1E1E1E] mr-[5px] h-[5px] overflow-hidden flex-1">
                                <div
                                  className="progress-bar bg-primary rounded-[4px]"
                                  style={{ width: "53%", height: "5px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <span className="text-primary">53%</span>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="avatar-list avatar-list-stacked">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic555.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic666.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <span className="bg-primary-light text-primary text-xs py-[5px] px-3 rounded font-medium leading-[1.5]">
                              Inprogress
                            </span>
                          </td>
                          <td className="text-right text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <span className="text-body-color dark:text-white">
                              08 Sep 2024
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-[13px] font-normal py-2.5 pl-4 pr-0 whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox3"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox3"
                              ></label>
                            </div>
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap text-body-color">
                            Mivy App
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block w-[1.875rem] min-w-[1.875rem] h-[1.875rem] rounded-full relative object-cover"
                                width="30px"
                                height="30px"
                                alt=""
                              />
                              <p className="ml-2 dark:text-white text-[13px]">
                                Honey Risher
                              </p>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="flex items-center">
                              <div className="progress bg-[#f6f6f6] dark:bg-[#1E1E1E] mr-[5px] h-[5px] overflow-hidden flex-1">
                                <div
                                  className="progress-bar bg-primary rounded-[4px]"
                                  style={{ width: "53%", height: "5px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <span className="text-primary">52%</span>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="avatar-list avatar-list-stacked">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic777.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic666.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-danger bg-danger-light">
                              Inprogress
                            </span>
                          </td>
                          <td className="text-right text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <span className="text-body-color dark:text-white">
                              06 Sep 2021
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-[13px] font-normal py-2.5 pl-4 pr-0 whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox22"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox22"
                              ></label>
                            </div>
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap text-body-color">
                            Crypto App
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src="assets/images/contacts/pic2.jpg"
                                className="inline-block w-[1.875rem] min-w-[1.875rem] h-[1.875rem] rounded-full relative object-cover"
                                width="30px"
                                height="30px"
                                alt=""
                              />
                              <p className="ml-2 dark:text-white text-[13px]">
                                Ankites Risher
                              </p>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="flex items-center">
                              <div className="progress bg-[#f6f6f6] dark:bg-[#1E1E1E] mr-[5px] h-[5px] overflow-hidden flex-1">
                                <div
                                  className="progress-bar bg-danger rounded-[4px]"
                                  style={{ width: "53%", height: "5px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <span className="text-primary">58%</span>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="avatar-list avatar-list-stacked">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic777.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-danger bg-danger-light">
                              Pending
                            </span>
                          </td>
                          <td className="text-right text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <span className="text-body-color dark:text-white">
                              06 Sep 2021
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-[13px] font-normal py-2.5 pl-4 pr-0 whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox33"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox33"
                              ></label>
                            </div>
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap text-body-color">
                            Bender Project
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src="assets/images/contacts/pic2.jpg"
                                className="inline-block w-[1.875rem] min-w-[1.875rem] h-[1.875rem] rounded-full relative object-cover"
                                width="30px"
                                height="30px"
                                alt=""
                              />
                              <p className="ml-2 dark:text-white text-[13px]">
                                Oliver Noah
                              </p>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="flex items-center">
                              <div className="progress bg-[#f6f6f6] dark:bg-[#1E1E1E] mr-[5px] h-[5px] overflow-hidden flex-1">
                                <div
                                  className="progress-bar bg-danger rounded-[4px]"
                                  style={{ width: "30%", height: "5px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <span className="text-danger">30%</span>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="avatar-list avatar-list-stacked">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic555.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic666.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-danger bg-danger-light">
                              Pending
                            </span>
                          </td>
                          <td className="text-right text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <span className="text-body-color dark:text-white">
                              06 Sep 2021
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-[13px] font-normal py-2.5 pl-4 pr-0 whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox044"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox044"
                              ></label>
                            </div>
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap text-body-color">
                            Canary
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src="assets/images/contacts/pic888.jpg"
                                className="inline-block w-[1.875rem] min-w-[1.875rem] h-[1.875rem] rounded-full relative object-cover"
                                width="30px"
                                height="30px"
                                alt=""
                              />
                              <p className="ml-2 dark:text-white text-[13px]">
                                Elijah James
                              </p>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="flex items-center">
                              <div className="progress bg-[#f6f6f6] dark:bg-[#1E1E1E] mr-[5px] h-[5px] overflow-hidden flex-1">
                                <div
                                  className="progress-bar bg-success rounded-[4px]"
                                  style={{ width: "40%", height: "5px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <span className="text-success">40%</span>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="avatar-list avatar-list-stacked">
                              <img
                                src="assets/images/contacts/pic666.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic555.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic666.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-success bg-success-light">
                              Completed
                            </span>
                          </td>
                          <td className="text-right text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <span className="text-body-color dark:text-white">
                              06 Sep 2021
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-[13px] font-normal py-2.5 pl-4 pr-0 whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox055"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox055"
                              ></label>
                            </div>
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap text-body-color">
                            Casanova
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block w-[1.875rem] min-w-[1.875rem] h-[1.875rem] rounded-full relative object-cover"
                                width="30px"
                                height="30px"
                                alt=""
                              />
                              <p className="ml-2 dark:text-white text-[13px]">
                                William Risher
                              </p>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="flex items-center">
                              <div className="progress bg-[#f6f6f6] dark:bg-[#1E1E1E] mr-[5px] h-[5px] overflow-hidden flex-1">
                                <div
                                  className="progress-bar bg-primary rounded-[4px]"
                                  style={{ width: "53%", height: "5px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <span className="text-primary">53%</span>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="avatar-list avatar-list-stacked">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic555.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic666.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <span className="bg-primary-light text-primary text-xs py-[5px] px-3 rounded font-medium leading-[1.5]">
                              Inprogress
                            </span>
                          </td>
                          <td className="text-right text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <span className="text-body-color dark:text-white">
                              06 Sep 2021
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-[13px] font-normal py-2.5 pl-4 pr-0 whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox23"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox23"
                              ></label>
                            </div>
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap text-body-color">
                            Bender Project
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src="assets/images/contacts/pic2.jpg"
                                className="inline-block w-[1.875rem] min-w-[1.875rem] h-[1.875rem] rounded-full relative object-cover"
                                width="30px"
                                height="30px"
                                alt=""
                              />
                              <p className="ml-2 dark:text-white text-[13px]">
                                Oliver Noah
                              </p>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="flex items-center">
                              <div className="progress bg-[#f6f6f6] dark:bg-[#1E1E1E] mr-[5px] h-[5px] overflow-hidden flex-1">
                                <div
                                  className="progress-bar bg-danger rounded-[4px]"
                                  style={{ width: "30%", height: "5px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <span className="text-danger">30%</span>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="avatar-list avatar-list-stacked">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic555.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic666.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-danger bg-danger-light">
                              Pending
                            </span>
                          </td>
                          <td className="text-right text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <span className="text-body-color dark:text-white">
                              06 Sep 2021
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-[13px] font-normal py-2.5 pl-4 pr-0 whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox44"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox44"
                              ></label>
                            </div>
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap text-body-color">
                            Canary
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src="assets/images/contacts/pic888.jpg"
                                className="inline-block w-[1.875rem] min-w-[1.875rem] h-[1.875rem] rounded-full relative object-cover"
                                width="30px"
                                height="30px"
                                alt=""
                              />
                              <p className="ml-2 dark:text-white text-[13px]">
                                Elijah James
                              </p>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="flex items-center">
                              <div className="progress bg-[#f6f6f6] dark:bg-[#1E1E1E] mr-[5px] h-[5px] overflow-hidden flex-1">
                                <div
                                  className="progress-bar bg-success rounded-[4px]"
                                  style={{ width: "40%", height: "5px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <span className="text-success">40%</span>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="avatar-list avatar-list-stacked">
                              <img
                                src="assets/images/contacts/pic666.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic555.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic666.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-success bg-success-light">
                              Completed
                            </span>
                          </td>
                          <td className="text-right text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <span className="text-body-color dark:text-white">
                              06 Sep 2021
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-[13px] font-normal py-2.5 pl-4 pr-0 whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox55"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox55"
                              ></label>
                            </div>
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap text-body-color">
                            Casanova
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block w-[1.875rem] min-w-[1.875rem] h-[1.875rem] rounded-full relative object-cover"
                                width="30px"
                                height="30px"
                                alt=""
                              />
                              <p className="ml-2 dark:text-white text-[13px]">
                                William Risher
                              </p>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="flex items-center">
                              <div className="progress bg-[#f6f6f6] dark:bg-[#1E1E1E] mr-[5px] h-[5px] overflow-hidden flex-1">
                                <div
                                  className="progress-bar bg-primary rounded-[4px]"
                                  style={{ width: "53%", height: "5px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <span className="text-primary">53%</span>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="avatar-list avatar-list-stacked">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic555.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic666.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <span className="bg-primary-light text-primary text-xs py-[5px] px-3 rounded font-medium leading-[1.5]">
                              Inprogress
                            </span>
                          </td>
                          <td className="text-right text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <span className="text-body-color dark:text-white">
                              06 Sep 2021
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-[13px] font-normal py-2.5 pl-4 pr-0 whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox66"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox66"
                              ></label>
                            </div>
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap text-body-color">
                            Bigfish
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src="assets/images/contacts/pic777.jpg"
                                className="inline-block w-[1.875rem] min-w-[1.875rem] h-[1.875rem] rounded-full relative object-cover"
                                width="30px"
                                height="30px"
                                alt=""
                              />
                              <p className="ml-2 dark:text-white text-[13px]">
                                Donald Benjamin
                              </p>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="flex items-center">
                              <div className="progress bg-[#f6f6f6] dark:bg-[#1E1E1E] mr-[5px] h-[5px] overflow-hidden flex-1">
                                <div
                                  className="progress-bar bg-danger rounded-[4px]"
                                  style={{ width: "30%", height: "5px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <span className="text-danger">30%</span>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="avatar-list avatar-list-stacked">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic777.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic666.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-danger bg-danger-light">
                              Inprogress
                            </span>
                          </td>
                          <td className="text-right text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <span className="text-body-color dark:text-white">
                              06 Sep 2021
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-[13px] font-normal py-2.5 pl-4 pr-0 whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox7"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox7"
                              ></label>
                            </div>
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap text-body-color">
                            Matadors
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src="assets/images/contacts/pic888.jpg"
                                className="inline-block w-[1.875rem] min-w-[1.875rem] h-[1.875rem] rounded-full relative object-cover"
                                width="30px"
                                height="30px"
                                alt=""
                              />
                              <p className="ml-2 dark:text-white text-[13px]">
                                Liam Risher
                              </p>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="flex items-center">
                              <div className="progress bg-[#f6f6f6] dark:bg-[#1E1E1E] mr-[5px] h-[5px] overflow-hidden flex-1">
                                <div
                                  className="progress-bar bg-primary rounded-[4px]"
                                  style={{ width: "53%", height: "5px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <span className="text-primary">53%</span>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="avatar-list avatar-list-stacked">
                              <img
                                src="assets/images/contacts/pic777.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic555.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic666.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <span className="bg-primary-light text-primary text-xs py-[5px] px-3 rounded font-medium leading-[1.5]">
                              Inprogress
                            </span>
                          </td>
                          <td className="text-right text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <span className="text-body-color dark:text-white">
                              06 Sep 2021
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-[13px] font-normal py-2.5 pl-4 pr-0 whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox88"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox88"
                              ></label>
                            </div>
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap text-body-color">
                            Mercury
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src="assets/images/contacts/pic2.jpg"
                                className="inline-block w-[1.875rem] min-w-[1.875rem] h-[1.875rem] rounded-full relative object-cover"
                                width="30px"
                                height="30px"
                                alt=""
                              />
                              <p className="ml-2 dark:text-white text-[13px]">
                                Oliver Noah
                              </p>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="flex items-center">
                              <div className="progress bg-[#f6f6f6] dark:bg-[#1E1E1E] mr-[5px] h-[5px] overflow-hidden flex-1">
                                <div
                                  className="progress-bar bg-danger rounded-[4px]"
                                  style={{ width: "30%", height: "5px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <span className="text-danger">30%</span>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="avatar-list avatar-list-stacked">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic777.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic666.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-danger bg-danger-light">
                              Pending
                            </span>
                          </td>
                          <td className="text-right text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <span className="text-body-color dark:text-white">
                              06 Sep 2021
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-[13px] font-normal py-2.5 pl-4 pr-0 whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox99"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox99"
                              ></label>
                            </div>
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap text-body-color">
                            Whistler
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src="assets/images/contacts/pic999.jpg"
                                className="inline-block w-[1.875rem] min-w-[1.875rem] h-[1.875rem] rounded-full relative object-cover"
                                width="30px"
                                height="30px"
                                alt=""
                              />
                              <p className="ml-2 dark:text-white text-[13px]">
                                Elijah James
                              </p>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="flex items-center">
                              <div className="progress bg-[#f6f6f6] dark:bg-[#1E1E1E] mr-[5px] h-[5px] overflow-hidden flex-1">
                                <div
                                  className="progress-bar bg-success rounded-[4px]"
                                  style={{ width: "40%", height: "5px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <span className="text-success">40%</span>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="avatar-list avatar-list-stacked">
                              <img
                                src="assets/images/contacts/pic666.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic555.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic666.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-success bg-success-light">
                              Completed
                            </span>
                          </td>
                          <td className="text-right text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <span className="text-body-color dark:text-white">
                              06 Sep 2021
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-[13px] font-normal py-2.5 pl-4 pr-0 whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox0102"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox0102"
                              ></label>
                            </div>
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap text-body-color">
                            Time Projects
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src="assets/images/contacts/pic2.jpg"
                                className="inline-block w-[1.875rem] min-w-[1.875rem] h-[1.875rem] rounded-full relative object-cover"
                                width="30px"
                                height="30px"
                                alt=""
                              />
                              <p className="ml-2 dark:text-white text-[13px]">
                                Lucas
                              </p>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="flex items-center">
                              <div className="progress bg-[#f6f6f6] dark:bg-[#1E1E1E] mr-[5px] h-[5px] overflow-hidden flex-1">
                                <div
                                  className="progress-bar bg-danger"
                                  style={{ width: "33%", height: "5px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <span className="text-primary dark:text-white">
                                33%
                              </span>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="avatar-list avatar-list-stacked">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic555.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic999.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <span className="bg-primary-light text-primary text-xs py-[5px] px-3 rounded font-medium leading-[1.5]">
                              Inprogress
                            </span>
                          </td>
                          <td className="text-right text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <span className="text-body-color dark:text-white">
                              06 Sep 2021
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-[13px] font-normal py-2.5 pl-4 pr-0 whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox110"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox110"
                              ></label>
                            </div>
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap text-body-color">
                            Fast Ball
                          </td>
                          <td className="text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block w-[1.875rem] min-w-[1.875rem] h-[1.875rem] rounded-full relative object-cover"
                                width="30px"
                                height="30px"
                                alt=""
                              />
                              <p className="ml-2 dark:text-white text-[13px]">
                                William Risher
                              </p>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="flex items-center">
                              <div className="progress bg-[#f6f6f6] dark:bg-[#1E1E1E] mr-[5px] h-[5px] overflow-hidden flex-1">
                                <div
                                  className="progress-bar bg-primary rounded-[4px]"
                                  style={{ width: "53%", height: "5px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <span className="text-primary">53%</span>
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <div className="avatar-list avatar-list-stacked">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic555.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                              <img
                                src="assets/images/contacts/pic999.jpg"
                                className="inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                                alt=""
                              />
                            </div>
                          </td>
                          <td className="text-[13px] py-2.5 pl-4 pr-0 font-normal">
                            <span className="bg-primary-light text-primary text-xs py-[5px] px-3 rounded font-medium leading-[1.5]">
                              Inprogress
                            </span>
                          </td>
                          <td className="text-right text-[13px] font-normal py-2.5 px-4 whitespace-nowrap">
                            <span className="text-body-color dark:text-white">
                              06 Sep 2021
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="2xl:w-1/4 md:w-1/2 w-full up-shd">
              <div className="card flex flex-col">
                <div className="card-header flex justify-between px-5 pt-6 relative z-[2] pb-1">
                  <h4 className="heading">Upcoming Schedules</h4>
                </div>
                <div className="card-body schedules-cal p-2">
                  <input
                    type="text"
                    className="form-control hidden"
                    id="datetimepicker1"
                  />
                  <div className="calendar-container"></div>
                  <div className="events">
                    <h6 className="text-sm uppercase border-t border-[#E6E6E6] dark:border-transparent text-primary px-5 py-[9px]">
                      events
                    </h6>
                    <div className="event-scroll overflow-x-hidden overflow-y-auto relative h-[140px] px-5">
                      <div className="event-media flex items-center justify-between py-2.5 border-b border-[#E6E6E6] dark:border-transparent">
                        <div className="flex items-center">
                          <div className="event-box bg-primary-light h-[55px] w-[55px] py-1 text-center rounded-md leading-[9px]">
                            <h5 className="text-xl font-semibold text-primary">
                              20
                            </h5>
                            <span className="text-body-color dark:text-white text-[13px]">
                              Mon
                            </span>
                          </div>
                          <div className="event-data ml-2">
                            <h5 className="mb-0">
                              <a>Development planning</a>
                            </h5>
                            <span className="text-body-color text-[13px]">
                              w3it Technologies
                            </span>
                          </div>
                        </div>
                        <span className="text-secondary dark:text-white text-sm">
                          12:05 PM
                        </span>
                      </div>
                      <div className="event-media flex items-center justify-between py-2.5 border-b border-[#E6E6E6] dark:border-transparent">
                        <div className="flex items-center">
                          <div className="event-box bg-primary-light h-[55px] w-[55px] py-1 text-center rounded-md leading-[9px]">
                            <h5 className="text-xl font-semibold text-primary">
                              20
                            </h5>
                            <span className="text-body-color dark:text-white text-[13px]">
                              Mon
                            </span>
                          </div>
                          <div className="event-data ml-2">
                            <h5 className="text-[15px]">
                              <a>Development planning</a>
                            </h5>
                            <span className="text-body-color text-[13px]">
                              w3it Technologies
                            </span>
                          </div>
                        </div>
                        <span className="text-secondary dark:text-white text-sm">
                          12:05 PM
                        </span>
                      </div>
                      <div className="event-media flex items-center justify-between py-2.5 border-b border-[#E6E6E6] dark:border-transparent">
                        <div className="flex items-center">
                          <div className="event-box bg-primary-light h-[55px] w-[55px] py-1 text-center rounded-md leading-[9px]">
                            <h5 className="text-xl font-semibold text-primary">
                              20
                            </h5>
                            <span className="text-body-color dark:text-white text-[13px]">
                              Mon
                            </span>
                          </div>
                          <div className="event-data ml-2">
                            <h5 className="text-[15px]">
                              <a>Development planning</a>
                            </h5>
                            <span className="text-body-color text-[13px]">
                              w3it Technologies
                            </span>
                          </div>
                        </div>
                        <span className="text-secondary dark:text-white text-sm">
                          12:05 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="2xl:w-1/4 md:w-1/2 up-shd">
              <div className="card flex flex-col">
                <div className="card-header flex justify-between px-5 pt-6 relative z-[2]">
                  <h4 className="heading">Projects Status</h4>
                  <select className="nice-select text-primary px-2.5 bg-transparent border-0 text-[13px] font-medium-normal outline-none relative focus:ring-0">
                    <option value="Today">Today</option>
                    <option value="Week">Week</option>
                    <option value="Month">Month</option>
                  </select>
                </div>
                <div className="card-body p-5">
                  <div
                    id="projectChart"
                    className="project-chart flex justify-center"
                  ></div>
                  <div className="project-date">
                    <div className="project-media flex items-center justify-between py-2.5">
                      <p className="text-secondary dark:text-body-color leading-[1.8]">
                        <svg
                          className="mr-2 inline-block"
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.5"
                            width="12"
                            height="12"
                            rx="3"
                            fill="var(--primary)"
                          />
                        </svg>
                        Completed Projects
                      </p>
                      <span className="text-body-color text-[13px]">
                        125 Projects
                      </span>
                    </div>
                    <div className="project-media flex items-center justify-between py-2.5">
                      <p className="text-secondary dark:text-body-color leading-[1.8]">
                        <svg
                          className="mr-2 inline-block"
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.5"
                            width="12"
                            height="12"
                            rx="3"
                            fill="#3AC977"
                          />
                        </svg>
                        Progress Projects
                      </p>
                      <span className="text-body-color text-[13px]">
                        125 Projects
                      </span>
                    </div>
                    <div className="project-media flex items-center justify-between py-2.5">
                      <p className="text-secondary dark:text-body-color leading-[1.8]">
                        <svg
                          className="mr-2 inline-block"
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.5"
                            width="12"
                            height="12"
                            rx="3"
                            fill="#FF5E5E"
                          />
                        </svg>
                        Cancelled
                      </p>
                      <span className="text-body-color text-[13px]">
                        125 Projects
                      </span>
                    </div>
                    <div className="project-media flex items-center justify-between py-2.5">
                      <p className="text-secondary dark:text-body-color leading-[1.8]">
                        <svg
                          className="mr-2 inline-block"
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.5"
                            width="12"
                            height="12"
                            rx="3"
                            fill="#FF9F00"
                          />
                        </svg>
                        Yet to Start
                      </p>
                      <span className="text-body-color text-[13px]">
                        125 Projects
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="2xl:w-3/4 w-full bst-seller">
              <div className="card flex flex-col">
                <div className="card-body">
                  <div className="overflow-x-auto active-projects style-1 ItemsCheckboxSec shorting ">
                    <div className="tbl-caption flex justify-between items-center flex-wrap p-5 relative z-[2]">
                      <h4 className="max-sm:mb-2.5">Employees</h4>
                      <div className="flex gap-3">
                        <a
                          className="py-[5px] px-3 text-[13px] rounded text-white bg-primary leading-[18px] inline-block border border-primary btn-sm duration-500 hover:bg-hover-primary offcanvas-toggle"
                          // data-dz-offcanvas="offcanvasExample2"
                        >
                          + Add Employee
                        </a>
                        <button
                          type="button"
                          className="btn btn-secondary py-[5px] px-3 text-[13px] rounded text-white bg-secondary leading-[18px] inline-block border border-secondary dz-modal-btn"
                          data-dz-modal="Employeemodal"
                        >
                          + Invite Employee
                        </button>
                      </div>
                    </div>
                    <table id="empoloyees-tbl" className="table">
                      <thead>
                        <tr>
                          <th className="text-[13px] py-2.5 pl-4 pr-0 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <div className="form-check custom-checkbox ms-0">
                              <input
                                type="checkbox"
                                className="form-check-input checkAll ml-0"
                                id="checkAll2"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="checkAll2"
                              ></label>
                            </div>
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                            Employee ID
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                            Employee Name
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                            Email Address
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                            Contact Number
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                            Gender
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                            Location
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-right">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox0100"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox0100"
                              ></label>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              1001
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm whitespace-nowrap">
                                  <a>Ricky Antony</a>
                                </h6>
                                <span className="text-body-color dark:text-white text-[13px]">
                                  Web Designer
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <a className="text-primary dark:text-white">
                              ra@gmail.com
                            </a>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              +12 123 456 7890
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Male
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              AZ
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-5 font-normal text-right whitespace-nowrap">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-success bg-success-light">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox1100"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox1100"
                              ></label>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              1018
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic2.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm whitespace-nowrap">
                                  <a>Ricky Antony</a>
                                </h6>
                                <span className="text-body-color dark:text-white text-[13px]">
                                  Web Designer
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <a className="text-primary dark:text-white">
                              abc@gmail.com
                            </a>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              +91 123 456 7890
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Male
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Delhi
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-5 font-normal text-right whitespace-nowrap">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-success bg-success-light">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox151"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox151"
                              ></label>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              1018
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic3.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm whitespace-nowrap">
                                  <a>Ricky M</a>
                                </h6>
                                <span className="text-body-color dark:text-white text-[13px]">
                                  Software Designer
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <a className="text-primary dark:text-white">
                              rm@gmail.com
                            </a>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              +55 123 456 7890
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Male
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              PA
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-5 font-normal text-right whitespace-nowrap">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-success bg-success-light">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox2100"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox2100"
                              ></label>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              1018
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm whitespace-nowrap">
                                  <a>Ricky Antony</a>
                                </h6>
                                <span className="text-body-color dark:text-white text-[13px]">
                                  Software Designer
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <a className="text-primary dark:text-white">
                              abc@gmail.com
                            </a>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              +91 123 456 7890
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Male
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Delhi
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-5 font-normal text-right whitespace-nowrap">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-success bg-success-light">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox3100"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox3100"
                              ></label>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              1018
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic2.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm whitespace-nowrap">
                                  <a>Honey Risher</a>
                                </h6>
                                <span className="text-body-color dark:text-white text-[13px]">
                                  Software Designer
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <a className="text-primary dark:text-white">
                              hr@gmail.com
                            </a>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              +22 123 456 7890
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Female
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              WA
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-5 font-normal text-right whitespace-nowrap">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-success bg-success-light">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox4100"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox4100"
                              ></label>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              1018
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic2.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm whitespace-nowrap">
                                  <a>Mony Antony</a>
                                </h6>
                                <span className="text-body-color dark:text-white text-[13px]">
                                  Web Designer
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <a className="text-primary dark:text-white">
                              ma@gmail.com
                            </a>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              +62 123 456 7890
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Female
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              WA
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-5 font-normal text-right whitespace-nowrap">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-success bg-success-light">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox2222"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox2222"
                              ></label>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              1018
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm whitespace-nowrap">
                                  <a>Ankites Risher</a>
                                </h6>
                                <span className="text-body-color dark:text-white text-[13px]">
                                  Web Designer
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <a className="text-primary dark:text-white">
                              ar@gmail.com
                            </a>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              +62 123 456 7890
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Female
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              AL
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-5 font-normal text-right whitespace-nowrap">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-success bg-success-light">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox1111"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox1111"
                              ></label>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              1018
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic2.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm whitespace-nowrap">
                                  <a>Elijah James</a>
                                </h6>
                                <span className="text-body-color dark:text-white text-[13px]">
                                  Software Developer
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <a className="text-primary dark:text-white">
                              ar@gmail.com
                            </a>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              +85 123 456 7890
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Female
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              AL
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-5 font-normal text-right whitespace-nowrap">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-success bg-success-light">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox1122"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox1122"
                              ></label>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              1018
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic3.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm whitespace-nowrap">
                                  <a>Elijah James</a>
                                </h6>
                                <span className="text-body-color dark:text-white text-[13px]">
                                  Software Developer
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <a className="text-primary dark:text-white">
                              ej@gmail.com
                            </a>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              +69 123 456 7890
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Male
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              AL
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-5 font-normal text-right whitespace-nowrap">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-success bg-success-light">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox5100"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox5100"
                              ></label>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              1018
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic3.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm whitespace-nowrap">
                                  <a>Tony Antony</a>
                                </h6>
                                <span className="text-body-color dark:text-white text-[13px]">
                                  Web Designer
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <a className="text-primary dark:text-white">
                              ta@gmail.com
                            </a>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              +78 123 456 7890
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Female
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              NYC
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-5 font-normal text-right whitespace-nowrap">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-success bg-success-light">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox0101"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox0101"
                              ></label>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              1001
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm whitespace-nowrap">
                                  <a>Ricky Antony</a>
                                </h6>
                                <span className="text-body-color dark:text-white text-[13px]">
                                  Web Designer
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <a className="text-primary dark:text-white">
                              abc@gmail.com
                            </a>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              +91 123 456 7890
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Male
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Delhi
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-5 font-normal text-right whitespace-nowrap">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-danger bg-danger-light">
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox102"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox102"
                              ></label>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              1001
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic3.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm whitespace-nowrap">
                                  <a>Ricky Antony</a>
                                </h6>
                                <span className="text-body-color dark:text-white text-[13px]">
                                  Web Designer
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <a className="text-primary dark:text-white">
                              abc@gmail.com
                            </a>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              +91 123 456 7890
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Male
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Delhi
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-5 font-normal text-right whitespace-nowrap">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-success bg-success-light">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox1055"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox1055"
                              ></label>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              1001
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm whitespace-nowrap">
                                  <a>Ricky Antony</a>
                                </h6>
                                <span className="text-body-color dark:text-white text-[13px]">
                                  Web Designer
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <a className="text-primary dark:text-white">
                              abc@gmail.com
                            </a>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              +255 123 456 7890
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Male
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              USA
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-5 font-normal text-right whitespace-nowrap">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-danger bg-danger-light">
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox103"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox103"
                              ></label>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              1001
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic3.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm whitespace-nowrap">
                                  <a>Ricky Antony</a>
                                </h6>
                                <span className="text-body-color dark:text-white text-[13px]">
                                  Web Designer
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <a className="text-primary dark:text-white">
                              abc@gmail.com
                            </a>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              +91 123 456 7890
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Male
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Delhi
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-5 font-normal text-right whitespace-nowrap">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-success bg-success-light">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox104"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox104"
                              ></label>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              1001
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic2.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm whitespace-nowrap">
                                  <a>Ricky Antony</a>
                                </h6>
                                <span className="text-body-color dark:text-white text-[13px]">
                                  Web Designer
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <a className="text-primary dark:text-white">
                              abc@gmail.com
                            </a>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              +91 123 456 7890
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Male
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              USA
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-5 font-normal text-right whitespace-nowrap">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-danger bg-danger-light">
                              Pending
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
