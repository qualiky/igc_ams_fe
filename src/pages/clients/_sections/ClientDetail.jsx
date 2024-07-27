const ClientDetail = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="xl:w-1/4">
          <div className="card h-auto">
            <div className="p-5">
              <div className="c-profile text-center">
                <img
                  src="https://admin.pirus.app/uploads/ace_73f9089497.jpeg"
                  className="rounded-full mb-2 inline-block"
                  alt=""
                />
                <h4 className="mb-2 text-lg">Ujjwol Shakhya</h4>
              </div>
              <div className="c-details">
                <ul>
                  <li className="border-b border-[#E6E6E6] dark:border-[#444444] py-2.5">
                    <span className="text-sm text-body-color">Email</span>
                    <p className="text-black dark:text-white">
                      ujjwal@ace.edu.np
                    </p>
                  </li>
                  <li className="border-b border-[#E6E6E6] dark:border-[#444444] py-2.5">
                    <span className="text-sm text-body-color">Phone</span>
                    <p className="text-black dark:text-white">9871662182</p>
                  </li>
                  <li className="border-b border-[#E6E6E6] dark:border-[#444444] py-2.5">
                    <span className="text-sm text-body-color">
                      Date of birth
                    </span>
                    <p className="text-black dark:text-white">13 June 1996</p>
                  </li>
                  <li className="border-b border-[#E6E6E6] dark:border-[#444444] py-2.5">
                    <span className="text-sm text-body-color">Position</span>
                    <p className="text-black dark:text-white">CEO</p>
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
            </div>
          </div>
        </div>
        <div className="xl:w-3/4">
          <div className="card h-auto">
            <div className="tbl-caption  flex justify-between items-center flex-wrap py-4 px-5 relative z-[2] border-b border-[#E6E6E6] dark:border-transparent">
              <h4 className="heading">Payment History</h4>
            </div>
            <div className="p-0">
              <div className="overflow-x-auto active-projects style-1">
                <table id="empoloyees-tbl" className="table w-full">
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
      </div>
    </div>
  );
};

export default ClientDetail;
