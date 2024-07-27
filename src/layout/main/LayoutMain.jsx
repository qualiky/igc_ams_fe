import { Outlet } from "react-router-dom";
import NavHeader from "../../components/NavHeader";
import Chatbox from "../../components/Chatbox";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllUser } from "../../features/reducer/profile/userProfileSlice";
// import OffCanvas from "../../components/OffCanvas";
// import Footer from "../../components/Footer";

const LayoutMain = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);
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
