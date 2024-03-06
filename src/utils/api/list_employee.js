import axios from "axios";
import { getData } from "../services/storage";

const listEmployee = async (size, page, search) => {
  try {
    const token = await getData("token");
    const response = await axios.get(
      `/employee?size=${size ? size : 3}&page=${page ? page : 0}&search=${
        search ? search : ""
      }`,
      {
        headers: {
          Authorization: `Bearer ${token?.token}`,
        },
      }
    );
    if (response.data) {
      return {
        success: true,
        loading: false,
        result: response.data,
      };
    } else {
      return {
        success: false,
        loading: true,
      };
    }
  } catch (error) {
    console.error("Error submitting login:", error);
    return { loading: true, message: error?.message };
  }
};

export default listEmployee;
