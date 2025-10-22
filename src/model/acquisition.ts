export interface IAcquisition {
    id?: number;
    batiment_acqui: string;
    batiment_remise?: string;
    etage_acqui: string;
    etage_remise?: string;
    porte_acqui: string;
    porte_remise?: string;
    date_acquisition: Date;
    date_remise?: Date;
    id_material: number;
    id_user: number;
}