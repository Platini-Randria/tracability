import { IMaterial } from "./material";
import { IUser } from "./user"
import { IAcquisition } from "./acquisition";

export interface IApiResponse {
    success: boolean,
    message?: string,
    data?: any,
}

export interface IApiMaterialResponse extends IApiResponse {
    data: IMaterial[]
}

export interface IApiUserResponse extends IApiResponse {
    data: IUser[]
}

export interface IApiAcquisitionResponse extends IApiResponse {
    date: IAcquisition[]
}