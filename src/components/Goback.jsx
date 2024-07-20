import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { useRouter } from "../hooks";

const Goback = () => {
  const route = useRouter();

  const goBack = () => {
    route?.back();
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
