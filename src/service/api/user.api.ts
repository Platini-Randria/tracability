import { IUser } from "@/model/user";
import { cosmoAPI } from "./axios.api";
import { IApiUserResponse } from "@/model/response";

export class UserApi {
    static async uploadUser(data: IUser): Promise<{ data: IApiUserResponse }> {
        return await cosmoAPI.post('/user', data)
    }

    static async getAllUsers(): Promise<{ data: IApiUserResponse }> {
        return await cosmoAPI.get('/user')
    }

    static async deleteUser(id: number): Promise<{ data: IApiUserResponse }> {
        return await cosmoAPI.delete(`/user/${id}`)
    }
}