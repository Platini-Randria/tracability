import { IAcquisition } from "@/model/acquisition";
import { IApiAcquisitionResponse } from "@/model/response";
import { AcquisitionApi } from "./api/acquisition.api";

export class AcquisitionService {
    static async uploadAcquisition ( data: IAcquisition): Promise < IApiAcquisitionResponse> {
        return ( await AcquisitionApi.uploadAcquisition(data)).data
    }
}