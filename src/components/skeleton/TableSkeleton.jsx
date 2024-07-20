const TableSkeleton = () => {
  return (
    <div className="h-[350px] w-full bg-white dark:bg-[#1E1E1E]">
      <div className="animate-pulse px-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className={`h-4 ${
              index % 2 === 0
                ? "bg-gray-200 dark:bg-[#242424]"
                : "bg-gray-300 dark:bg-[#242424]"
            } mb-6 rounded ${index === 0 ? "mt-3" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TableSkeleton;
