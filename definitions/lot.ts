import { LotStatus } from "./LotStatus";

export type Lot = {
    name: string;
    email: string;
    id: string;
    title: string;
    description: string;
    price: number;
    close_time: number;
    photo: [];
    status: LotStatus;
    owner_id: string;
    created_at?: number;
}