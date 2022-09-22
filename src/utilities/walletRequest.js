import axios from "axios";

export const createWallet = async (wallet) => {
  return await axios
    .post(`${process.env.VUE_APP_BASE_URL_API}/wallets`, wallet)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getWallet = async () => {
  return await axios
    .get(`${process.env.VUE_APP_BASE_URL_API}/wallets`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(
        "🚀 ~ file: walletRequest.js ~ line 21 ~ getWal ~ error",
        error
      );
    });
};
