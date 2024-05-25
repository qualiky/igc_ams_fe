import { useState } from "react";
import PropTypes from "prop-types";

const AvatarCoreHr = ({ firstname, lastname }) => {
  // Function to generate a random color
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
    <div
      style={{ background: backgroundColor }}
      className={`inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md flex justify-center items-center text-2xl text-white uppercase`}
    >
      {firstname && lastname ? getInitials() : "Unknown"}
    </div>
  );
};

AvatarCoreHr.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
};

export default AvatarCoreHr;
