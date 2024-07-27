import { useState, useEffect, useCallback, useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useSelector } from "react-redux";
import {
  getAllChatRoomList,
  getCurrentUser,
  selectJwtToken,
} from "../../../selectors/selectors";
import ChatRoom from "./ChatRoom";
import GetUserImage from "../../../const/GetUserImage";
import NotFound from "../../../components/NotFound";
import { formatDate, formatTime } from "../../../const/format-date";
import GetUserFullname from "../../../const/GetUserFullname";
import GroupProfileImage from "../../../const/GroupProfileImage";
import SkeletonChatLoader from "../../../components/skeleton/ChatSkeleton";

// WebSocket Hook
const useWebSocket = (roomId, token) => {
  const [messages, setMessages] = useState([]);
  const [onlineCount, setOnlineCount] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isTypingUser, setIsTypingUser] = useState(false);
  const socketRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);

  const connectWebSocket = useCallback(() => {
    if (socketRef.current) {
      socketRef.current.close();
    }

    const ws = new WebSocket(
      `wss://systems.pirus.app/ws/chat/${roomId}/?token=${token}`
    );

    ws.onopen = () => {
      console.log("WebSocket connected");
      setIsConnected(true);
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
        reconnectTimeoutRef.current = null;
      }
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Web SOcket", data);
      if (data.type === "new_message") {
        setMessages((prevMessages) => [...prevMessages, data.message]);
        setIsTyping(false);
      } else if (data.type === "online_count") {
        setOnlineCount(data.count);
      } else if (data.type === "typing") {
        setIsTyping(true);
        setIsTypingUser(data.user);
      } else if (data.type === "typing_stopped") {
        setIsTyping(false);
      }
    };

    ws.onclose = (event) => {
      console.log("WebSocket disconnected", event.code, event.reason);
      setIsConnected(false);
      reconnectTimeoutRef.current = setTimeout(connectWebSocket, 5000);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socketRef.current = ws;
  }, [roomId, token]);

  useEffect(() => {
    connectWebSocket();
    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
    };
  }, [connectWebSocket]);

  const sendMessage = (message) => {
    if (socketRef.current && isConnected) {
      socketRef.current.send(
        JSON.stringify({
          type: "message",
          message,
        })
      );
    }
  };

  const sendTypingStatus = (value) => {
    if (socketRef.current) {
      if (value == "" || value == null || value == undefined) {
        console.log("emptyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
        socketRef.current.send(
          JSON.stringify({
            type: "stopped_typing",
          })
        );
      } else {
        socketRef.current.send(
          JSON.stringify({
            type: "typing",
          })
        );
      }
    }
  };

  return {
    messages,
    onlineCount,
    isTyping,
    isConnected,
    sendMessage,
    sendTypingStatus,
    isTypingUser,
  };
};

