import axios from "axios";

export const createUser = async (user) => {
  return await axios
    .post(`${process.env.VUE_APP_BASE_URL_API}/members`, user)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAllMembers = async () => {
  return await axios
    .get(`${process.env.VUE_APP_BASE_URL_API}/members`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(
        "🚀 ~ file: userRequest.js ~ line 23 ~ getAllMembers ~ error",
        error
      );
    });
};

export const getIfUserExist = async (user) => {
  return await axios
    .post(`${process.env.VUE_APP_BASE_URL_API}/auth/login`, user)
    .then((response) => {
      // console.log(
      //   "🚀 ~ file: userRequest.js ~ line 31 ~ .then ~ response",
      //   response
      // );
      return response;
    })
    .catch((error) => {
      console.log(
        "🚀 ~ file: userRequest.js ~ line 35 ~ getIfUserExist ~ error",
        error
      );
    });
};
