/* eslint-disable no-unused-vars */
import { useState } from "react";
import PropTypes from "prop-types";

const AvatarByNameSmall = ({ firstname, lastname }) => {
  // Function to generate a random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

  const getInitials = () => {
    return `${firstname?.charAt(0)}|| ""}`;
  };

  const initial = firstname.charAt(0).toUpperCase();

  return (
    <div
      style={{ background: backgroundColor, height: "30px", width: "30px" }}
      className={`flex items-center justify-center w-[1.875rem] min-w-[1.875rem] h-[1.875rem] text-xl text-white rounded-full relative object-cover uppercase`}
    >
      {initial}
    </div>
  );
};

AvatarByNameSmall.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  size: PropTypes.number,
  textColor: PropTypes.string,
};

export default AvatarByNameSmall;
