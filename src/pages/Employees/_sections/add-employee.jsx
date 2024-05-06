import { Icon } from "@iconify/react/dist/iconify.js";

const AddEmployee = () => {
  return (
    <>
      <div className=" bg-white m-5">
        <div className="container-fluid px-[15px] py-0">
          <div>
            <label>Profile Picture</label>
            <div className="dz-default dlab-message upload-img mb-4">
              <form
                action="#"
                className="dropzone border border-dashed border-[#DDDFE1] relative text-center py-[14px] min-h-[6.325rem] rounded-md"
              >
                <div className="fallback flex items-center justify-center flex-col">
                  <Icon
                    icon="ph:upload-simple"
                    className="text-[50px] text-[#888888] "
                  />
                  {/* <input name="file" type="file" accept=".jpg" multiple /> */}
                  <input
                    type="file"
                    className="text-sm text-stone-500
   file:mr-5 file:py-1 file:px-3 file:border-[1px]
   file:text-xs file:font-medium
   file:bg-stone-50 file:text-stone-700
   hover:file:cursor-pointer hover:file:bg-blue-50
   hover:file:text-blue-700 "
                  />
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
                <span className="show-pass eye absolute right-5 bottom-[10px] text-body-color cursor-pointer">
                  <i className="fa fa-eye-slash"></i>
                  <i className="fa fa-eye"></i>
                </span>
              </div>
              <div className="xl:w-1/2 mb-4 flex flex-col">
                <label className="form-label">
                  Designation<span className="text-danger">*</span>
                </label>
                <select className="style-1 py-1.5 px-3 bg-transparent text-[13px] font-normal outline-none relative focus:ring-0 border border-b-color text-[#a5a5a5] h-[2.813rem] leading-[1.813rem]">
                  <option data-display="Select">Please select</option>
                  <option value="html">Software Engineer</option>
                  <option value="css">Civil Engineer</option>
                  <option value="javascript">Web Doveloper</option>
                </select>
              </div>
              <div className="xl:w-1/2 mb-4 flex flex-col">
                <label className="form-label">
                  Department<span className="text-danger">*</span>
                </label>
                <select className=" style-1 py-1.5 px-3 bg-transparent text-[13px] font-normal outline-none relative focus:ring-0 border border-b-color text-[#a5a5a5] h-[2.813rem] leading-[1.813rem]">
                  <option data-display="Select">Please select</option>
                  <option value="html">Software</option>
                  <option value="css">Doit</option>
                  <option value="javascript">Designing</option>
                </select>
              </div>
              <div className="xl:w-1/2 mb-4 flex flex-col">
                <label className="form-label">
                  Country<span className="text-danger">*</span>
                </label>
                <select className=" style-1 py-1.5 px-3 bg-transparent text-[13px] font-normal outline-none relative focus:ring-0 border border-b-color text-[#a5a5a5] h-[2.813rem] leading-[1.813rem]">
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
              <div className="xl:w-1/2 mb-4 flex flex-col">
                <label className="form-label">
                  Gender<span className="text-danger">*</span>
                </label>
                <select className="style-1 py-1.5 px-3 bg-transparent text-[13px] font-normal outline-none relative focus:ring-0 border border-b-color text-[#a5a5a5] h-[2.813rem] leading-[1.813rem]">
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
            <div className="flex gap-5">
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
    </>
  );
};

export default AddEmployee;
