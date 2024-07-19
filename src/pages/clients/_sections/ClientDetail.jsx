const ClientDetail = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="xl:w-1/4">
          <div className="card h-auto">
            <div className="p-5">
              <div className="c-profile text-center">
                <img
                  src="/assets/images/user1.jpg"
                  className="rounded-full mb-2 inline-block"
                  alt=""
                />
                <h4 className="mb-2 text-lg">Thomas Fleming</h4>
              </div>
              <div className="c-details">
                <ul>
                  <li className="border-b border-[#E6E6E6] dark:border-[#444444] py-2.5">
                    <span className="text-sm text-body-color">Email</span>
                    <p className="text-black dark:text-white">
                      demo123@gmail.com
                    </p>
                  </li>
                  <li className="border-b border-[#E6E6E6] dark:border-[#444444] py-2.5">
                    <span className="text-sm text-body-color">Phone</span>
                    <p className="text-black dark:text-white">
                      +91 12345647890
                    </p>
                  </li>
                  <li className="border-b border-[#E6E6E6] dark:border-[#444444] py-2.5">
                    <span className="text-sm text-body-color">
                      Date of birth
                    </span>
                    <p className="text-black dark:text-white">13 June 1996</p>
                  </li>
                  <li className="border-b border-[#E6E6E6] dark:border-[#444444] py-2.5">
                    <span className="text-sm text-body-color">Position</span>
                    <p className="text-black dark:text-white">
                      Computer Engineer
                    </p>
                  </li>
                </ul>
              </div>
              <span className="mt-4 block text-body-color text-sm">Social</span>
              <ul className="c-social flex mt-[15px]">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    className="mr-[5px] rounded py-[5px] px-2.5 text-white bg-facebook"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://web.whatsapp.com/"
                    className="mr-[5px] rounded py-[5px] px-2.5 text-white bg-whatsapp"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/feed/"
                    className="mr-[5px] rounded py-[5px] px-2.5 text-white bg-linkedin"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.skype.com/en/get-skype/"
                    className="mr-[5px] rounded py-[5px] px-2.5 text-white bg-skype"
                  >
                    <i className="fa-brands fa-skype"></i>
                  </a>
                </li>
              </ul>
              <div className="flex mt-6 justify-end">
                <a
                  href="javascript:void(0)"
                  className="inline-block text-xs py-[5px] px-3 rounded font-medium leading-[1.5rem] text-danger bg-danger-light mr-2 duration-500 hover:bg-danger hover:text-white"
                >
                  <i className="fa-solid fa-trash mr-1"></i>Delete
                </a>
                <button
                  type="button"
                  className="btn btn-primary duration-500 hover:bg-hover-primary py-[5px] px-3 text-[13px] rounded text-white bg-primary leading-[18px] inline-block border border-primary ml-2 "
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal3"
                >
                  <i className="fa-solid fa-pen-to-square mr-1"></i>
                  <span>Edit </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-3/4">
          <h4 className="heading mb-2">Membership</h4>
          <div className="card h-auto">
            <div className="p-5 flex items-center justify-between flex-wrap">
              <div className="flex items-center c-busiess max-sm:mb-[10px]">
                <img
                  src="/assets/images/economics.png"
                  className="avatar inline-block relative object-cover h-[60px] w-[60px] mr-2.5 rounded-md"
                  alt=""
                />
                <div>
                  <h5 className="mb-0">
                    Business board pro
                    <span className="bg-danger text-[0.5rem] px-[0.3925rem] h-4 inline-block leading-[1.1rem] rounded text-white ml-1">
                      Active
                    </span>
                  </h5>
                  <span className="text-body-color sm:text-sm text-[13px]">
                    Billing monthly | Next payment on 15/02/2024for$590.40
                  </span>
                </div>
              </div>
              <div>
                <a
                  href="javascript:void(0)"
                  className="btn py-[5px] px-3 text-[13px] rounded text-white bg-danger leading-[18px] inline-block border border-danger mr-2"
                >
                  Cancel plan
                </a>
                <a
                  href="javascript:void(0)"
                  className="btn btn-primary duration-500 hover:bg-hover-primary py-[5px] px-3 text-[13px] rounded text-white bg-primary leading-[18px] inline-block border border-primary ml-2"
                >
                  Update plan
                </a>
              </div>
            </div>
          </div>
          <div className="card h-auto">
            <div className="tbl-caption flex justify-between items-center flex-wrap py-4 px-5 relative z-[2] border-b border-[#E6E6E6] dark:border-transparent">
              <h4 className="heading">Payment History</h4>
            </div>
            <div className="p-0">
              <div className="overflow-x-auto active-projects style-1">
                <table id="empoloyees-tbl" className="table">
                  <thead>
                    <tr>
                      <th className="text-[13px] py-2.5 pl-4 pr-0 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                        REFERENCE
                      </th>
                      <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                        PRODUCT
                      </th>
                      <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                        STATUS
                      </th>
                      <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                        DATE
                      </th>
                      <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-right">
                        AMOUNT
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                        <span className="text-body-color dark:text-white">
                          #552145252
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                        <span className="text-body-color dark:text-white">
                          Zoom video conferencing
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                        <span className="inline-block text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-danger bg-danger-light">
                          Pending
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                        <span className="text-body-color dark:text-white">
                          12 February 2022
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap text-right">
                        <span className="text-body-color dark:text-white">
                          $900
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                        <span className="text-body-color dark:text-white">
                          #5454421
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                        <span className="text-body-color dark:text-white">
                          Salesforce CRM
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                        <span className="inline-block text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-primary bg-primary-light">
                          Inprogress
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                        <span className="text-body-color dark:text-white">
                          13 March 2024
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap text-right">
                        <span className="text-body-color dark:text-white">
                          $500
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                        <span className="text-body-color dark:text-white">
                          #5857455
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                        <span className="text-body-color dark:text-white">
                          Slack collaboration platform
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                        <span className="inline-block text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-primary bg-primary-light">
                          Inprogress
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                        <span className="text-body-color dark:text-white">
                          24 January 2022
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap text-right">
                        <span className="text-body-color dark:text-white">
                          $800
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                        <span className="text-body-color dark:text-white">
                          #552145252
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                        <span className="text-body-color dark:text-white">
                          Google Chrome
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                        <span className="inline-block text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-danger bg-danger-light">
                          Pending
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                        <span className="text-body-color dark:text-white">
                          12 February 2022
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap text-right">
                        <span className="text-body-color dark:text-white">
                          $900
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                        <span className="text-body-color dark:text-white">
                          #5454421
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                        <span className="text-body-color dark:text-white">
                          Shopify eCommerce
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                        <span className="inline-block text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-success bg-success-light">
                          Completed
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                        <span className="text-body-color dark:text-white">
                          13 March 2024
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap text-right">
                        <span className="text-body-color dark:text-white">
                          $500
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                        <span className="text-body-color dark:text-white">
                          #5857455
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                        <span className="text-body-color dark:text-white">
                          Slack collaboration platform
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                        <span className="inline-block text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-primary bg-primary-light">
                          Inprogress
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                        <span className="text-body-color dark:text-white">
                          24 January 2022
                        </span>
                      </td>
                      <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap text-right">
                        <span className="text-body-color dark:text-white">
                          $800
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-3/4 col-xxl-8">
          <div className="card">
            <div className="card-header flex justify-between sm:p-5 sm:pt-6 py-5 px-4 items-center relative flex-wrap">
              <h4 className="heading">Payment Methods</h4>
            </div>
            <div className="p-5 pt-0">
              <div className="row">
                <div className="lg:w-1/3 w-full">
                  <img
                    src="/assets/images/credit.png"
                    alt=""
                    className="w-full"
                  />
                </div>
                <div className="lg:w-4/6 w-full">
                  <div className="row">
                    <div className="lg:w-1/2 w-full">
                      <div className="c-card-details">
                        <ul>
                          <li className="flex items-center py-1.5">
                            <h6 className="mr-1 mb-0">Name:</h6>
                            <span className="text-[13px] text-body-color">
                              Henry Saiplay
                            </span>
                          </li>
                          <li className="flex items-center py-1.5">
                            <h6 className="mr-1 mb-0">Number:</h6>
                            <span className="text-[13px] text-body-color">
                              1234 5678 9101 1213
                            </span>
                          </li>
                          <li className="flex items-center py-1.5">
                            <h6 className="mr-1 mb-0">Expires:</h6>
                            <span className="text-[13px] text-body-color">
                              11/2024
                            </span>
                          </li>
                          <li className="flex items-center py-1.5">
                            <h6 className="mr-1 mb-0">Type:</h6>
                            <span className="text-[13px] text-body-color">
                              Master Card
                            </span>
                          </li>
                          <li className="flex items-center py-1.5">
                            <h6 className="mr-1 mb-0">Issuer:</h6>
                            <span className="text-[13px] text-body-color">
                              IDBF
                            </span>
                          </li>
                          <li className="flex items-center py-1.5">
                            <h6 className="mb-0 mr-1">Id:</h6>
                            <span className="text-[13px] text-body-color">
                              1-85222gfgvv52
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                      <div className="c-card-details">
                        <ul>
                          <li className="flex items-center py-1.5">
                            <h6 className="mr-1 mb-0">Billing address:</h6>
                            <span className="text-[13px] text-body-color">
                              USA{" "}
                            </span>
                          </li>
                          <li className="flex items-center py-1.5">
                            <h6 className="mr-1 mb-0">Phone:</h6>
                            <span className="text-[13px] text-body-color">
                              +01 123 456 789 0
                            </span>
                          </li>
                          <li className="flex items-center py-1.5">
                            <h6 className="mr-1 mb-0">Email:</h6>
                            <span className="text-[13px] text-body-color">
                              demo@gmail.com
                            </span>
                          </li>
                          <li className="flex items-center py-1.5">
                            <h6 className="mr-1 mb-0">Origin:</h6>
                            <span className="text-[13px] text-body-color">
                              Uk
                            </span>
                          </li>
                          <li className="flex items-center py-1.5">
                            <h6 className="mr-1 mb-0">CVC check:</h6>
                            <span className="text-[13px] text-body-color">
                              Done
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-1/4 col-xxl-4">
          <div className="card">
            <div className="card-header flex justify-between sm:p-5 sm:pt-6 py-5 px-4 items-center relative flex-wrap">
              <h4 className="heading">Premium user</h4>
            </div>
            <div className="p-5 pt-0">
              <div className="flex items-center justify-between">
                <div className="py-[7px] sm:px-5 px-3 mr-1.5 rounded-md text-white bg-primary">
                  <p className="flex items-center text-white">
                    Earnings<i className="fa-solid fa-arrow-down ml-2"></i>
                  </p>
                  <span className="sm:text-sm text-xs">$50,585</span>
                </div>
                <div className="py-[7px] sm:px-5 px-3 mx-1.5 rounded-md text-white bg-success">
                  <p className="flex items-center text-white">
                    Project <i className="fa-solid fa-arrow-up ml-2"></i>
                  </p>
                  <span className="sm:text-sm text-xs">415</span>
                </div>
                <div className="py-[7px] sm:px-5 px-3 mx-1.5 rounded-md text-white bg-secondary">
                  <p className="flex items-center text-white">
                    Hours <i className="fa-solid fa-arrow-up ml-2"></i>
                  </p>
                  <span className="sm:text-sm text-xs">200</span>
                </div>
              </div>
              <ul className="c-primium">
                <li className="flex justify-between py-1.5">
                  <h6 className="mb-2">Account ID:</h6>
                  <span className="text-[13px] text-body-color">
                    #5-658A555c
                  </span>
                </li>
                <li className="flex justify-between py-1.5">
                  <h6 className="mb-2">Billing Email:</h6>
                  <span className="text-[13px] text-body-color">
                    demo@gmail.com
                  </span>
                </li>
                <li className="flex justify-between py-1.5">
                  <h6 className="mb-2">Billing Address:</h6>
                  <span className="text-[13px] text-body-color">
                    Po.123 USA
                  </span>
                </li>
                <li className="flex justify-between py-1.5">
                  <h6 className="mb-2">Language:</h6>
                  <span className="text-[13px] text-body-color">English</span>
                </li>
                <li className="flex justify-between py-1.5">
                  <h6 className="mb-2">Tax ID:</h6>
                  <span className="text-[13px] text-body-color">W3-52325</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetail;
