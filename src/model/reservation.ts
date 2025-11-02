export interface IReservation {
    id?: number;
    batiment_reserv: string;
    batiment_retour_reserv: string;
    etage_reserv: string;
    eetage_retour_reserv: string;
    porte_reserv: string;
    porte_retour_reserv: string;
    date_reserv: Date;
    date_retour_reserv: Date;
    id_material: number;
    id_user: number;
}