import { fetchBookData } from "../../crud/crud";
const Validator = async (probs) => {
  let email = probs.email;
  let password = probs.password;
  let userInfo;

  let userRoleUrl = process.env.REACT_APP_API_URL_USERROLE;

  let RegisteredCredentials = [];

  try {
    RegisteredCredentials = await fetchBookData(userRoleUrl);
    //console.log(RegisteredCredentials[2].name);
  } catch (error) {
    console.log(error);
  }

  const check = () => {
    // console.log(RegisteredCredentials.length);
    for (let i = 0; i < RegisteredCredentials.length; i++) {
      console.log(email + " != \n" + RegisteredCredentials[i].email);
      console.log(password + " != \n" + RegisteredCredentials[i].password);
      if (
        email == RegisteredCredentials[i].email &&
        password == RegisteredCredentials[i].password
      ) {
        userInfo = [true, RegisteredCredentials[i]];
        console.log(userInfo);
        return userInfo;
      } else {
        console.log(email + " != \n" + RegisteredCredentials[i].email);
        console.log(password + " != \n" + RegisteredCredentials[i].password);

        //return userInfo;
      }
    }
    userInfo = [false, "wrong info "];

    return userInfo;
  };
  //console.log(userInfo);
  const result = await check();

  return result;
};

export default Validator;
