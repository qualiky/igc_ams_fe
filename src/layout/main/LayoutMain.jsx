import { Outlet } from "react-router-dom";
import NavHeader from "../../components/NavHeader";
import Chatbox from "../../components/Chatbox";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllUser } from "../../features/reducer/profile/userProfileSlice";
import MainLoader from "../../components/MainLoader";
import { useSelector } from "react-redux";
// import OffCanvas from "../../components/OffCanvas";
// import Footer from "../../components/Footer";

const LayoutMain = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const [loading, setLoading] = useState(true);

  const { isLoading } = useSelector((state) => state.home);

  useEffect(() => {
    setTimeout(() => {
      setLoading(isLoading);
    }, 2000);
  }, [isLoading]);

  return (
    <>
      {loading && <MainLoader />}
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
