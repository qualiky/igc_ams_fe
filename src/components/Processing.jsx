import "./processing.css";

const Processing = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          zIndex: "1",
          backdropFilter: "blur(5px)",
          opacity: "0.7",
          minHeight: "700px",
          overflow: "hidden",
        }}
        className="h-full w-[84%] absolute flex items-center justify-center"
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            background: "transparent",
            right: "0",
            bottom: "0",
            backdropFilter: "blur(8px)",
            opacity: 0.8,
          }}
          className="w-full h-[100vh] flex items-center justify-center"
        >
          <div className=" loading-bar">Processing</div>
        </div>
      </div>
    </>
  );
};

export default Processing;
