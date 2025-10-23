import { IUser } from "@/model/user";
import { IApiUserResponse } from "@/model/response";
import { UserApi } from "./api/user.api";

export class UserService {
    static async uploadUser(data: IUser): Promise<IApiUserResponse> {
        return (await UserApi.uploadUser(data)).data
    }
}