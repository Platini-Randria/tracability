import { IMaterial } from "@/model/material";
import { cosmoAPI } from "./axios.api";
import { IApiMaterialResponse } from "@/model/response";

export class MaterialApi {
    static async uploadMaterial(data: IMaterial): Promise<{ data: IApiMaterialResponse }> {
        return await cosmoAPI.post('/material', data)
    }
}