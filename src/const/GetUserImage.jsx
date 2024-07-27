import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const GetUserImage = ({ userID }) => {
  const { allUser } = useSelector((state) => state.user);

  const getProfileImageUrl = (id) => {
    const profile = allUser.find((profile) => profile.id === id);
    return profile ? profile.attributes?.profileImage : null;
  };

  const imageUrl = getProfileImageUrl(userID);

  return (
    <>
      {imageUrl ? (
        <img
          src={imageUrl}
          className="h-[2.813rem] w-[2.813rem] inline-block relative rounded-full"
          alt=""
        />
      ) : (
        <img
          src="/assets/logo/default-user.jpg"
          className="h-[2.813rem] w-[2.813rem] inline-block relative rounded-full"
          alt=""
        />
      )}
    </>
  );
};

GetUserImage.propTypes = {
  userID: PropTypes.number,
};

export default GetUserImage;
