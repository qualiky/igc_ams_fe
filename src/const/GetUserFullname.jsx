import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const GetUserFullname = ({ userName }) => {
  const { allUser } = useSelector((state) => state.user);

  const getUserFullName = (user) => {
    const profile = allUser.find((profile) => profile.username === user);
    return profile ? profile?.firstName + " " + profile?.lastName : null;
  };

  const name = getUserFullName(userName);

  return (
    <>
      <h6 className="text-sm">{name}</h6>
    </>
  );
};

GetUserFullname.propTypes = {
  userName: PropTypes.string,
};

export default GetUserFullname;
