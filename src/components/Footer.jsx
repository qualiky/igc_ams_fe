import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer dark:bg-[#242424] mt-4 border-t border-[#E6E6E6] dark:border-[#444444] text-[13px] font-normal">
        <div className="copyright p-[0.9375rem]">
          <p className="text-center text-[#918f8f] dark:text-[#ffffffb3] sm:text-sm text-xs leading-[1.8]">
            Copyright © Developed by{" "}
            <a
              href="https://dexignzone.com/"
              target="_blank"
              className="text-primary"
            >
              Roshan Nyaupane
            </a>{" "}
            2024
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
