import { Icon } from "@iconify/react/dist/iconify.js";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getAllChatRoom,
  getSingleRoomMessages,
} from "../../../features/reducer/chat/chatSlice";
import { useSelector } from "react-redux";
import { getAllChatRoomList } from "../../../selectors/selectors";
import GetUserImage from "../../../const/GetUserImage";
import { Link } from "react-router-dom";
import { chatService } from "../../../features/api-service/chat/chat-action";

const ChatRoom = ({ setChatID, chatID }) => {
  const dispatch = useDispatch();

  const { allChatRooms } = useSelector(getAllChatRoomList);

  useEffect(() => {
    dispatch(getAllChatRoom());
  }, [dispatch]);

  const createChatRooom = async (username, id) => {
    setChatID(id);
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!username) {
      try {
        const res = await chatService.createChatRoom(username);
        // setChatID(res?.id);

        dispatch(getSingleRoomMessages(id));
      } catch (error) {
        console.error(error?.response?.data?.error?.message);
      }
    }
  };

  return (
    <>
      <div className="xl:w-1/4 lg:w-1/2 sm:w-5/12 w-[19rem] max-sm:left-[-22rem] max-sm:absolute z-[2] duration-300 border-r border-[#88888833] mobile-chat chat-left-area">
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
          {allChatRooms?.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                createChatRooom(item?.members?.[0]?.username, item?.id)
              }
              className={`${
                item?.id == chatID ? "bg-primary-light" : ""
              } chat-p style-1 flex justify-between py-4 px-3 hover:bg-primary-light cursor-pointer`}
            >
              <div className="flex active relative">
                <GetUserImage userID={item?.members?.[0]?.id} />

                <div className="ml-2">
                  <h6 className="text-sm">{item?.members?.[0]?.username}</h6>
                  <span className="text-xs text-body-color whitespace-nowrap">
                    <strong>You:</strong> {item?.members?.[0]?.email}{" "}
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
    </>
  );
};

ChatRoom.propTypes = {
  setChatID: PropTypes.func,
  chatID: PropTypes.string,
};

export default ChatRoom;
