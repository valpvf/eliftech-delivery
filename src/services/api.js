import axios from "axios";

axios.defaults.baseURL = "https://my.api.mockaroo.com";

export const getProductApi = async () => {
  return await axios
    .get("products.json", {
      params: {
        key: "651cbea0",
      },
    })
    .then((res) => {
      const { data } = res;
      return data;
    });
};

const toChatApi = async () => {
  return await axios
    .post(
      "https://api.telegram.org/bot6000498137:AAFzOBh7aN6D0w5OZC-x2_r3-Xnsq8W5bDE/sendMessage?Proverka",
      {
        // params: {
        //   key: "651cbea0",
        // },
      }
    )
    .then((res) => {
      const { data } = res;
      return data;
    });
};

// toChatApi();
