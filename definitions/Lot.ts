import { LotStatus } from "./LotStatus";

export type Lot = {
    id: string;
    title: string;
    description: string;
    price: number;
    close_time: string;
    photo: string[];
    status: LotStatus;
    owner_id: string;
    created_at?: string;
}