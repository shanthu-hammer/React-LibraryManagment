import { fetchBookData } from "../../crud/crud";
const Validator = async (probs) => {
  let email = probs.email;
  let password = probs.password;
  let results;

  let userRoleUrl = process.env.REACT_APP_API_URL_USERROLE;

  let RegisteredCredentials = [];

  try {
    RegisteredCredentials = await fetchBookData(userRoleUrl);
    console.log(RegisteredCredentials[2].name);
  } catch (error) {
    console.log(error);
  }

  const check = () => {
    console.log(RegisteredCredentials.length);
    for (let i = 0; i < RegisteredCredentials.length; i++) {
      if (
        email == RegisteredCredentials[i].email &&
        password == RegisteredCredentials[i].password
      ) {
        console.log(email);
        console.log(RegisteredCredentials[i].email);
        return true;

        // return results;
      } else {
        console.log(email);
        console.log(RegisteredCredentials[i].email);
        return false;
      }
    }
    // return results;
  };

  const result = await check();

  return result;
};

export default Validator;
