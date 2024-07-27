import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const GetUserFullname = ({ userID }) => {
  const { allUser } = useSelector((state) => state.user);

  const getProfileImageUrl = (id) => {
    const profile = allUser.find((profile) => profile.id === id);
    return profile
      ? profile.attributes?.firstName + " " + profile.attributes?.lastName
      : null;
  };

  const imageUrl = getProfileImageUrl(userID);

  return (
    <>
      <img
        src={imageUrl}
        className="h-[2.813rem] w-[2.813rem] inline-block relative rounded-full"
        alt=""
      />
    </>
  );
};

GetUserFullname.propTypes = {
  userID: PropTypes.number,
};

export default GetUserFullname;
