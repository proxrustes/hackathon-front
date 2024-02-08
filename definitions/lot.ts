import { LotStatus } from "./LotStatus";

export type Lot = {
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