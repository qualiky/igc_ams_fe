import React from "react";

const PreLoader = () => {
  return (
    <React.Fragment>
      <div
        id="preloader"
        className="bg-white dark:bg-[#242424] p-0 m-0 h-full fixed z-[99999] w-full flex items-center justify-center"
      >
        <div className="lds-ripple inline-block relative w-20 h-20">
          <div></div>
          <div></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PreLoader;
