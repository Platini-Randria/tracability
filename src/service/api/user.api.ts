import { IUser } from "@/model/user";
import { cosmoAPI } from "./axios.api";
import { IApiUserResponse } from "@/model/response";

export class UserApi {
    static async uploadUser(data: IUser): Promise<{ data: IApiUserResponse }> {
        return await cosmoAPI.post('/user', data)
    }
}