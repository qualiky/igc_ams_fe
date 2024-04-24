import React from "react";

const Chatbox = () => {
  return (
    <>
      <div className="chatbox max-sm:w-[17.5rem] w-[21.25rem] h-[100vh] bg-white dark:bg-[#242424] z-[999] duration-500 fixed top-0 right-[-31.25rem] shadow-[0rem_0rem_1.875rem_0rem_rgba(82,63,105,0.15)]">
        <div className="chatbox-close"></div>
        <div className="dz-tab-area">
          <ul className="nav nav-tabs flex justify-between flex-wrap bg-primary-light p-4 pb-0">
            <li className="nav-item">
              <a
                className="nav-link px-4 py-2 text-primary uppercase opacity-70 border-b-[0.1875rem] border-transparent block duration-500 font-semibold text-sm hover:opacity-100 tab-btn"
                data-tab="notes-tab"
              >
                Notes
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link px-4 py-2 text-primary uppercase opacity-70 border-b-[0.1875rem] border-transparent block duration-500 font-semibold text-sm hover:opacity-100 tab-btn"
                data-tab="alerts-tab"
              >
                Alerts
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link px-4 py-2 text-primary uppercase opacity-70 border-b-[0.1875rem] border-transparent block duration-500 font-semibold text-sm hover:opacity-100 active tab-btn"
                data-tab="chat-tab"
              >
                Chat
              </a>
            </li>
          </ul>
          <div className="tab-content-area">
            <div className="tab-content active show" id="chat-tab">
              <div className="card sm:mb-4 mb-0 contacts_card dz-chat-user-box">
                <div className="card-header chat-list-header text-center flex justify-between py-[0.9375rem] px-[1.25rem] items-center border-b border-[#E6E6E6] relative dark:border-[#444444]">
                  <a className="w-[1.875rem] h-[1.875rem] bg-primary-light rounded-md flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect
                          fill="#000000"
                          x="4"
                          y="11"
                          width="16"
                          height="2"
                          rx="1"
                        />
                        <rect
                          fill="#000000"
                          opacity="1.0"
                          transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                          x="4"
                          y="11"
                          width="16"
                          height="2"
                          rx="1"
                        />
                      </g>
                    </svg>
                  </a>
                  <div>
                    <h6 className="mb-1 text-[0.9375rem]">Chat List</h6>
                    <p className="mb-0 text-xs text-muted leading-[1.2]">
                      Show All
                    </p>
                  </div>
                  <a className="w-[1.875rem] h-[1.875rem] bg-primary-light rounded-md flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect x="0" y="0" width="24" height="24" />
                        <circle fill="#000000" cx="5" cy="12" r="2" />
                        <circle fill="#000000" cx="12" cy="12" r="2" />
                        <circle fill="#000000" cx="19" cy="12" r="2" />
                      </g>
                    </svg>
                  </a>
                </div>
                <div
                  className="card-body contacts_body p-0 dz-scroll overflow-y-scroll overflow-x-hidden relative"
                  id="DZ_W_Contacts_Body"
                >
                  <ul className="contacts">
                    <li className="name-first-letter py-1 px-4 bg-primary-lighter sticky z-[1] top-0 font-semibold border-b border-[#eee] dark:border-[#444444] cursor-pointer">
                      A
                    </li>
                    <li className="dz-chat-user border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="img_cont flex items-center justify-center w-10 h-10 bg-[#eee] rounded-full text-[13px] text-center font-semibold self-start mr-2.5 relative">
                          <img
                            src="assets/images/avatar/1.jpg"
                            className="rounded-full w-full"
                            alt=""
                          />
                          <span className="online_icon absolute w-3 h-3 rounded-full right-[-0.0625rem] bottom-0 border-2 border-white dark:border-[#444444]"></span>
                        </div>
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] font-medium leading-[1.2]">
                            Archie Parker
                          </span>
                          <p className="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">
                            Kalid is online
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="dz-chat-user border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="img_cont flex items-center justify-center w-10 h-10 bg-[#eee] rounded-full text-[13px] text-center font-semibold self-start mr-2.5 relative">
                          <img
                            src="assets/images/avatar/2.jpg"
                            className="rounded-full w-full"
                            alt=""
                          />
                          <span className="online_icon offline absolute w-3 h-3 rounded-full right-[-0.0625rem] bottom-0 border-2 border-white dark:border-[#444444]"></span>
                        </div>
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] font-medium leading-[1.2]">
                            Alfie Mason
                          </span>
                          <p className="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">
                            Taherah left 7 mins ago
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="dz-chat-user border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="img_cont flex items-center justify-center w-10 h-10 bg-[#eee] rounded-full text-[13px] text-center font-semibold self-start mr-2.5 relative">
                          <img
                            src="assets/images/avatar/3.jpg"
                            className="rounded-full w-full"
                            alt=""
                          />
                          <span className="online_icon absolute w-3 h-3 rounded-full right-[-0.0625rem] bottom-0 border-2 border-white dark:border-[#444444]"></span>
                        </div>
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] font-medium leading-[1.2]">
                            AharlieKane
                          </span>
                          <p className="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">
                            Sami is online
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="dz-chat-user border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="img_cont flex items-center justify-center w-10 h-10 bg-[#eee] rounded-full text-[13px] text-center font-semibold self-start mr-2.5 relative">
                          <img
                            src="assets/images/avatar/4.jpg"
                            className="rounded-full w-full"
                            alt=""
                          />
                          <span className="online_icon offline absolute w-3 h-3 rounded-full right-[-0.0625rem] bottom-0 border-2 border-white dark:border-[#444444]"></span>
                        </div>
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] font-medium leading-[1.2]">
                            Athan Jacoby
                          </span>
                          <p className="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">
                            Nargis left 30 mins ago
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="name-first-letter py-1 px-4 bg-primary-lighter sticky z-[1] top-0 font-semibold border-b border-[#eee] dark:border-[#444444] cursor-pointer">
                      B
                    </li>
                    <li className="dz-chat-user border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="img_cont flex items-center justify-center w-10 h-10 bg-[#eee] rounded-full text-[13px] text-center font-semibold self-start mr-2.5 relative">
                          <img
                            src="assets/images/avatar/5.jpg"
                            className="rounded-full w-full"
                            alt=""
                          />
                          <span className="online_icon offline absolute w-3 h-3 rounded-full right-[-0.0625rem] bottom-0 border-2 border-white dark:border-[#444444]"></span>
                        </div>
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] font-medium leading-[1.2]">
                            Bashid Samim
                          </span>
                          <p className="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">
                            Rashid left 50 mins ago
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="dz-chat-user border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="img_cont flex items-center justify-center w-10 h-10 bg-[#eee] rounded-full text-[13px] text-center font-semibold self-start mr-2.5 relative">
                          <img
                            src="assets/images/avatar/1.jpg"
                            className="rounded-full w-full"
                            alt=""
                          />
                          <span className="online_icon offline absolute w-3 h-3 rounded-full right-[-0.0625rem] bottom-0 border-2 border-white dark:border-[#444444]"></span>
                        </div>
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] font-medium leading-[1.2]">
                            Breddie Ronan
                          </span>
                          <p className="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">
                            Kalid is online
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="dz-chat-user border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="img_cont flex items-center justify-center w-10 h-10 bg-[#eee] rounded-full text-[13px] text-center font-semibold self-start mr-2.5 relative">
                          <img
                            src="assets/images/avatar/2.jpg"
                            className="rounded-full w-full"
                            alt=""
                          />
                          <span className="online_icon offline absolute w-3 h-3 rounded-full right-[-0.0625rem] bottom-0 border-2 border-white dark:border-[#444444]"></span>
                        </div>
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] font-medium leading-[1.2]">
                            Ceorge Carson
                          </span>
                          <p className="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">
                            Taherah left 7 mins ago
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="name-first-letter py-1 px-4 bg-primary-lighter sticky z-[1] top-0 font-semibold border-b border-[#eee] dark:border-[#444444] cursor-pointer">
                      D
                    </li>
                    <li className="dz-chat-user border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="img_cont flex items-center justify-center w-10 h-10 bg-[#eee] rounded-full text-[13px] text-center font-semibold self-start mr-2.5 relative">
                          <img
                            src="assets/images/avatar/3.jpg"
                            className="rounded-full w-full"
                            alt=""
                          />
                          <span className="online_icon absolute w-3 h-3 rounded-full right-[-0.0625rem] bottom-0 border-2 border-white dark:border-[#444444]"></span>
                        </div>
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] font-medium leading-[1.2]">
                            Darry Parker
                          </span>
                          <p className="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">
                            Sami is online
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="dz-chat-user border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="img_cont flex items-center justify-center w-10 h-10 bg-[#eee] rounded-full text-[13px] text-center font-semibold self-start mr-2.5 relative">
                          <img
                            src="assets/images/avatar/4.jpg"
                            className="rounded-full w-full"
                            alt=""
                          />
                          <span className="online_icon offline absolute w-3 h-3 rounded-full right-[-0.0625rem] bottom-0 border-2 border-white dark:border-[#444444]"></span>
                        </div>
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] font-medium leading-[1.2]">
                            Denry Hunter
                          </span>
                          <p className="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">
                            Nargis left 30 mins ago
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="name-first-letter py-1 px-4 bg-primary-lighter sticky z-[1] top-0 font-semibold border-b border-[#eee] dark:border-[#444444] cursor-pointer">
                      J
                    </li>
                    <li className="dz-chat-user border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="img_cont flex items-center justify-center w-10 h-10 bg-[#eee] rounded-full text-[13px] text-center font-semibold self-start mr-2.5 relative">
                          <img
                            src="assets/images/avatar/5.jpg"
                            className="rounded-full w-full"
                            alt=""
                          />
                          <span className="online_icon offline absolute w-3 h-3 rounded-full right-[-0.0625rem] bottom-0 border-2 border-white dark:border-[#444444]"></span>
                        </div>
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] font-medium leading-[1.2]">
                            Jack Ronan
                          </span>
                          <p className="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">
                            Rashid left 50 mins ago
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="dz-chat-user border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="img_cont flex items-center justify-center w-10 h-10 bg-[#eee] rounded-full text-[13px] text-center font-semibold self-start mr-2.5 relative">
                          <img
                            src="assets/images/avatar/1.jpg"
                            className="rounded-full w-full"
                            alt=""
                          />
                          <span className="online_icon absolute w-3 h-3 rounded-full right-[-0.0625rem] bottom-0 border-2 border-white dark:border-[#444444]"></span>
                        </div>
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] font-medium leading-[1.2]">
                            Jacob Tucker
                          </span>
                          <p className="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">
                            Kalid is online
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="dz-chat-user border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="img_cont flex items-center justify-center w-10 h-10 bg-[#eee] rounded-full text-[13px] text-center font-semibold self-start mr-2.5 relative">
                          <img
                            src="assets/images/avatar/2.jpg"
                            className="rounded-full w-full"
                            alt=""
                          />
                          <span className="online_icon offline absolute w-3 h-3 rounded-full right-[-0.0625rem] bottom-0 border-2 border-white dark:border-[#444444]"></span>
                        </div>
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] font-medium leading-[1.2]">
                            James Logan
                          </span>
                          <p className="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">
                            Taherah left 7 mins ago
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="dz-chat-user border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="img_cont flex items-center justify-center w-10 h-10 bg-[#eee] rounded-full text-[13px] text-center font-semibold self-start mr-2.5 relative">
                          <img
                            src="assets/images/avatar/3.jpg"
                            className="rounded-full w-full"
                            alt=""
                          />
                          <span className="online_icon absolute w-3 h-3 rounded-full right-[-0.0625rem] bottom-0 border-2 border-white dark:border-[#444444]"></span>
                        </div>
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] font-medium leading-[1.2]">
                            Joshua Weston
                          </span>
                          <p className="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">
                            Sami is online
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="name-first-letter py-1 px-4 bg-primary-lighter sticky z-[1] top-0 font-semibold border-b border-[#eee] dark:border-[#444444] cursor-pointer">
                      O
                    </li>
                    <li className="dz-chat-user border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="img_cont flex items-center justify-center w-10 h-10 bg-[#eee] rounded-full text-[13px] text-center font-semibold self-start mr-2.5 relative">
                          <img
                            src="assets/images/avatar/4.jpg"
                            className="rounded-full w-full"
                            alt=""
                          />
                          <span className="online_icon offline absolute w-3 h-3 rounded-full right-[-0.0625rem] bottom-0 border-2 border-white dark:border-[#444444]"></span>
                        </div>
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] font-medium leading-[1.2]">
                            Oliver Acker
                          </span>
                          <p className="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">
                            Nargis left 30 mins ago
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="dz-chat-user border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="img_cont flex items-center justify-center w-10 h-10 bg-[#eee] rounded-full text-[13px] text-center font-semibold self-start mr-2.5 relative">
                          <img
                            src="assets/images/avatar/5.jpg"
                            className="rounded-full w-full"
                            alt=""
                          />
                          <span className="online_icon offline absolute w-3 h-3 rounded-full right-[-0.0625rem] bottom-0 border-2 border-white dark:border-[#444444]"></span>
                        </div>
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] font-medium leading-[1.2]">
                            Oscar Weston
                          </span>
                          <p className="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">
                            Rashid left 50 mins ago
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card chat dz-chat-history-box hidden">
                <div className="card-header chat-list-header text-center flex justify-between py-[0.9375rem] px-[1.25rem] items-center border-b border-[#E6E6E6] relative dark:border-[#444444]">
                  <a className="dz-chat-history-back w-[1.875rem] h-[1.875rem] bg-primary-light rounded-md flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <polygon points="0 0 24 0 24 24 0 24" />
                        <rect
                          fill="#000000"
                          opacity="0.3"
                          transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) "
                          x="14"
                          y="7"
                          width="2"
                          height="10"
                          rx="1"
                        />
                        <path
                          d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z"
                          fill="#000000"
                          fillRule="nonzero"
                          transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) "
                        />
                      </g>
                    </svg>
                  </a>
                  <div>
                    <h6 className="mb-1 text-[0.9375rem]">Chat with Khelesh</h6>
                    <p className="mb-0 text-xs leading-[1.2] text-success">
                      Online
                    </p>
                  </div>
                  <div className="dropdown relative">
                    <a
                      data-dz-dropdown="DzchatDropdown"
                      className="w-[1.875rem] h-[1.875rem] bg-primary-light rounded-md flex justify-center items-center dz-dropdown"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="#000000" cx="5" cy="12" r="2" />
                          <circle fill="#000000" cx="12" cy="12" r="2" />
                          <circle fill="#000000" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </a>
                    <ul
                      id="DzchatDropdown"
                      className="dz-dropdown-menu dropdown-menu-end absolute translate-x-[-205px] translate-y-[8px] overflow-hidden rounded-md z-[9] bg-white dark:bg-[#242424] shadow-[0_0_3.125rem_0_rgba(82,63,105,0.15)] min-w-[15rem] py-2 hidden text-left"
                    >
                      <li className="dropdown-item py-2 px-[1.25rem] block w-full text-body-color text-[13px] hover:bg-[#f8f9fa] hover:text-primary dark:hover:bg-transparent dark:hover:text-white">
                        <i className="fa fa-user-circle text-primary mr-2"></i>{" "}
                        View profile
                      </li>
                      <li className="dropdown-item py-2 px-[1.25rem] block w-full text-body-color text-[13px] hover:bg-[#f8f9fa] hover:text-primary dark:hover:bg-transparent dark:hover:text-white">
                        <i className="fa fa-users text-primary mr-2"></i> Add to
                        btn-close friends
                      </li>
                      <li className="dropdown-item py-2 px-[1.25rem] block w-full text-body-color text-[13px] hover:bg-[#f8f9fa] hover:text-primary dark:hover:bg-transparent dark:hover:text-white">
                        <i className="fa fa-plus text-primary mr-2"></i> Add to
                        group
                      </li>
                      <li className="dropdown-item py-2 px-[1.25rem] block w-full text-body-color text-[13px] hover:bg-[#f8f9fa] hover:text-primary dark:hover:bg-transparent dark:hover:text-white">
                        <i className="fa fa-ban text-primary mr-2"></i> Block
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="contacts_body style-1 p-4 dz-scroll overflow-y-scroll overflow-x-hidden relative"
                  id="DZ_W_Contacts_Body3"
                >
                  <div className="flex justify-start mb-6">
                    <div className="img_cont_msg block w-[1.875rem] h-[1.875rem] text-[13px] text-center font-semibold">
                      <img
                        src="assets/images/avatar/1.jpg"
                        className="rounded-full w-full"
                        alt=""
                      />
                    </div>
                    <div className="msg_cotainer ml-2.5 bg-primary text-white py-2.5 px-[0.9375rem] relative rounded-md rounded-ss-none text-sm">
                      Hi, how are you samim?
                      <span className="text-[0.6875rem] mt-[0.3125rem] block text-white opacity-50 msg_time">
                        8:40 AM, Today
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-end mb-6">
                    <div className="msg_cotainer_send mr-2.5 bg-chat dark:bg-[#171717] text-black dark:text-white py-2.5 px-[0.9375rem] relative rounded-md rounded-se-none text-sm text-right">
                      Hi Khalid i am good tnx how about you?
                      <span className="text-[0.6875rem] mt-[0.3125rem] block text-body-color opacity-50 msg_time_send">
                        8:55 AM, Today
                      </span>
                    </div>
                    <div className="img_cont_msg block w-[1.875rem] h-[1.875rem] text-[13px] text-center font-semibold">
                      <img
                        src="assets/images/avatar/2.jpg"
                        className="rounded-full w-full"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-start mb-6">
                    <div className="img_cont_msg block w-[1.875rem] h-[1.875rem] text-[13px] text-center font-semibold">
                      <img
                        src="assets/images/avatar/1.jpg"
                        className="rounded-full w-full"
                        alt=""
                      />
                    </div>
                    <div className="msg_cotainer ml-2.5 bg-primary text-white py-2.5 px-[0.9375rem] relative rounded-md rounded-ss-none text-sm">
                      I am good too, thank you for your chat template
                      <span className="text-[0.6875rem] mt-[0.3125rem] block text-white opacity-50 msg_time">
                        9:00 AM, Today
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-end mb-6">
                    <div className="msg_cotainer_send mr-2.5 bg-chat dark:bg-[#171717] text-black dark:text-white py-2.5 px-[0.9375rem] relative rounded-md rounded-se-none text-sm text-right">
                      You are welcome
                      <span className="text-[0.6875rem] mt-[0.3125rem] block text-body-color opacity-50 msg_time_send">
                        9:05 AM, Today
                      </span>
                    </div>
                    <div className="img_cont_msg block w-[1.875rem] h-[1.875rem] text-[13px] text-center font-semibold">
                      <img
                        src="assets/images/avatar/2.jpg"
                        className="rounded-full w-full"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-start mb-6">
                    <div className="img_cont_msg block w-[1.875rem] h-[1.875rem] text-[13px] text-center font-semibold">
                      <img
                        src="assets/images/avatar/1.jpg"
                        className="rounded-full w-full"
                        alt=""
                      />
                    </div>
                    <div className="msg_cotainer ml-2.5 bg-primary text-white py-2.5 px-[0.9375rem] relative rounded-md rounded-ss-none text-sm">
                      I am looking for your next templates
                      <span className="text-[0.6875rem] mt-[0.3125rem] block text-white opacity-50 msg_time">
                        9:07 AM, Today
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-end mb-6">
                    <div className="msg_cotainer_send mr-2.5 bg-chat dark:bg-[#171717] text-black dark:text-white py-2.5 px-[0.9375rem] relative rounded-md rounded-se-none text-sm text-right">
                      Ok, thank you have a good day
                      <span className="text-[0.6875rem] mt-[0.3125rem] block text-body-color opacity-50 msg_time_send">
                        9:10 AM, Today
                      </span>
                    </div>
                    <div className="img_cont_msg block w-[1.875rem] h-[1.875rem] text-[13px] text-center font-semibold">
                      <img
                        src="assets/images/avatar/2.jpg"
                        className="rounded-full w-full"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-start mb-6">
                    <div className="img_cont_msg block w-[1.875rem] h-[1.875rem] text-[13px] text-center font-semibold">
                      <img
                        src="assets/images/avatar/1.jpg"
                        className="rounded-full w-full"
                        alt=""
                      />
                    </div>
                    <div className="msg_cotainer ml-2.5 bg-primary text-white py-2.5 px-[0.9375rem] relative rounded-md rounded-ss-none text-sm">
                      Bye, see you
                      <span className="text-[0.6875rem] mt-[0.3125rem] block text-white opacity-50 msg_time">
                        9:12 AM, Today
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-start mb-6">
                    <div className="img_cont_msg block w-[1.875rem] h-[1.875rem] text-[13px] text-center font-semibold">
                      <img
                        src="assets/images/avatar/1.jpg"
                        className="rounded-full w-full"
                        alt=""
                      />
                    </div>
                    <div className="msg_cotainer ml-2.5 bg-primary text-white py-2.5 px-[0.9375rem] relative rounded-md rounded-ss-none text-sm">
                      Hi, how are you samim?
                      <span className="text-[0.6875rem] mt-[0.3125rem] block text-white opacity-50 msg_time">
                        8:40 AM, Today
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-end mb-6">
                    <div className="msg_cotainer_send mr-2.5 bg-chat dark:bg-[#171717] text-black dark:text-white py-2.5 px-[0.9375rem] relative rounded-md rounded-se-none text-sm text-right">
                      Hi Khalid i am good tnx how about you?
                      <span className="text-[0.6875rem] mt-[0.3125rem] block text-body-color opacity-50 msg_time_send">
                        8:55 AM, Today
                      </span>
                    </div>
                    <div className="img_cont_msg block w-[1.875rem] h-[1.875rem] text-[13px] text-center font-semibold">
                      <img
                        src="assets/images/avatar/2.jpg"
                        className="rounded-full w-full"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-start mb-6">
                    <div className="img_cont_msg block w-[1.875rem] h-[1.875rem] text-[13px] text-center font-semibold">
                      <img
                        src="assets/images/avatar/1.jpg"
                        className="rounded-full w-full"
                        alt=""
                      />
                    </div>
                    <div className="msg_cotainer ml-2.5 bg-primary text-white py-2.5 px-[0.9375rem] relative rounded-md rounded-ss-none text-sm">
                      I am good too, thank you for your chat template
                      <span className="text-[0.6875rem] mt-[0.3125rem] block text-white opacity-50 msg_time">
                        9:00 AM, Today
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-end mb-6">
                    <div className="msg_cotainer_send mr-2.5 bg-chat dark:bg-[#171717] text-black dark:text-white py-2.5 px-[0.9375rem] relative rounded-md rounded-se-none text-sm text-right">
                      You are welcome
                      <span className="text-[0.6875rem] mt-[0.3125rem] block text-body-color opacity-50 msg_time_send">
                        9:05 AM, Today
                      </span>
                    </div>
                    <div className="img_cont_msg block w-[1.875rem] h-[1.875rem] text-[13px] text-center font-semibold">
                      <img
                        src="assets/images/avatar/2.jpg"
                        className="rounded-full w-full"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-start mb-6">
                    <div className="img_cont_msg block w-[1.875rem] h-[1.875rem] text-[13px] text-center font-semibold">
                      <img
                        src="assets/images/avatar/1.jpg"
                        className="rounded-full w-full"
                        alt=""
                      />
                    </div>
                    <div className="msg_cotainer ml-2.5 bg-primary text-white py-2.5 px-[0.9375rem] relative rounded-md rounded-ss-none text-sm">
                      I am looking for your next templates
                      <span className="text-[0.6875rem] mt-[0.3125rem] block text-white opacity-50 msg_time">
                        9:07 AM, Today
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-end mb-6">
                    <div className="msg_cotainer_send mr-2.5 bg-chat dark:bg-[#171717] text-black dark:text-white py-2.5 px-[0.9375rem] relative rounded-md rounded-se-none text-sm text-right">
                      Ok, thank you have a good day
                      <span className="text-[0.6875rem] mt-[0.3125rem] block text-body-color opacity-50 msg_time_send">
                        9:10 AM, Today
                      </span>
                    </div>
                    <div className="img_cont_msg block w-[1.875rem] h-[1.875rem] text-[13px] text-center font-semibold">
                      <img
                        src="assets/images/avatar/2.jpg"
                        className="rounded-full w-full"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-start mb-6">
                    <div className="img_cont_msg block w-[1.875rem] h-[1.875rem] text-[13px] text-center font-semibold">
                      <img
                        src="assets/images/avatar/1.jpg"
                        className="rounded-full w-full"
                        alt=""
                      />
                    </div>
                    <div className="msg_cotainer ml-2.5 bg-primary text-white py-2.5 px-[0.9375rem] relative rounded-md rounded-ss-none text-sm">
                      Bye, see you
                      <span className="text-[0.6875rem] mt-[0.3125rem] block text-white opacity-50 msg_time">
                        9:12 AM, Today
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-footer type_msg pt-2.5 px-[1.25rem] pb-4 border-t border-[#E6E6E6] dark:border-transparent">
                  <div className="input-group relative flex flex-wrap items-stretch justify-between w-full">
                    <textarea
                      className="py-2.5 h-auto min-h-auto text-[13px] outline-none resize-none flex-auto w-[1%] dark:bg-[#1E1E1E]"
                      placeholder="Type your message..."
                    ></textarea>
                    <div className="input-group-append">
                      <button
                        type="button"
                        className="btn bg-primary text-lg rounded-full h-[2.375rem] w-[2.375rem] mt-1.5 text-white text-center"
                      >
                        <i className="fa fa-location-arrow"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-content" id="alerts-tab">
              <div className="card sm:mb-4 mb-0 contacts_card">
                <div className="card-header chat-list-header text-center flex justify-between py-[0.9375rem] px-[1.25rem] items-center border-b border-[#E6E6E6] relative dark:border-[#444444]">
                  <a className="w-[1.875rem] h-[1.875rem] bg-primary-light rounded-md flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect x="0" y="0" width="24" height="24" />
                        <circle fill="#000000" cx="5" cy="12" r="2" />
                        <circle fill="#000000" cx="12" cy="12" r="2" />
                        <circle fill="#000000" cx="19" cy="12" r="2" />
                      </g>
                    </svg>
                  </a>
                  <div>
                    <h6 className="mb-1 text-[0.9375rem]">Notications</h6>
                    <p className="mb-0 text-xs text-muted leading-[1.2]">
                      Show All
                    </p>
                  </div>
                  <a className="w-[1.875rem] h-[1.875rem] bg-primary-light rounded-md flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect x="0" y="0" width="24" height="24" />
                        <path
                          d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                          fill="#000000"
                          fillRule="nonzero"
                          opacity="1"
                        />
                        <path
                          d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                          fill="#000000"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                  </a>
                </div>

                <div
                  className="card-body contacts_body p-0 dz-scroll overflow-y-scroll overflow-x-hidden relative"
                  id="DZ_W_Contacts_Body1"
                >
                  <ul className="contacts">
                    <li className="name-first-letter py-1 px-4 bg-primary-lighter sticky z-[1] top-0 font-semibold border-b border-[#eee] dark:border-[#444444] cursor-pointer text-[0.8125rem]">
                      SEVER STATUS
                    </li>
                    <li className="border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="img_cont flex items-center justify-center w-10 h-10 bg-primary-light text-primary rounded-full text-[13px] text-center font-semibold self-start mr-2.5 relative">
                          KK
                        </div>
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] font-medium leading-[1.2]">
                            David Nester Birthday
                          </span>
                          <p className="text-[0.8125rem] text-primary leading-[1.2] max-w-[10.625rem]">
                            Today
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="name-first-letter py-1 px-4 bg-primary-lighter sticky z-[1] top-0 font-semibold border-b border-[#eee] dark:border-[#444444] cursor-pointer text-[0.8125rem]">
                      SOCIAL
                    </li>
                    <li className="border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="img_cont flex items-center justify-center w-10 h-10 rounded-full text-[13px] text-center font-semibold self-start mr-2.5 relative bg-success-light text-success">
                          RU
                        </div>
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] font-medium leading-[1.2]">
                            Perfection Simplified
                          </span>
                          <p className="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">
                            Jame Smith commented on your status
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="name-first-letter py-1 px-4 bg-primary-lighter sticky z-[1] top-0 font-semibold border-b border-[#eee] dark:border-[#444444] cursor-pointer text-[0.8125rem]">
                      SEVER STATUS
                    </li>
                    <li className="border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="img_cont flex items-center justify-center w-10 h-10 bg-[#eee] rounded-full text-[13px] text-center font-semibold self-start mr-2.5 relative bg-primary-light text-primary">
                          AU
                        </div>
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] font-medium leading-[1.2]">
                            AharlieKane
                          </span>
                          <p className="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">
                            Sami is online
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="img_cont flex items-center justify-center w-10 h-10 rounded-full text-[13px] text-center font-semibold self-start mr-2.5 relative text-info bg-info-light">
                          MO
                        </div>
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] font-medium leading-[1.2]">
                            Athan Jacoby
                          </span>
                          <p className="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">
                            Nargis left 30 mins ago
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card-footer"></div>
              </div>
            </div>
            <div className="tab-content" id="notes-tab">
              <div className="card sm:mb-4 mb-0 note_card">
                <div className="card-header chat-list-header text-center flex justify-between py-[0.9375rem] px-[1.25rem] items-center border-b border-[#E6E6E6] relative dark:border-[#444444]">
                  <a className="w-[1.875rem] h-[1.875rem] bg-primary-light rounded-md flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect
                          fill="#000000"
                          x="4"
                          y="11"
                          width="16"
                          height="2"
                          rx="1"
                        ></rect>
                        <rect
                          fill="#000000"
                          opacity="1.0"
                          transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                          x="4"
                          y="11"
                          width="16"
                          height="2"
                          rx="1"
                        ></rect>
                      </g>
                    </svg>
                  </a>
                  <div>
                    <h6 className="mb-1 text-[0.9375rem]">Notes</h6>
                    <p className="mb-0 text-xs text-muted leading-[1.2]">
                      Show All
                    </p>
                  </div>
                  <a className="w-[1.875rem] h-[1.875rem] bg-primary-light rounded-md flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect x="0" y="0" width="24" height="24" />
                        <path
                          d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                          fill="#000000"
                          fillRule="nonzero"
                          opacity="1"
                        />
                        <path
                          d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                          fill="#000000"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
                <div
                  className="card-body contacts_body p-0 dz-scroll overflow-y-scroll overflow-x-hidden relative"
                  id="DZ_W_Contacts_Body2"
                >
                  <ul className="contacts">
                    <li className="border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] whitespace-nowrap font-medium leading-[1.2] text-ellipsis overflow-hidden">
                            New order placed..
                          </span>
                          <p className="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">
                            10 Aug 2020
                          </p>
                        </div>
                        <div className="ml-auto">
                          <a className="btn bg-primary w-[1.625rem] h-[1.625rem] p-[0.1175rem] inline-block text-center text-white text-xs rounded-md leading-[1.9] mr-1">
                            <i className="fas fa-pencil-alt"></i>
                          </a>
                          <a className="btn bg-danger w-[1.625rem] h-[1.625rem] p-[0.1175rem] inline-block text-center text-white text-xs rounded-md leading-[1.9]">
                            <i className="fa fa-trash"></i>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] whitespace-nowrap font-medium leading-[1.2] text-ellipsis overflow-hidden">
                            Youtube, a video-sharing website..
                          </span>
                          <p className="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">
                            10 Aug 2020
                          </p>
                        </div>
                        <div className="ml-auto">
                          <a className="btn bg-primary w-[1.625rem] h-[1.625rem] p-[0.1175rem] inline-block text-center text-white text-xs rounded-md leading-[1.9] mr-1">
                            <i className="fas fa-pencil-alt"></i>
                          </a>
                          <a className="btn bg-danger w-[1.625rem] h-[1.625rem] p-[0.1175rem] inline-block text-center text-white text-xs rounded-md leading-[1.9]">
                            <i className="fa fa-trash"></i>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] whitespace-nowrap font-medium leading-[1.2] text-ellipsis overflow-hidden">
                            john just buy your product..
                          </span>
                          <p className="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">
                            10 Aug 2020
                          </p>
                        </div>
                        <div className="ml-auto">
                          <a className="btn bg-primary w-[1.625rem] h-[1.625rem] p-[0.1175rem] inline-block text-center text-white text-xs rounded-md leading-[1.9] mr-1">
                            <i className="fas fa-pencil-alt"></i>
                          </a>
                          <a className="btn bg-danger w-[1.625rem] h-[1.625rem] p-[0.1175rem] inline-block text-center text-white text-xs rounded-md leading-[1.9]">
                            <i className="fa fa-trash"></i>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="border-b border-[#eee] dark:border-[#444444] py-3 px-4 cursor-pointer hover:bg-primary-light">
                      <div className="flex items-center bd-highlight">
                        <div className="user_info">
                          <span className="text-black dark:text-white text-[0.9375rem] mb-[0.3125rem] block max-w-[10.625rem] whitespace-nowrap font-medium leading-[1.2] text-ellipsis overflow-hidden">
                            Athan Jacoby
                          </span>
                          <p className="text-[0.8125rem] text-body-color leading-[1.2] max-w-[10.625rem]">
                            10 Aug 2020
                          </p>
                        </div>
                        <div className="ml-auto">
                          <a className="btn bg-primary w-[1.625rem] h-[1.625rem] p-[0.1175rem] inline-block text-center text-white text-xs rounded-md leading-[1.9] mr-1">
                            <i className="fas fa-pencil-alt"></i>
                          </a>
                          <a className="btn bg-danger w-[1.625rem] h-[1.625rem] p-[0.1175rem] inline-block text-center text-white text-xs rounded-md leading-[1.9]">
                            <i className="fa fa-trash"></i>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbox;
