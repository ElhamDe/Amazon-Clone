import axios from "axios";
import { BASE_URL } from "./constants"

const config = {
    Headers: {
        "Content-Type" : "application/json",
        "Acceot" : "application/json"
    }
};

export const callApi = async (resource) => {
    const { data } = await axios.get(`${BASE_URL}/${resource}`, config);
    return data;
}