import axios from "axios";

export const createDrug = async (drug) => {
  return await axios
    .post("http://185.163.127.161:3000/api/drugs", drug)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAllDrug = async () => {
  return await axios
    .get("http://185.163.127.161:3000/api/drugs")
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
    .post("http://185.163.127.161:3000/api/drugs/persoList", id)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};
