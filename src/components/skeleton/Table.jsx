const TableSkeletonLoader = () => {
  return (
    <div className="p-4">
      <div className="w-full border-b-2 border-gray-200">
        {/* Table Header */}
        <div className="flex justify-between py-2">
          <div className="h-4 bg-gray-300 rounded w-1/5 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-1/5 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-1/5 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-1/5 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-1/5 animate-pulse"></div>
        </div>
      </div>
      {/* Table Rows */}
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="flex justify-between py-2 border-b border-gray-200"
          >
            <div className="h-4 bg-gray-300 rounded w-1/5 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/5 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/5 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/5 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/5 animate-pulse"></div>
          </div>
        ))}
    </div>
  );
};

export default TableSkeletonLoader;
