import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getHomeData } from "../../../selectors/selectors";
import { Icon } from "@iconify/react/dist/iconify.js";

const Card = ({ bgClass, iconClass, title, value, progress, progressText }) => (
  <div className="xl:w-1/4 lg:w-1/2 w-1/2 px-2">
    <div className={`widget-stat card ${bgClass}`}>
      <div className="sm:p-6 p-2">
        <div className="media flex items-center">
          <span className="mr-2 sm:mr-4 text-white bg-[#ffffff40] w-[3rem] h-[3rem] sm:w-[5.3125rem] sm:h-[5.3125rem] flex items-center justify-center rounded-full">
            {/* <i className={iconClass}></i> */}
            <Icon
              icon={iconClass}
              className="la la-users text-[3rem] sm:text-[3rem]"
            />
          </span>
          <div className="media-body text-white flex-1">
            <p className="mb-1 uppercase text-sm font-medium text-white">
              {title}
            </p>
            <h3 className="text-white  sm:text-[2.2rem] text-[2rem] leading-[1.2]">
              0{value}
            </h3>
            <div className="progress mb-2 h-[5px] overflow-hidden bg-[#ffffff40] rounded-md flex">
              <div
                className="progress-bar animate-myanimation whitespace-nowrap rounded-md bg-white"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            {/* <small>{progressText}</small> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);
Card.propTypes = {
  bgClass: PropTypes.string,
  iconClass: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.number,
  progress: PropTypes.number,
  progressText: PropTypes.string,
};

const HomeAnalytics = () => {
  const homeData = useSelector(getHomeData);

  const cardData = [
    {
      bgClass: "bg-primary",
      iconClass: "eos-icons:project-outlined",
      title: "Total Project",
      value: homeData?.projects || 0,
      progress: 80,
      // progressText: "80% Increase in 20 Days",
    },
    {
      bgClass: "bg-success",
      iconClass: "clarity:employee-group-line",
      title: "Employee",
      value: homeData?.employee || 0,
      progress: 50,
      // progressText: "50% Increase in 25 Days",
    },
    {
      bgClass: "bg-info",
      iconClass: "ci:users",
      title: "Clients",
      value: homeData?.clients || 0,
      progress: 50,
      // progressText: "50% Increase in 25 Days",
    },
    {
      bgClass: "bg-warning",
      iconClass: "icon-park-outline:tickets-one",
      title: "Tickets",
      value: homeData?.tickets || 0,
      progress: 50,
      // progressText: "50% Increase in 25 Days",
    },
  ];

  return (
    <>
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </>
  );
};

export default HomeAnalytics;
