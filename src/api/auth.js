import axios from 'axios';
import { compatibilityFlags } from 'react-native-screens';

const endPointUrl = 'https://dummyjson.com';

export const loginApi = async (username, password) => {
  const res = await axios.post(` ${endPointUrl}/auth/login`, {
    username,
    password,
  });

  const loginData = res.data;
  const userId = loginData.id;

  const profileResponse = await axios.get(`${endPointUrl}/users/${userId}`);
  userProfile = profileResponse.data;
  
  const finalData = {...loginData, userProfile}
  console.log(`this is the final data of the ${finalData}`)

  return finalData;
};
