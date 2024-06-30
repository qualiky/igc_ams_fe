import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useNavigate } from "react-router-dom";

const Goback = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <li className="mr-5 pt-[3px]">
        <Link
          className="inline-block rounded-full border border-blue-400  text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring "
          to="/"
          onClick={goBack}
        >
          <Icon icon="uil:arrow-left" className="text-3xl" />
        </Link>
      </li>
    </>
  );
};

export default Goback;
