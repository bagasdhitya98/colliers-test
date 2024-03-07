import axios from "axios";
import { getData } from "../services/storage";

const createEmployee = async (data) => {
  try {
    const token = await getData("token");
    const response = await axios.post(
      "/employee/create",
      {
        first_name: data.first_name,
        last_name: data.last_name,
        company_name: data.company_name,
        address: data.address,
        city: data.city,
        county: data.county,
        state: data.state,
        zip: data.zip,
        phone1: data.phone1,
        phone2: data.phone2,
        email: data.email,
        web: data.web,
      },
      {
        headers: {
          Authorization: `Bearer ${token?.token}`,
        },
      }
    );
    return {
      message: "Success create employee",
      results: response.data,
    };
  } catch (error) {
    return {
      message: "Failed create employee : " + error.message,
    };
  }
};

export default createEmployee;