// Main Chat Component
const ChatView = () => {
  const jwtToken = useSelector(selectJwtToken);
  const [chatID, setChatID] = useState("");

  const { user } = useSelector(getCurrentUser);

  const [inputValue, setInputValue] = useState("");

  const { allChatRooms } = useSelector(getAllChatRoomList);

  const selecetdRoom = allChatRooms?.filter((item) => item?.id === chatID);

  const { chats, isLoading } = useSelector(getAllChatRoomList);

  const me = useSelector((state) => state.auth.user?.username);

  const roomId = chatID;

  const {
    messages,
    isTyping,
    onlineCount,
    isConnected,
    isTypingUser,
    sendMessage,
    sendTypingStatus,
  } = useWebSocket(roomId, jwtToken);

  const handleSend = () => {
    if (inputValue.trim() !== "") {
      sendMessage(inputValue);
      setInputValue("");
    }
  };

  const handleOnChange = (e) => {
    setInputValue(e);
    sendTypingStatus(e);
  };

  return (
    <div className="container-fluid">
      <div className="row gx-0">
        <div className="w-full">
          <div className="card overflow-hidden">
            <div className="card-body">
              <div className="row gx-0">
                <ChatRoom setChatID={setChatID} chatID={chatID} />

                {selecetdRoom?.length == 0 ? (
                  <div className="xl:w-[60%] lg:w-2/3 sm:w-7/12 w-full flex flex-col justify-between ">
                    <div className="mt-20 flex justify-between p-5">
                      <NotFound title="Please Select the user" />
                    </div>
                    <div className="message-send py-[7px] px-2 flex items-center justify-between rounded-md bg-chat dark:bg-[#171717] m-5">
                      <div className="flex items-center justify-between w-[70%]">
                        <div className="input-group relative flex flex-wrap items-stretch w-full">
                          <textarea
                            rows="2"
                            className="bg-chat dark:bg-[#171717] p-2 overflow-hidden resize-none outline-none flex-auto leading-5 text-body-color"
                            placeholder="Type a message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            disabled={!!selecetdRoom}
                          ></textarea>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary flex p-2 text-[15px] font-medium rounded text-white bg-primary leading-5 items-center border border-primary duration-500 hover:bg-hover-primary"
                        onClick={handleSend}
                        disabled={!!selecetdRoom}
                      >
                        Send
                        <Icon icon="lets-icons:send-fill" width={22} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="xl:w-[60%] lg:w-2/3 sm:w-7/12 w-full border-r border-[#88888833]">
                      <div className="border-b border-[#88888833] flex justify-between p-5">
                        <div className="flex">
                          {selecetdRoom?.[0]?.is_private ? (
                            <GetUserImage
                              userID={selecetdRoom?.[0]?.members?.[0]?.username}
                            />
                          ) : (
                            <GroupProfileImage />
                          )}

                          <div className="ml-2">
                            <>
                              {selecetdRoom?.[0]?.is_private ? (
                                <GetUserFullname
                                  userName={
                                    selecetdRoom?.[0]?.members?.[0]?.username
                                  }
                                />
                              ) : (
                                <div className="flex">
                                  <GetUserFullname
                                    userName={
                                      selecetdRoom?.[0]?.members?.[0]?.username
                                    }
                                  />
                                  ,&nbsp;
                                  <GetUserFullname
                                    userName={
                                      selecetdRoom?.[0]?.members?.[1]?.username
                                    }
                                  />
                                </div>
                              )}
                            </>
                            {isTyping && isTypingUser != user?.username ? (
                              <span className="flex items-center text-xs text-body-color whitespace-nowrap">
                                ...is typing
                              </span>
                            ) : (
                              <span className="flex items-center text-xs text-body-color whitespace-nowrap">
                                online
                                <Icon
                                  icon="carbon:dot-mark"
                                  className="text-success"
                                  width={20}
                                />
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div
                        className="chat-box-area style-2 dz-scroll relative overflow-y-scroll overflow-x-hidden"
                        id="chartBox2"
                      >
                        {isLoading ? (
                          <SkeletonChatLoader />
                        ) : (
                          <>
                            {[...chats, ...messages].map((msg, index) => (
                              <div
                                key={index}
                                className={`flex ${
                                  msg.sender === me
                                    ? "justify-end"
                                    : "justify-start"
                                } items-end mx-auto`}
                              >
                                <div
                                  className={`flex flex-col ${
                                    msg.sender === me
                                      ? "items-end "
                                      : "items-start"
                                  } w-[90%]`}
                                >
                                  <p
                                    className={`text-secondary text-justify text-[13px] ${
                                      msg.sender === me
                                        ? "bg-[#eeeeee] dark:bg-[#383838]"
                                        : "bg-primary text-white dark:bg-primary"
                                    } dark:text-white py-2.5 px-[15px] rounded-md ${
                                      msg.sender === me
                                        ? "rounded-ee-none"
                                        : "rounded-ss-none"
                                    } leading-[1.6] mb-4`}
                                  >
                                    {msg.message}
                                  </p>
                                  <span className="text-[10px] text-body-color leading-[1.5]">
                                    {formatDate(msg?.created_at) +
                                      " " +
                                      formatTime(msg?.created_at)}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                      <div className="message-send py-[7px] px-2 flex items-center justify-between rounded-md bg-chat dark:bg-[#171717] m-5">
                        <div className="flex items-center justify-between w-[70%]">
                          <div className="input-group relative flex flex-wrap items-stretch w-full">
                            <textarea
                              rows="2"
                              className="bg-chat dark:bg-[#171717] p-2 overflow-hidden resize-none outline-none flex-auto leading-5 text-body-color"
                              placeholder="Type a message..."
                              value={inputValue}
                              onChange={(e) => handleOnChange(e.target.value)}
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

                    {/* <div className="xl:w-2/6 w-full">
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
                    </div> */}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
