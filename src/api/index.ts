import axios, { AxiosResponse } from "axios";
import { CRYPTO_API_URL, TOTAL_VOLFULL } from "@/api/endpoints.ts";

export default class Api {
    static get(): Promise<AxiosResponse> {
        return axios.get(`${CRYPTO_API_URL}${TOTAL_VOLFULL}`, {
            params: {
                limit: "10",
                tsym: "USD",
            }
        });
    }
}