import { IReservation } from "@/model/reservation";
import { IApiReservationResponse } from "@/model/response";
import { ReservationApi } from "./api/reservation.api";

export class ReservationService {
    static async uploadReservation (data: IReservation): Promise <IApiReservationResponse> {
        return (await ReservationApi.uploadReservation(data)).data
    }
}