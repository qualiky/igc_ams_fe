// SkeletonChatLoader.jsx

const SkeletonChatLoader = () => {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <>
          <div
            key={index}
            className="flex items-center space-x-4 animate-pulse my-10"
          >
            <div className="w-14 h-14 bg-gray-300 dark:bg-[#1E1E1E] rounded-full"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-12 bg-gray-300 dark:bg-[#1E1E1E] rounded-md w-3/4"></div>
            </div>
          </div>
          <div
            key={index}
            className="flex items-center w-full justify-end  space-x-4 animate-pulse my-10"
          >
            <div className="h-12 w-1/2 bg-gray-300 dark:bg-[#1E1E1E] rounded "></div>

            <div className="w-12 h-12 bg-gray-300 dark:bg-[#1E1E1E] rounded-full"></div>
          </div>
        </>
      ))}
    </div>
  );
};

export default SkeletonChatLoader;
