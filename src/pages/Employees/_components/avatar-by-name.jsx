/* eslint-disable no-unused-vars */
import { useState } from "react";
import PropTypes from "prop-types";

const AvatarByName = ({ firstname, lastname, size = 14, textColor }) => {
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
    return `${firstname?.charAt(0)}${lastname?.charAt(0) || ""}`;
  };

  return (
    <div
      style={{ background: backgroundColor }}
      className={`m-1 mr-2 h-${size} w-${size} relative flex justify-center items-center rounded-full text-2xl text-white uppercase`}
    >
      {firstname || lastname ? getInitials() : "Unknown"}
    </div>
  );
};

AvatarByName.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  size: PropTypes.number,
  textColor: PropTypes.string,
};

export default AvatarByName;
