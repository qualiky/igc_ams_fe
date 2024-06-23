import SalesView from "./section/SalesView";

const Sales = () => {
  return (
    <>
      <div className="container-fluid md:ml-[175px]">
        <div className="row">
          <div className="w-full">
            <div className="row">
              <div className="w-full">
                <SalesView />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales;
