import axios from "axios";

axios.defaults.baseURL = "https://6547a3b8902874dff3ac96df.mockapi.io/api/";

axios.defaults.params = {
  limit: 12,
};

export const getAdverts = async (page) => {
  const params = {
    page,
  };

  const { data } = await axios.get("/advert", { params });
  return data;
};
