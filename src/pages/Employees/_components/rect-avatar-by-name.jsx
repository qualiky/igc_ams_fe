import { useState } from "react";
import PropTypes from "prop-types";

const RectAvatarByName = ({
  firstname,
  middleName,
  lastname,
  size,
  textColor,
}) => {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // State to store the random color
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

  // Function to get the first letter of the first and last name
  const getInitials = () => {
    return `${firstname.charAt(0)}${lastname.charAt(0)}`;
  };

  return (
    <>
      <div
        style={{ background: backgroundColor }}
        className="rounded-md text-center flex justify-center items-center text-6xl font-semibold text-white lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
      >
        {firstname && lastname ? getInitials() : "A"}
      </div>
    </>
  );
};

RectAvatarByName.propTypes = {
  firstname: PropTypes.string,
  middlename: PropTypes.string,
  lastname: PropTypes.string,
  size: PropTypes.number, // Size in pixels
  textColor: PropTypes.string, // Text color class name
};

export default RectAvatarByName;
