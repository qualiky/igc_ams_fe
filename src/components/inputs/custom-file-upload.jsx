import { useState } from "react";

const CustomFileUpload = () => {
  const [files, setFiles] = useState(null);

  const handleFileChange = (event) => {
    setFiles(event.target.files);
    console.log(event.target.files);
  };

  return (
    <div className="flex flex-col flex-grow mb-3">
      <div
        id="FileUpload"
        className="block w-full py-2 px-3 relative bg-white appearance-none border-2 border-gray-300 border-solid rounded-md hover:shadow-outline-gray"
      >
        <input
          type="file"
          multiple
          className="absolute inset-0 z-50 m-0 p-0 w-full h-full outline-none opacity-0"
          onChange={handleFileChange}
          onDragOver={(e) => e.target.classList.add("active")}
          onDragLeave={(e) => e.target.classList.remove("active")}
          onDrop={(e) => e.target.classList.remove("active")}
        />
        {files !== null ? (
          <div className="flex flex-col space-y-1">
            {Array.from({ length: files.length }).map((_, index) => (
              <div className="flex flex-row items-center space-x-2" key={index}>
                {files[index].type.includes("audio/") && (
                  <i className="far fa-file-audio fa-fw"></i>
                )}
                {files[index].type.includes("application/") && (
                  <i className="far fa-file-alt fa-fw"></i>
                )}
                {files[index].type.includes("image/") && (
                  <i className="far fa-file-image fa-fw"></i>
                )}
                {files[index].type.includes("video/") && (
                  <i className="far fa-file-video fa-fw"></i>
                )}
                <span className="font-medium text-gray-900">
                  {files[index].name}
                </span>
                <span className="text-xs self-end text-gray-500">...</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col space-y-2 items-center justify-center">
            <i className="fas fa-cloud-upload-alt fa-3x text-currentColor"></i>
            <p className="text-gray-700">
              Drag your files here or click in this area.
            </p>
            <label
              htmlFor="fileInput"
              className="flex items-center mx-auto py-2 px-4 text-white text-center font-medium border border-transparent rounded-md outline-none bg-red-700 cursor-pointer"
            >
              Select a file
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomFileUpload;
