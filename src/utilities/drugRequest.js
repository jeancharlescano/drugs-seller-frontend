import axios from "axios";

export const createDrug = async (drug) => {
  return await axios
    .post(`${process.env.VUE_APP_BASE_URL_API}/drugs`, drug)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAllDrug = async () => {
  return await axios
    .get(`${process.env.VUE_APP_BASE_URL_API}/drugs`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(
        "🚀 ~ file: drugsRequest.js ~ line 23 ~ getAllDrugs ~ error",
        error
      );
    });
};

export const getDrugById = async (id) => {
  return await axios
    .post(`${process.env.VUE_APP_BASE_URL_API}/drugs/persoList`, id)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};
