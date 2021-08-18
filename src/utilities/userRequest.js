 import axios from "axios";

export const createUser = async (user) => {
  return await axios
    .post("http://localhost:3000/api/members", user)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAllMembers = async () => {
  return await axios
    .get("http://localhost:3000/api/members")
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
    .post("http://localhost:3000/api/auth/login", user)
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
