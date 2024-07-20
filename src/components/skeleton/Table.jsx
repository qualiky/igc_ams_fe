const TableSkeletonLoader = () => {
  return (
    <div className="p-4 space-y-4">
      {/* Table Header */}
      <div className="flex space-x-4">
        <div className="h-6 bg-gray-200 dark:bg-[#1E1E1E]  rounded w-1/5 animate-pulse"></div>
        <div className="h-6 bg-gray-200 dark:bg-[#1E1E1E]  rounded w-1/5 animate-pulse"></div>
        <div className="h-6 bg-gray-200 dark:bg-[#1E1E1E]  rounded w-1/5 animate-pulse"></div>
        <div className="h-6 bg-gray-200 dark:bg-[#1E1E1E]  rounded w-1/5 animate-pulse"></div>
        <div className="h-6 bg-gray-200 dark:bg-[#1E1E1E]  rounded w-1/5 animate-pulse"></div>
      </div>
      {/* Table Rows */}
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="flex space-x-4">
            <div className="h-6 bg-gray-200 dark:bg-[#1E1E1E]  rounded w-1/5 animate-pulse"></div>
            <div className="h-6 bg-gray-200 dark:bg-[#1E1E1E]  rounded w-1/5 animate-pulse"></div>
            <div className="h-6 bg-gray-200 dark:bg-[#1E1E1E]  rounded w-1/5 animate-pulse"></div>
            <div className="h-6 bg-gray-200 dark:bg-[#1E1E1E]  rounded w-1/5 animate-pulse"></div>
            <div className="h-6 bg-gray-200 dark:bg-[#1E1E1E]  rounded w-1/5 animate-pulse"></div>
          </div>
        ))}
    </div>
  );
};

export default TableSkeletonLoader;
