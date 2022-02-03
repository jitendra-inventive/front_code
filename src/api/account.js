const { default: axios } = require("axios");

const login = async (params) => {
  let token = localStorage.getItem('jwt');
  console.log(token);
  let production = `http://localhost:5000/users_account`;
  const payload = await axios.get(production, {
    method: "GET",
    headers: {"Authorization" : `Bearer ${JSON.parse(token)}`}
  });
  console.log(payload);
  return payload;
};
export default login;
