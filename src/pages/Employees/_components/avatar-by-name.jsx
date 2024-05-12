import { useState } from "react";
import PropTypes from "prop-types";

const AvatarByName = ({ firstname, lastname, size, textColor }) => {
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
      className={`m-1 mr-2 h-20 w-20 relative flex justify-center items-center rounded-full text-2xl text-${textColor} uppercase`}
    >
      {firstname && lastname ? getInitials() : "Unknown"}
    </div>
  );
};

AvatarByName.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  size: PropTypes.number, // Size in pixels
  textColor: PropTypes.string, // Text color class name
};

// Default props
AvatarByName.defaultProps = {
  size: 16,
  textColor: "white",
};

export default AvatarByName;
