import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { base_img_url } from "../utils/base_img_url";

const GetUserImage = ({ userName }) => {
  const { allUser } = useSelector((state) => state.user);

  const getProfileImageUrl = (user) => {
    const profile = allUser?.find((profile) => profile.username === user);
    return profile ? profile?.profileImage?.[0]?.url : null;
  };

  const imageUrl = getProfileImageUrl(userName);

  return (
    <>
      {imageUrl ? (
        <img
          src={base_img_url + imageUrl}
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
  userName: PropTypes.string,
};

export default GetUserImage;
