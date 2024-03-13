const BASE_URL = "http://localhost:5000";
// const BASE_URL = "https://ClassyCanvasserver.vercel.app";

export const IMG_BB_BASE_URL = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMG_APIKEY
}`;

export default BASE_URL;
