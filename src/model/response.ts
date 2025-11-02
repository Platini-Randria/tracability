import { IMaterial } from "./material";
import { IUser } from "./user"
import { IAcquisition } from "./acquisition";
import { IReservation } from "./reservation";

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
    data: IAcquisition[]
}

export interface IApiReservationResponse extends IApiResponse {
    data: IReservation[]
}