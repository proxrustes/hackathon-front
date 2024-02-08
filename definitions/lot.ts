export type Lot = {
    id: string,
    title: string,
    description: string,
    price: number,
    close_time: string,
    photo: [],
    status: "OPEN" | "CLOSED" | "CANCELED",
    owner_id: number,
}