import React from "react";

const AddEmployee = () => {
  return (
    <>
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

export default AddEmployee;
