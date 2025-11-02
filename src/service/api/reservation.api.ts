import { IReservation } from "@/model/reservation";
import { IApiReservationResponse } from "@/model/response";
import { cosmoAPI } from "./axios.api";

export class ReservationApi {
    static async uploadReservation(data: IReservation): Promise <{ data: IApiReservationResponse}> {
        return await cosmoAPI.post('/reservation', data)
    }
}