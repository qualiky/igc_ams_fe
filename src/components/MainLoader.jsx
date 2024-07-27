import { useEffect } from "react";
import "./mainLoader.css";
const MainLoader = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="absolute h-[100vh] w-full bg-white dark:bg-[#242424] flex items-center justify-center overflow-hidden z-10">
      <div className="loader_main">
        <div className="loader_cube loader_cube--color">
          <img src="/apple-touch-icon1.png" className="rounded-[40px]" alt="" />
        </div>
        <div className="loader_cube loader_cube--glowing"></div>
      </div>
    </div>
  );
};

export default MainLoader;
