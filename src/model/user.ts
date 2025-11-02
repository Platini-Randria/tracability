export interface IUser {
    id?: number;
    name: string;
    IM: string;
    service: string;
    post: string;
    mail: string;
    phone: string;
    sex: string;
    address: string;
    age: number;
    family: string;
    role: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}
