import { Icon } from "@iconify/react/dist/iconify.js";
import { useSelector } from "react-redux";
import { selectJwtToken } from "../../../selectors/selectors";
import { useWebSocket } from "../../../hooks/use-websocket";
import { useState } from "react";

const CHAT_URL = "https://systems.pirus.app";
const ROOM_ID = "0899bfe7-00fd-472b-9dc8-1429bfad6815";

const ChatView = () => {
  const jwtToken = useSelector(selectJwtToken);

  const getChatWebSocketUrl = () => {
    if (!jwtToken) return null;
    return `${CHAT_URL}/ws/chat/${ROOM_ID}/?token=${jwtToken}`;
  };

  const { messages, sendMessage } = useWebSocket(getChatWebSocketUrl);

  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim() !== "") {
      sendMessage({ message: inputValue });
      setInputValue("");
    }
  };

  console.log(messages);

  return (
    <div className="container-fluid">
      <div className="row gx-0">
        <div className="w-full">
          <div className="card overflow-hidden">
            <div className="card-body">
              <div className="row gx-0">
                {/* Left Column */}
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
                          <Icon
                            icon="iconoir:search"
                            width={22}
                            className="text-primary"
                          />
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="people-list dz-scroll relative overflow-y-scroll overflow-x-hidden">
                    {Array.from({ length: 8 }).map((item, index) => (
                      <div
                        key={index}
                        className="chat-p style-1 flex justify-between py-4 px-3 hover:bg-primary-light cursor-pointer"
                      >
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
                    ))}
                  </div>
                </div>

                {/* Chat View */}
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
                        <span className="flex items-center text-xs text-body-color whitespace-nowrap">
                          online
                          <Icon
                            icon="carbon:dot-mark"
                            className="text-success"
                            width={20}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="chat-box-area style-2 dz-scroll relative overflow-y-scroll overflow-x-hidden"
                    id="chartBox2"
                  >
                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          msg.from === "me" ? "justify-end" : "justify-start"
                        } items-end mx-auto`}
                      >
                        <div
                          className={`flex flex-col ${
                            msg.from === "me" ? "items-end" : "items-start"
                          } w-[90%]`}
                        >
                          <p
                            className={`text-secondary text-justify text-[13px] ${
                              msg.from === "me"
                                ? "bg-[#eeeeee] dark:bg-[#383838]"
                                : "bg-[#E8F2FF] dark:bg-[#171717]"
                            } dark:text-white py-2.5 px-[15px] rounded-md ${
                              msg.from === "me"
                                ? "rounded-ee-none"
                                : "rounded-ss-none"
                            } leading-[1.6] mb-4`}
                          >
                            {msg.message}
                          </p>
                          <span className="text-xs text-body-color leading-[1.5]">
                            {msg.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="message-send py-[7px] px-2 flex items-center justify-between rounded-md bg-chat dark:bg-[#171717] m-5">
                    <div className="flex items-center justify-between w-[70%]">
                      <div className="input-group relative flex flex-wrap items-stretch w-full">
                        <textarea
                          rows="2"
                          className="bg-chat dark:bg-[#171717] p-2 overflow-hidden resize-none outline-none flex-auto leading-5 text-body-color"
                          placeholder="Hello Hanuman..."
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary flex p-2 text-[15px] font-medium rounded text-white bg-primary leading-5 items-center border border-primary duration-500 hover:bg-hover-primary"
                      onClick={handleSend}
                    >
                      Send
                      <Icon icon="lets-icons:send-fill" width={22} />
                    </button>
                  </div>
                </div>

                {/* Chat Right Section */}
                <div className="xl:w-2/6 w-full">
                  <div className="chat-meadia sm:p-5 p-4 xl:w-full sm:w-1/2 float-left">
                    <h4 className="text-base leading-[1.6]">Media</h4>
                    <div className="mt-2.5">
                      {Array.from({ length: 9 }).map((item, index) => (
                        <img
                          key={index}
                          src="/assets/images/chat/1.png"
                          alt=""
                          className="h-[75px] w-[75px] ml-2.5 mb-2.5 rounded-md object-cover inline-block"
                        />
                      ))}
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
