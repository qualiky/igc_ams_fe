/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState } from "react";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const AvatarByNameRect = ({ name }) => {
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

  // Get the first initial of the name
  const initial = name.charAt(0).toUpperCase();

  return (
    <div
      style={{ background: backgroundColor }}
      className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md bg-gray-400 text-white text-xl font-bold flex items-center justify-center"
    >
      {initial}
    </div>
  );
};

export default AvatarByNameRect;

AvatarByNameRect.propTypes = {
  name: PropTypes.string,
};
