import { IAcquisition } from "@/model/acquisition";
import { cosmoAPI } from "./axios.api";
import { IApiAcquisitionResponse } from "@/model/response";

export class AcquisitionApi {
    static async uploadAcquisition(data: IAcquisition): Promise <{ data: IApiAcquisitionResponse }> {
        return await cosmoAPI.post( '/acquisition', data)
    }
}