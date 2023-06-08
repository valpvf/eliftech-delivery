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
