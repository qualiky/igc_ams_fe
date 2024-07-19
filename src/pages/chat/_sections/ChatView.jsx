const ChatView = () => {
  return (
    <div className="container-fluid">
      <div className="row gx-0">
        <div className="w-full">
          <div className="card overflow-hidden">
            <div className="card-body">
              <div className="row gx-0">
                {/* <!-- column --> */}
                <div className="xl:w-1/4 lg:w-1/2 sm:w-5/12 w-[19rem] max-sm:left-[-22rem] max-sm:absolute z-[2] duration-300 border-r border-[#88888833] mobile-chat chat-left-area">
                  <div className="border-b border-[#88888833] flex justify-between p-5">
                    <div className="flex">
                      <img
                        src="/assets/images/contacts/d1.jpg"
                        className="h-[2.813rem] w-[2.813rem] inline-block relative rounded-full"
                        alt=""
                      />
                      <div className="ml-2">
                        <h6 className="text-sm">K kumar Gaur</h6>
                        <span className="text-xs text-body-color whitespace-nowrap">
                          web Designer
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap items-stretch relative w-full bg-transparent">
                      <input
                        type="text"
                        className="bg-chat dark:bg-[#2c2c2c] relative flex-1 w-[1%] py-1.5 px-3 flex items-center justify-between rounded-s-md leading-[2rem] outline-none"
                        placeholder="Search"
                      />
                      <span className="input-group-text flex items-center justify-center py-1.5 px-3 text-sm font-normal text-center whitespace-nowrap min-w-[3.125rem] bg-chat dark:bg-[#2c2c2c] text-body-color rounded-e-md mr-[-3px]">
                        <a>
                          <svg
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="8.82495"
                              cy="9.32491"
                              r="6.74142"
                              stroke="#0D99FF"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.5137 14.3638L16.1568 16.9999"
                              stroke="#0D99FF"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="people-list dz-scroll relative overflow-y-scroll overflow-x-hidden">
                    <div className="flex justify-between p-5 pb-0">
                      <div className="flex">
                        <img
                          src="/assets/images/contacts/d1.jpg"
                          className="h-[2.813rem] w-[2.813rem] inline-block relative rounded-full"
                          alt=""
                        />
                        <div className="ml-2">
                          <h6 className="text-sm">Honey Risher</h6>
                          <span className="text-xs text-body-color whitespace-nowrap">
                            <strong>You:</strong> Welcome back{" "}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-body-color whitespace-nowrap">
                        1 mIn
                      </span>
                    </div>
                    <div className="chat-p style-1 flex justify-between p-5 pb-0">
                      <div className="flex active relative">
                        <img
                          src="/assets/images/contacts/d4.jpg"
                          className="h-[2.813rem] w-[2.813rem] inline-block relative rounded-full"
                          alt=""
                        />
                        <div className="ml-2">
                          <h6 className="text-sm">Liam Antony</h6>
                          <span className="text-xs text-body-color whitespace-nowrap">
                            <strong>You:</strong> Welcome back{" "}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-body-color whitespace-nowrap">
                        2 mIn
                      </span>
                    </div>
                    <div className="flex justify-between p-5 pb-0">
                      <div className="flex">
                        <img
                          src="/assets/images/contacts/d2.jpg"
                          className="h-[2.813rem] w-[2.813rem] inline-block relative rounded-full"
                          alt=""
                        />
                        <div className="ml-2">
                          <h6 className="text-sm">Ricky M</h6>
                          <span className="text-xs text-body-color whitespace-nowrap">
                            <strong>You:</strong> Welcome back{" "}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-body-color whitespace-nowrap">
                        5 mIn
                      </span>
                    </div>
                    <div className="chat-p style-1 flex justify-between p-5 pb-0">
                      <div className="flex active relative">
                        <img
                          src="/assets/images/contacts/d1.jpg"
                          className="h-[2.813rem] w-[2.813rem] inline-block relative rounded-full"
                          alt=""
                        />
                        <div className="ml-2">
                          <h6 className="text-sm">Elijah James</h6>
                          <span className="text-xs text-body-color whitespace-nowrap">
                            <strong>You:</strong> Welcome back{" "}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-body-color whitespace-nowrap">
                        4 mIn
                      </span>
                    </div>
                    <div className="flex justify-between p-5 pb-0">
                      <div className="flex">
                        <img
                          src="/assets/images/contacts/d4.jpg"
                          className="h-[2.813rem] w-[2.813rem] inline-block relative rounded-full"
                          alt=""
                        />
                        <div className="ml-2">
                          <h6 className="text-sm">Oliver Noah</h6>
                          <span className="text-xs text-body-color whitespace-nowrap">
                            <strong>You:</strong> Welcome back{" "}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-body-color whitespace-nowrap">
                        2 mIn
                      </span>
                    </div>
                    <div className="chat-p style-1 flex justify-between p-5 pb-0">
                      <div className="flex active relative">
                        <img
                          src="/assets/images/contacts/d2.jpg"
                          className="h-[2.813rem] w-[2.813rem] inline-block relative rounded-full"
                          alt=""
                        />
                        <div className="ml-2">
                          <h6 className="text-sm">Ricky M</h6>
                          <span className="text-xs text-body-color whitespace-nowrap">
                            <strong>You:</strong> Welcome back{" "}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-body-color whitespace-nowrap">
                        5 mIn
                      </span>
                    </div>
                    <div className="chat-p style-1 flex justify-between p-5 pb-0">
                      <div className="flex active relative">
                        <img
                          src="/assets/images/contacts/d1.jpg"
                          className="h-[2.813rem] w-[2.813rem] inline-block relative rounded-full"
                          alt=""
                        />
                        <div className="ml-2">
                          <h6 className="text-sm">Ricky Antony</h6>
                          <span className="text-xs text-body-color whitespace-nowrap">
                            <strong>You:</strong> Welcome back{" "}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-body-color whitespace-nowrap">
                        4 mIn
                      </span>
                    </div>
                    <div className="flex justify-between p-5 pb-0">
                      <div className="flex">
                        <img
                          src="/assets/images/contacts/d1.jpg"
                          className="h-[2.813rem] w-[2.813rem] inline-block relative rounded-full"
                          alt=""
                        />
                        <div className="ml-2">
                          <h6 className="text-sm">Ricky Antony</h6>
                          <span className="text-xs text-body-color whitespace-nowrap">
                            <strong>You:</strong> Welcome back{" "}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-body-color whitespace-nowrap">
                        1 mIn
                      </span>
                    </div>
                    <div className="chat-p style-1 flex justify-between p-5 pb-0">
                      <div className="flex active relative">
                        <img
                          src="/assets/images/contacts/d4.jpg"
                          className="h-[2.813rem] w-[2.813rem] inline-block relative rounded-full"
                          alt=""
                        />
                        <div className="ml-2">
                          <h6 className="text-sm">Ankites Risher</h6>
                          <span className="text-xs text-body-color whitespace-nowrap">
                            <strong>You:</strong> Welcome back{" "}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-body-color whitespace-nowrap">
                        2 mIn
                      </span>
                    </div>
                    <div className="chat-p style-1 flex justify-between p-5 pb-0">
                      <div className="flex active relative">
                        <img
                          src="/assets/images/contacts/d2.jpg"
                          className="h-[2.813rem] w-[2.813rem] inline-block relative rounded-full"
                          alt=""
                        />
                        <div className="ml-2">
                          <h6 className="text-sm">Ricky M</h6>
                          <span className="text-xs text-body-color whitespace-nowrap">
                            <strong>You:</strong> Welcome back{" "}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-body-color whitespace-nowrap">
                        5 mIn
                      </span>
                    </div>
                    <div className="chat-p style-1 flex justify-between p-5 pb-0">
                      <div className="flex active relative">
                        <img
                          src="/assets/images/contacts/d1.jpg"
                          className="h-[2.813rem] w-[2.813rem] inline-block relative rounded-full"
                          alt=""
                        />
                        <div className="ml-2">
                          <h6 className="text-sm">William Risher</h6>
                          <span className="text-xs text-body-color whitespace-nowrap">
                            <strong>You:</strong> Welcome back{" "}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-body-color whitespace-nowrap">
                        4 mIn
                      </span>
                    </div>
                    <div className="chat-p style-1 flex justify-between p-5 pb-0">
                      <div className="flex active relative">
                        <img
                          src="/assets/images/contacts/d4.jpg"
                          className="h-[2.813rem] w-[2.813rem] inline-block relative rounded-full"
                          alt=""
                        />
                        <div className="ml-2">
                          <h6 className="text-sm">Oliver Noah</h6>
                          <span className="text-xs text-body-color whitespace-nowrap">
                            <strong>You:</strong> Welcome back{" "}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-body-color whitespace-nowrap">
                        2 mIn
                      </span>
                    </div>
                    <div className="chat-p style-1 flex justify-between p-5 pb-0">
                      <div className="flex active relative">
                        <img
                          src="/assets/images/contacts/d2.jpg"
                          className="h-[2.813rem] w-[2.813rem] inline-block relative rounded-full"
                          alt=""
                        />
                        <div className="ml-2">
                          <h6 className="text-sm">Ricky M</h6>
                          <span className="text-xs text-body-color whitespace-nowrap">
                            <strong>You:</strong> Welcome back{" "}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-body-color whitespace-nowrap">
                        5 mIn
                      </span>
                    </div>
                    <div className="chat-p style-1 flex justify-between p-5 pb-0">
                      <div className="flex active relative">
                        <img
                          src="/assets/images/contacts/d1.jpg"
                          className="h-[2.813rem] w-[2.813rem] inline-block relative rounded-full"
                          alt=""
                        />
                        <div className="ml-2">
                          <h6 className="text-sm">Elijah James</h6>
                          <span className="text-xs text-body-color whitespace-nowrap">
                            <strong>You:</strong> Welcome back{" "}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-body-color whitespace-nowrap">
                        4 mIn
                      </span>
                    </div>
                  </div>
                </div>
                <div className="xl:w-5/12 lg:w-1/2 sm:w-7/12 w-full border-r border-[#88888833]">
                  <div className="border-b border-[#88888833] flex justify-between p-5">
                    <div className="flex">
                      <img
                        src="/assets/images/contacts/d1.jpg"
                        className="h-[2.813rem] w-[2.813rem] inline-block relative rounded-full"
                        alt=""
                      />
                      <div className="ml-2">
                        <h6 className="text-sm">K kumar Gaur</h6>
                        <span className="flex text-xs text-body-color whitespace-nowrap">
                          online
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="7"
                              cy="7"
                              r="6"
                              fill="#3AC977"
                              stroke="white"
                              strokeWidth="2"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="chat-box-area style-2 dz-scroll relative overflow-y-scroll overflow-x-hidden"
                    id="chartBox2"
                  >
                    <span className="text-center block mb-6 text-body-color text-sm">
                      25/04/2024
                    </span>
                    <div className="flex justify-end items-end mx-auto">
                      <div className="flex flex-col items-end w-full">
                        <p className="text-secondary text-right text-[13px] bg-[#CFDDF0] dark:bg-[#383838] dark:text-white py-2.5 px-[15px] rounded-md rounded-ee-none leading-[1.6] mb-4">
                          Even the all-powerful Pointing has no control about
                          the blind texts it is an
                          <br />
                          almost unorthographic life One day however a small
                          line of blind text by the <br />
                          name of Lorem Ipsum decided to leave for the far World
                          of Grammar. Aenean <br />
                          vulputate eleifend tellus. Aenean leo ligula.
                        </p>
                        <span className="text-xs text-body-color leading-[1.5]">
                          9.30 AM
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-auto">
                        <div className="flex">
                          <img
                            src="/assets/images/contacts/pic2.jpg"
                            className="inline-block w-[1.875rem] min-w-[1.875rem] h-[1.875rem] rounded-full relative object-cover"
                            width="30px"
                            height="30px"
                            alt=""
                          />
                          <div className="ml-1 flex flex-col items-start">
                            <p className="mb-1 bg-[#E8F2FF] dark:bg-[#171717] text-secondary dark:text-white text-[13px] py-2.5 px-[15px] rounded-md rounded-ss-none leading-[1.6]">
                              Good morning
                            </p>
                            <p className="mb-1 bg-[#E8F2FF] dark:bg-[#171717] text-secondary dark:text-white text-[13px] py-2.5 px-[15px] rounded-md rounded-ss-none leading-[1.6]">
                              Can you arrange schedule for next meeting?
                            </p>
                            <span className="text-xs text-body-color whitespace-nowrap">
                              12:45 PM
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="text-center block mb-5 text-body-color text-sm">
                      Today
                    </span>
                    <div className="flex justify-end items-end mx-auto">
                      <div className="flex flex-col items-end w-full">
                        <p className="mb-1 bg-[#CFDDF0] dark:bg-[#383838] text-secondary dark:text-white text-right text-[13px] py-2.5 px-[15px] rounded-md rounded-ee-none leading-[1.6]">
                          Very Good morning
                        </p>
                        <p className="mb-1 bg-[#CFDDF0] dark:bg-[#383838] text-secondary dark:text-white text-right text-[13px] py-2.5 px-[15px] rounded-md rounded-ee-none leading-[1.6]">
                          Okay, I’ll arrange it soon. i noftify you when
                        </p>
                        <p className="mb-1 bg-[#CFDDF0] dark:bg-[#383838] text-secondary dark:text-white text-right text-[13px] py-2.5 px-[15px] rounded-md rounded-ee-none leading-[1.6]">
                          Very Good morning
                        </p>
                        <p className="mb-4 bg-[#CFDDF0] dark:bg-[#383838] text-secondary dark:text-white text-right text-[13px] py-2.5 px-[15px] rounded-md rounded-ee-none leading-[1.6]">
                          Okay, I’ll arrange it soon. i noftify you when it’s
                          done
                          <br />
                          +91-235 2574 2566
                          <br />
                          kk Sharma
                          <br />
                          pan card eeer2063i
                        </p>
                        <span className="text-xs text-body-color whitespace-nowrap">
                          9.30 AM
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="message-send py-[7px] px-2 flex items-center justify-between rounded-md bg-chat dark:bg-[#171717] m-5">
                    <div className="flex items-center justify-between w-[70%]">
                      <div className="input-group relative flex flex-wrap items-stretch w-full">
                        <textarea
                          rows="1"
                          className="bg-chat dark:bg-[#171717] p-2 overflow-hidden resize-none outline-none flex-auto leading-5 text-body-color"
                          placeholder="Hello Hanuman..."
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary flex p-2 text-[15px] font-medium rounded text-white bg-primary leading-5 inline-block border border-primary duration-500 hover:bg-hover-primary"
                    >
                      Send
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.555 5.44976L6.73936 9.30612L2.39962 6.59178C1.77783 6.20276 1.90718 5.25829 2.61048 5.05262L12.9142 2.03518C13.5582 1.84642 14.155 2.44855 13.9637 3.09466L10.9154 13.3912C10.7066 14.0955 9.76747 14.2213 9.38214 13.5968L6.73734 9.3068"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="xl:w-2/6 w-full">
                  <div className="chat-meadia sm:p-5 p-4 xl:w-full sm:w-1/2 float-left">
                    <h4 className="text-base leading-[1.6]">Media</h4>
                    <div className="mt-2.5">
                      <img
                        src="/assets/images/chat/1.png"
                        alt=""
                        className="h-[75px] w-[75px] ml-2.5 mb-2.5 rounded-md object-cover inline-block"
                      />
                      <img
                        src="/assets/images/chat/3.png"
                        alt=""
                        className="h-[75px] w-[75px] ml-2.5 mb-2.5 rounded-md object-cover inline-block"
                      />
                      <img
                        src="/assets/images/chat/2.png"
                        alt=""
                        className="h-[75px] w-[75px] ml-2.5 mb-2.5 rounded-md object-cover inline-block"
                      />
                      <img
                        src="/assets/images/chat/5.png"
                        alt=""
                        className="h-[75px] w-[75px] ml-2.5 mb-2.5 rounded-md object-cover inline-block"
                      />
                      <img
                        src="/assets/images/chat/4.png"
                        alt=""
                        className="h-[75px] w-[75px] ml-2.5 mb-2.5 rounded-md object-cover inline-block"
                      />
                      <img
                        src="/assets/images/chat/2.png"
                        alt=""
                        className="h-[75px] w-[75px] ml-2.5 mb-2.5 rounded-md object-cover inline-block"
                      />
                      <img
                        src="/assets/images/chat/4.png"
                        alt=""
                        className="h-[75px] w-[75px] ml-2.5 mb-2.5 rounded-md object-cover inline-block"
                      />
                      <img
                        src="/assets/images/chat/1.png"
                        alt=""
                        className="h-[75px] w-[75px] ml-2.5 mb-2.5 rounded-md object-cover inline-block"
                      />
                      <img
                        src="/assets/images/chat/4.png"
                        alt=""
                        className="h-[75px] w-[75px] ml-2.5 mb-2.5 rounded-md object-cover inline-block"
                      />
                      <img
                        src="/assets/images/chat/3.png"
                        alt=""
                        className="h-[75px] w-[75px] ml-2.5 mb-2.5 rounded-md object-cover inline-block"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
