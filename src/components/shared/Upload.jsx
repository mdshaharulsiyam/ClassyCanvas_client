import React from "react";
import { FaUpload } from "react-icons/fa";
import getPhotoURL from "../../utils/getPhotoUrl";

const Upload = ({ placeHolder, setImage, setUploading, productImage,uploadStatus }) => {
  const handleFileChange = async (e) => {
    const formData = new FormData();
    setUploading(true);
    formData.append("image", e.target.files[0]);

    const url = await getPhotoURL(formData);
    setUploading(false);
    setImage([...productImage,url]);
  };

  return (
    <>
      <label
        htmlFor="fileInput"
        className="flex items-center gap-2 px-4 py-2 text-[12px] md:text-sm font-semibold text-black bg-white border border-gray-300 rounded-full w-max"
      >
        <FaUpload /> {uploadStatus ? "Uploadeding" : placeHolder}
      </label>
      <input
        id="fileInput"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </>
  );
};

export default Upload;
