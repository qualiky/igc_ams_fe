const KanbanSkeletonLoader = () => {
  return (
    <div className="flex space-x-4 p-4 gap-4">
      {/* Column 1 */}
      <div
        className="flex-1 space-y-6 p-6 bg-white dark:bg-[#242424]"
        style={{ background: "#ffffff" }}
      >
        <div className="h-6 bg-gray-300 dark:bg-[#1E1E1E] rounded-xl w-3/4 animate-pulse"></div>
        <div className="space-y-6">
          <div className="h-20 bg-gray-300 dark:bg-[#1E1E1E] rounded-xl animate-pulse"></div>
          <div className="h-20 bg-gray-300 dark:bg-[#1E1E1E] rounded-xl animate-pulse"></div>
          <div className="h-20 bg-gray-300 dark:bg-[#1E1E1E] rounded-xl animate-pulse"></div>
          <div className="h-20 bg-gray-300 dark:bg-[#1E1E1E] rounded-xl animate-pulse"></div>
          <div className="h-20 bg-gray-300 dark:bg-[#1E1E1E] rounded-xl animate-pulse"></div>
        </div>
      </div>
      {/* Column 2 */}
      <div
        className="flex-1 space-y-6 p-6 bg-white dark:bg-[#242424]"
        style={{ background: "#ffffff" }}
      >
        <div className="h-6 bg-gray-300 dark:bg-[#1E1E1E] rounded-xl w-3/4 animate-pulse"></div>
        <div className="space-y-6">
          <div className="h-20 bg-gray-300 dark:bg-[#1E1E1E] rounded-xl animate-pulse"></div>
          <div className="h-20 bg-gray-300 dark:bg-[#1E1E1E] rounded-xl animate-pulse"></div>
          <div className="h-20 bg-gray-300 dark:bg-[#1E1E1E] rounded-xl animate-pulse"></div>
        </div>
      </div>
      {/* Column 3 */}
      <div
        className="flex-1 space-y-6 p-6 bg-white dark:bg-[#242424]"
        style={{ background: "#ffffff" }}
      >
        <div className="h-6 bg-gray-300 dark:bg-[#1E1E1E] rounded-xl w-3/4 animate-pulse"></div>
        <div className="space-y-6">
          <div className="h-20 bg-gray-300 dark:bg-[#1E1E1E] rounded-xl animate-pulse"></div>
          <div className="h-20 bg-gray-300 dark:bg-[#1E1E1E] rounded-xl animate-pulse"></div>
          <div className="h-20 bg-gray-300 dark:bg-[#1E1E1E] rounded-xl animate-pulse"></div>
          <div className="h-20 bg-gray-300 dark:bg-[#1E1E1E] rounded-xl animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default KanbanSkeletonLoader;
