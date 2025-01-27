import axios from "axios";

const baseUrl="https://ecombackend-ywqi.onrender.com/api";

export const publicrequest=axios.create({
    baseUrl:baseUrl,
});