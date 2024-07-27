import { Icon } from "@iconify/react/dist/iconify.js";

const AnalyticsCoreHr = () => {
  return (
    <div className="row">
      <div className="xl:w-1/4 sm:w-1/2 w-full">
        <div className="card z-auto flex flex-col hover:shadow-[rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.05)_0px_4px_6px_-2px]">
          <div className="card-body p-5">
            <div className="flex items-center">
              <div className="w-[5.375rem] h-[5.375rem] leading-[5.375rem] relative flex items-center justify-center text-center bg-success-light rounded-full">
                <Icon
                  className="text-5xl text-[#3ac977]"
                  icon="lucide:user-round"
                />
              </div>
              <div className="total-projects ml-4">
                <h3 className="text-success count text-[28px] font-semibold">
                  07
                </h3>
                <span className="text-sm font-medium">Total Workforce</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:w-1/4 sm:w-1/2 w-full">
        <div className="card z-auto flex flex-col hover:shadow-[rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.05)_0px_4px_6px_-2px]">
          <div className="card-body p-5">
            <div className="flex items-center">
              <div className="w-[5.375rem] h-[5.375rem] leading-[5.375rem] relative flex items-center justify-center text-center bg-primary-light rounded-full">
                <Icon
                  className="text-5xl text-[#0D99FF]"
                  icon="clarity:employee-group-line"
                />
              </div>
              <div className="total-projects ml-4">
                <h3 className="text-primary count text-[28px] font-semibold">
                  03
                </h3>
                <span className="text-sm font-medium">Present Workforce</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:w-1/4 sm:w-1/2 w-full">
        <div className="card z-auto flex flex-col hover:shadow-[rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.05)_0px_4px_6px_-2px]">
          <div className="card-body p-5">
            <div className="flex items-center">
              <div className="w-[5.375rem] h-[5.375rem] leading-[5.375rem] relative flex items-center justify-center text-center bg-purple-light rounded-full">
                <Icon
                  className="text-5xl text-[#BB6bD9]"
                  icon="uil:user-times"
                />
              </div>
              <div className="total-projects ml-4">
                <h3 className="text-purple count text-[28px] font-semibold">
                  04
                </h3>
                <span className="text-sm font-medium">Absent Workforce</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:w-1/4 sm:w-1/2 w-full">
        <div className="card z-auto flex flex-col hover:shadow-[rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.05)_0px_4px_6px_-2px]">
          <div className="card-body p-5">
            <div className="flex items-center">
              <div className="w-[5.375rem] h-[5.375rem] leading-[5.375rem] relative flex items-center justify-center text-center bg-danger-light rounded-full">
                <Icon
                  className="text-5xl text-[#FF5E5E]"
                  icon="basil:user-clock-outline"
                />
              </div>
              <div className="total-projects ml-4">
                <h3 className="text-danger count text-[28px] font-semibold">
                  00
                </h3>
                <span className="text-sm font-medium">Late Arrivals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCoreHr;
