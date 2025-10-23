import { IMaterial } from "@/model/material";
import { IApiMaterialResponse } from "@/model/response";
import { MaterialApi } from "./api/material.api";

export class MaterialService {
    static async uploadMaterial(data: IMaterial): Promise<IApiMaterialResponse> {
        return (await MaterialApi.uploadMaterial(data)).data
    }
}