import axios from "axios";
import { IMG_BB_BASE_URL } from "./api";

const getPhotoURL = async (photo) => {
  try {
    // console.log(IMG_BB_BASE_URL);
    const res = await axios.post(IMG_BB_BASE_URL, photo, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      return res.data.data.display_url;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default getPhotoURL;
