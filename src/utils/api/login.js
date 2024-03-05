import axios from "axios";

const submitLogin = async (auth) => {
  try {
    const response = await axios.post("/login", {
      username: auth?.username,
      password: auth?.password,
    });
    if (response.data !== "Username or Password not known") {
      return {
        success: true,
        message: "Login successful",
        token: response?.data,
      };
    } else {
      return {
        success: false,
        message: "Invalid username or password",
      };
    }
  } catch (error) {
    console.error("Error submitting login:", error);
    return { success: false, message: error?.message };
  }
};

export default submitLogin;
