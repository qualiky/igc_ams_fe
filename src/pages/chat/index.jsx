import { Outlet } from "react-router-dom";
import Breadcumb from "../../components/Breadcumb";

const Chat = () => {
  return (
    <>
      <div className="content-body">
        <Breadcumb title="Home" subtitle="Chat" />

        <Outlet />
      </div>
    </>
  );
};

export default Chat;
