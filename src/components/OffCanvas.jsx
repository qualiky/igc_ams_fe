import React from "react";

const OffCanvas = () => {
  return (
    <>
      <div
        className="fixed top-0 right-0 flex flex-col xl:w-[800px] md:w-[500px] w-[350px] h-[100vh] z-[1045] bg-white dark:bg-[#1E1E1E] text-body-color duration-500 ease-in-out offcanvas is-closed"
        id="offcanvasExample2"
      >
        <div className="ml-4 flex items-center justify-between p-4">
          <h5 className="modal-title" id="#gridSystemModal">
            Add Employee
          </h5>
          <button
            type="button"
            className="offcanvas-close h-6 w-6 box-content bg-danger-light rounded-md text-lg mr-4 p-2 opacity-50 hover:opacity-100 text-red"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="p-4 overflow-y-auto overflow-x-hidden dz-scroll">
          <div className="container-fluid px-[15px] py-0">
            <div>
              <label>Profile Picture</label>
              <div className="dz-default dlab-message upload-img mb-4">
                <form
                  action="#"
                  className="dropzone border border-dashed border-[#DDDFE1] relative text-center py-[14px] min-h-[6.325rem] rounded-md"
                >
                  <svg
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.1666 26.6667L20.4999 20L13.8333 26.6667"
                      stroke="#DADADA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.5 20V35"
                      stroke="#DADADA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M34.4833 30.6501C36.1088 29.7638 37.393 28.3615 38.1331 26.6644C38.8731 24.9673 39.027 23.0721 38.5703 21.2779C38.1136 19.4836 37.0724 17.8926 35.6111 16.7558C34.1497 15.619 32.3514 15.0013 30.4999 15.0001H28.3999C27.8955 13.0488 26.9552 11.2373 25.6498 9.70171C24.3445 8.16614 22.708 6.94647 20.8634 6.1344C19.0189 5.32233 17.0142 4.93899 15.0001 5.01319C12.9861 5.0874 11.015 5.61722 9.23523 6.56283C7.45541 7.50844 5.91312 8.84523 4.7243 10.4727C3.53549 12.1002 2.73108 13.9759 2.37157 15.959C2.01205 17.9421 2.10678 19.9809 2.64862 21.9222C3.19047 23.8634 4.16534 25.6565 5.49994 27.1667"
                      stroke="#DADADA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M27.1666 26.6667L20.4999 20L13.8333 26.6667"
                      stroke="#DADADA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="fallback">
                    <input name="file" type="file" multiple />
                  </div>
                </form>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="xl:w-1/2 mb-4">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Employee ID <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control relative text-[13px] text-body-color h-[2.813rem] border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full"
                    id="exampleFormControlInput1"
                    placeholder=""
                  />
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label
                    htmlFor="exampleFormControlInput2"
                    className="form-label"
                  >
                    Employee Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control relative text-[13px] text-body-color h-[2.813rem] border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full"
                    id="exampleFormControlInput2"
                    placeholder=""
                  />
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label
                    htmlFor="exampleFormControlInput3"
                    className="form-label"
                  >
                    Employee Email<span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control relative text-[13px] text-body-color h-[2.813rem] border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full"
                    id="exampleFormControlInput3"
                    placeholder=""
                  />
                </div>
                <div className="xl:w-1/2 mb-4 relative">
                  <label className="text-dark">Password</label>
                  <input
                    type="password"
                    id="dz-password"
                    className="form-control relative text-[13px] h-[2.813rem] border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full text-body-color"
                    value="123456"
                  />
                  <span className="show-pass eye absolute right-6 bottom-[10px] text-body-color cursor-pointer">
                    <i className="fa fa-eye-slash"></i>
                    <i className="fa fa-eye"></i>
                  </span>
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label className="form-label">
                    Designation<span className="text-danger">*</span>
                  </label>
                  <select className="nice-select style-1 py-1.5 px-3 bg-transparent text-[13px] font-normal outline-none relative focus:ring-0 border border-b-color text-[#a5a5a5] h-[2.813rem] leading-[1.813rem]">
                    <option data-display="Select">Please select</option>
                    <option value="html">Software Engineer</option>
                    <option value="css">Civil Engineer</option>
                    <option value="javascript">Web Doveloper</option>
                  </select>
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label className="form-label">
                    Department<span className="text-danger">*</span>
                  </label>
                  <select
                    defaultValue="html"
                    className="nice-select style-1 py-1.5 px-3 bg-transparent text-[13px] font-normal outline-none relative focus:ring-0 border border-b-color text-[#a5a5a5] h-[2.813rem] leading-[1.813rem]"
                  >
                    <option data-display="Select">Please select</option>
                    <option value="html">Software</option>
                    <option value="css">Doit</option>
                    <option value="javascript">Designing</option>
                  </select>
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label className="form-label">
                    Country<span className="text-danger">*</span>
                  </label>
                  <select className="nice-select style-1 py-1.5 px-3 bg-transparent text-[13px] font-normal outline-none relative focus:ring-0 border border-b-color text-[#a5a5a5] h-[2.813rem] leading-[1.813rem]">
                    <option data-display="Select">Please select</option>
                    <option value="html">Ind</option>
                    <option value="css">USA</option>
                    <option value="javascript">UK</option>
                  </select>
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label
                    htmlFor="exampleFormControlInput88"
                    className="form-label"
                  >
                    Mobile<span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control relative text-[13px] text-body-color h-[2.813rem] border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full"
                    id="exampleFormControlInput88"
                    placeholder=""
                  />
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label className="form-label">
                    Gender<span className="text-danger">*</span>
                  </label>
                  <select className="nice-select style-1 py-1.5 px-3 bg-transparent text-[13px] font-normal outline-none relative focus:ring-0 border border-b-color text-[#a5a5a5] h-[2.813rem] leading-[1.813rem]">
                    <option data-display="Select">Please select</option>
                    <option value="html">Male</option>
                    <option value="css">Female</option>
                    <option value="javascript">Other</option>
                  </select>
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label
                    htmlFor="exampleFormControlInput99"
                    className="form-label"
                  >
                    Joining Date<span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    className="form-control relative text-[13px] text-body-color h-[2.813rem] border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full"
                    id="exampleFormControlInput99"
                  />
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label
                    htmlFor="exampleFormControlInput8"
                    className="form-label"
                  >
                    Date of Birth<span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    className="form-control relative text-[13px] text-body-color h-[2.813rem] border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full"
                    id="exampleFormControlInput8"
                  />
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label
                    htmlFor="exampleFormControlInput10"
                    className="form-label"
                  >
                    Reporting To<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control relative text-[13px] text-body-color h-[2.813rem] border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full"
                    id="exampleFormControlInput10"
                    placeholder=""
                  />
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label className="form-label">
                    Language Select<span className="text-danger">*</span>
                  </label>
                  <select className="nice-select style-1 py-1.5 px-3 bg-transparent text-[13px] font-normal outline-none relative focus:ring-0 border border-b-color text-[#a5a5a5] h-[2.813rem] leading-[1.813rem]">
                    <option data-display="Select">Please select</option>
                    <option value="html">English</option>
                    <option value="css">Hindi</option>
                    <option value="javascript">Canada</option>
                  </select>
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label className="form-label">
                    User Role<span className="text-danger">*</span>
                  </label>
                  <select className="nice-select style-1 py-1.5 px-3 bg-transparent text-[13px] font-normal outline-none relative focus:ring-0 border border-b-color text-[#a5a5a5] h-[2.813rem] leading-[1.813rem]">
                    <option data-display="Select">Please select</option>
                    <option value="html">Parmanent</option>
                    <option value="css">Parttime</option>
                    <option value="javascript">Per Hours</option>
                  </select>
                </div>
                <div className="w-full mb-3">
                  <label className="form-label">
                    Address<span className="text-danger">*</span>
                  </label>
                  <textarea
                    rows="3"
                    className="form-control relative text-[13px] h-auto min-h-auto border border-b-color block rounded-md p-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full resize-y"
                  ></textarea>
                </div>
                <div className="w-full mb-3">
                  <label className="form-label">
                    About<span className="text-danger">*</span>
                  </label>
                  <textarea
                    rows="3"
                    className="form-control relative text-[13px] h-auto min-h-auto border border-b-color block rounded-md p-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full resize-y"
                  ></textarea>
                </div>
              </div>
              <div>
                <button className="btn xl:py-[0.719rem] py-2.5 xl:px-[1.563rem] px-4 duration-300 xl:text-[15px] text-[13px] font-medium rounded text-danger bg-danger-light leading-5 inline-block border border-danger-light btn-danger light hover:text-white hover:bg-danger offcanvas-close">
                  Cancel
                </button>
                <button className="btn btn-primary xl:py-[0.719rem] py-2.5 xl:px-[1.563rem] px-4 duration-300 xl:text-[15px] text-[13px] font-medium rounded text-white bg-primary leading-5 inline-block border border-primary hover:bg-hover-primary offcanvas-close">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="fixed top-0 right-0 flex flex-col xl:w-[800px] md:w-[500px] w-[350px] h-[100vh] z-[1045] bg-white dark:bg-[#1E1E1E] text-body-color duration-500 ease-in-out offcanvas is-closed"
        id="offcanvasExample1"
      >
        <div className="ml-4 flex items-center justify-between p-4">
          <h5 className="modal-title" id="#gridSystemModal1">
            Add New Task
          </h5>
          <button
            type="button"
            className="offcanvas-close h-6 w-6 box-content bg-danger-light rounded-md text-lg mr-4 p-2 opacity-50 hover:opacity-100 text-red"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="p-4 overflow-y-auto overflow-x-hidden dz-scroll">
          <div className="container-fluid px-[15px] py-0">
            <div>
              <div className="row">
                <div className="xl:w-1/2 mb-4">
                  <label
                    htmlFor="exampleFormControlInputfirst"
                    className="form-label"
                  >
                    Title<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control relative text-[13px] text-body-color h-[2.813rem] border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full"
                    id="exampleFormControlInputfirst"
                    placeholder="Title"
                  />
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label className="form-label">
                    Project<span className="text-danger">*</span>
                  </label>
                  <select className="nice-select style-1 py-1.5 px-3 bg-transparent text-[13px] font-normal outline-none relative focus:ring-0 border border-b-color text-[#a5a5a5] h-[2.813rem] leading-[1.813rem]">
                    <option data-display="Select">Project</option>
                    <option value="html">Salesmate</option>
                    <option value="css">ActiveCampaign</option>
                    <option value="javascript">Insightly</option>
                  </select>
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label
                    htmlFor="exampleFormControlInputthree"
                    className="form-label"
                  >
                    Start Date<span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    className="form-control relative text-[13px] text-body-color h-[2.813rem] border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full"
                    id="exampleFormControlInputthree"
                  />
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label
                    htmlFor="exampleFormControlInputfour"
                    className="form-label"
                  >
                    End Date<span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    className="form-control relative text-[13px] text-body-color h-[2.813rem] border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full"
                    id="exampleFormControlInputfour"
                  />
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label className="form-label">
                    Estimated Hour<span className="text-danger">*</span>
                  </label>
                  <div className="flex items-stretch flex-wrap relative w-full">
                    <input
                      type="time"
                      className="w-full relative bg-transparent text-[13px] h-[2.813rem] border border-b-color text-body-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none"
                      value="09:30"
                    />
                  </div>
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label className="form-label">
                    Status<span className="text-danger">*</span>
                  </label>
                  <select className="nice-select style-1 py-1.5 px-3 bg-transparent text-[13px] font-normal outline-none relative focus:ring-0 border border-b-color text-[#a5a5a5] h-[2.813rem] leading-[1.813rem]">
                    <option data-display="Select">Status</option>
                    <option value="html">In Progess</option>
                    <option value="css">Pending</option>
                    <option value="javascript">Completed</option>
                  </select>
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label className="form-label">
                    priority<span className="text-danger">*</span>
                  </label>
                  <select className="nice-select style-1 py-1.5 px-3 bg-transparent text-[13px] font-normal outline-none relative focus:ring-0 border border-b-color text-[#a5a5a5] h-[2.813rem] leading-[1.813rem]">
                    <option data-display="Select">priority</option>
                    <option value="html">Hight</option>
                    <option value="css">Medium</option>
                    <option value="javascript">Low</option>
                  </select>
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label className="form-label">
                    Category<span className="text-danger">*</span>
                  </label>
                  <select className="nice-select style-1 py-1.5 px-3 bg-transparent text-[13px] font-normal outline-none relative focus:ring-0 border border-b-color text-[#a5a5a5] h-[2.813rem] leading-[1.813rem]">
                    <option data-display="Select">Category</option>
                    <option value="html">Designing</option>
                    <option value="css">Development</option>
                    <option value="javascript">react developer</option>
                  </select>
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label className="form-label">
                    Permission<span className="text-danger">*</span>
                  </label>
                  <select className="nice-select style-1 py-1.5 px-3 bg-transparent text-[13px] font-normal outline-none relative focus:ring-0 border border-b-color text-[#a5a5a5] h-[2.813rem] leading-[1.813rem]">
                    <option data-display="Select">Permission</option>
                    <option value="html">Public</option>
                    <option value="css">Private</option>
                  </select>
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label className="form-label">
                    Deadline add<span className="text-danger">*</span>
                  </label>
                  <select className="nice-select style-1 py-1.5 px-3 bg-transparent text-[13px] font-normal outline-none relative focus:ring-0 border border-b-color text-[#a5a5a5] h-[2.813rem] leading-[1.813rem]">
                    <option data-display="Select">Deadline</option>
                    <option value="html">Yes</option>
                    <option value="css">No</option>
                  </select>
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label className="form-label">
                    Assigned to<span className="text-danger">*</span>
                  </label>
                  <select className="nice-select style-1 py-1.5 px-3 bg-transparent text-[13px] font-normal outline-none relative focus:ring-0 border border-b-color text-[#a5a5a5] h-[2.813rem] leading-[1.813rem]">
                    <option data-display="Select">Assigned</option>
                    <option value="html">Bernard</option>
                    <option value="css">Sergey Brin</option>
                    <option value="javascript"> Larry Ellison</option>
                  </select>
                </div>
                <div className="xl:w-1/2 mb-4">
                  <label className="form-label">
                    Responsible Person<span className="text-danger">*</span>
                  </label>
                  <input
                    name="tagify"
                    className="form-control py-0 ps-0 h-auto"
                    value="James, Harry"
                  />
                </div>
                <div className="w-full mb-3">
                  <label className="form-label">
                    Description<span className="text-danger">*</span>
                  </label>
                  <textarea
                    rows="3"
                    className="form-control relative text-[13px] h-auto min-h-auto border border-b-color block rounded-md p-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full resize-y"
                  ></textarea>
                </div>
                <div className="w-full mb-3">
                  <label className="form-label">
                    Summary<span className="text-danger">*</span>
                  </label>
                  <textarea
                    rows="3"
                    className="form-control relative text-[13px] h-auto min-h-auto border border-b-color block rounded-md p-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full resize-y"
                  ></textarea>
                </div>
              </div>
              <div>
                <button className="btn xl:py-[0.719rem] py-2.5 xl:px-[1.563rem] px-4 duration-300 xl:text-[15px] text-[13px] font-medium rounded text-danger bg-danger-light leading-5 inline-block border border-danger-light btn-danger light hover:text-white hover:bg-danger offcanvas-close">
                  Cancel
                </button>
                <button className="btn btn-primary xl:py-[0.719rem] py-2.5 xl:px-[1.563rem] px-4 duration-300 xl:text-[15px] text-[13px] font-medium rounded text-white bg-primary leading-5 inline-block border border-primary hover:bg-hover-primary offcanvas-close">
                  Help Desk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade fixed top-0 right-0 overflow-y-auto overflow-x-hidden dz-scroll w-full h-full z-[1055] translate-y-[-50px] dz-modal-box model-close"
        id="Employeemodal"
      >
        <div className="modal-dialog modal-dialog-center max-w-[500px] mx-auto my-[1.75rem] w-auto relative pointer-events-none">
          <div className="modal-content mx-[10px] flex flex-col relative rounded-md bg-white dark:bg-[#242424] w-full pointer-events-auto">
            <div className="modal-header flex justify-between items-center flex-wrap py-4 px-[1.875rem] relative z-[2] border-b border-b-color">
              <h1 className="modal-title text-base" id="exampleModalLabel1">
                Invite Employee
              </h1>
              <button type="button" className="btn-close p-4"></button>
            </div>
            <div className="modal-body relative p-[1.875rem]">
              <div className="row">
                <div className="w-full">
                  <label className="form-label text-[#7a7676] dark:text-white">
                    Email ID<span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control relative text-[13px] text-body-color h-[2.813rem] border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full"
                    placeholder="hello@gmail.com"
                  />
                  <label className="form-label text-[#7a7676] dark:text-white mt-3">
                    Employment date<span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control relative text-[13px] text-body-color h-[2.813rem] border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full"
                    type="date"
                  />
                  <div className="row">
                    <div className="xl:w-1/2">
                      <label className="form-label text-[#7a7676] dark:text-white mt-3">
                        First Name<span className="text-danger">*</span>
                      </label>
                      <div className="flex items-stretch flex-wrap relative w-full">
                        <input
                          type="text"
                          className="form-control relative text-[13px] text-body-color h-[2.813rem] border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="xl:w-1/2">
                      <label className="form-label text-[#7a7676] dark:text-white mt-3">
                        Last Name<span className="text-danger">*</span>
                      </label>
                      <div className="flex items-stretch flex-wrap relative w-full">
                        <input
                          type="text"
                          className="form-control relative text-[13px] text-body-color h-[2.813rem] border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full"
                          placeholder="Surname"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 invite">
                    <label className="form-label text-[#7a7676] dark:text-white">
                      Send invitation email
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control relative text-[13px] text-body-color h-[2.813rem] border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full"
                      placeholder="+ invite"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer flex items-center justify-end flex-wrap py-4 px-[1.875rem] border-t border-b-color">
              <button
                type="button"
                className="close-btn btn xl:py-[0.719rem] py-2.5 xl:px-[1.563rem] px-4 m-1 duration-300 xl:text-[15px] text-[13px] font-medium rounded text-danger bg-danger-light leading-5 inline-block border border-danger-light btn-danger light hover:text-white hover:bg-danger"
              >
                Close
              </button>
              <button
                type="button"
                className="save-btn btn btn-primary xl:py-[0.719rem] py-2.5 xl:px-[1.563rem] px-4 m-1 duration-300 xl:text-[15px] text-[13px] font-medium rounded text-white bg-primary leading-5 inline-block border border-primary hover:bg-hover-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffCanvas;
