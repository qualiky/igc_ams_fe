const ProjectCardSkeleton = () => {
  return (
    <div className=" card animate-pulse space-y-3 ml-5 p-4  rounded-lg  max-w-lg mb-5 mr-5">
      {/* First Row */}
      <div className="bg-gray-200 dark:bg-[#1E1E1E] h-16 rounded"></div>
      {/* Middle Row */}
      <div className="bg-gray-200 dark:bg-[#1E1E1E] h-48 rounded"></div>
      {/* Last Row */}
      <div className="bg-gray-200 dark:bg-[#1E1E1E] h-20 rounded"></div>
    </div>
  );
};

export default ProjectCardSkeleton;
