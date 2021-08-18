import axios from "axios";

export const createWallet = async (wallet) => {
  return await axios
    .post("http://localhost:3000/api/wallets", wallet)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getWallet = async () => {
  return await axios
    .get("http://localhost:3000/api/wallets")
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log("🚀 ~ file: walletRequest.js ~ line 21 ~ getWal ~ error",error);
    });
};
