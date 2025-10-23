export interface IMaterial {
    id?: number;
    name: string;
    description?: string;
    state: string;
    category: string;
    total_quantity: number;
    available_quantity?: number;
    createdAt?: Date;
}   



