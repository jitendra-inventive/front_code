const { default: axios } = require("axios");
const register = async (params) => {
  let res = await axios.post(
    "http://localhost:5000/user/create",
    params
  );
	return res.data;  
  
    
 };
export default register;
