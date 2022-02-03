const { default: axios } = require("axios");

const login = async (params) => {
  let res = await axios.post(
    "http://localhost:5000/user/login",
    params
  );

  if (res.status == 200) {
    localStorage.setItem('jwt', JSON.stringify(res.data.authToken));
    return true;
  }

  return false;
};
export default login;
