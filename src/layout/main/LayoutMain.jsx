import { Outlet } from "react-router-dom";
import NavHeader from "../../components/NavHeader";
import Chatbox from "../../components/Chatbox";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
// import OffCanvas from "../../components/OffCanvas";
// import Footer from "../../components/Footer";

const LayoutMain = () => {
  return (
    <>
      <NavHeader />
      <Chatbox />
      <Header />
      <Sidebar />
      <Outlet />
      {/* <OffCanvas /> */}
      {/* <Footer /> */}
    </>
  );
};

export default LayoutMain;
