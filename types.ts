type LotStatus = "OPEN" | "CLOSED" | "CANCELED";

type ListLots = {
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
  created_at: number;
}[];

type Lot = {
  id: string;
  title: string;
  description: string;
  price: number;
  close_time: number;
  photo: [];
  status: LotStatus;
  owner_id: string;
  created_at: number;
};

type LotById = {
  id: string;
  title: string;
  description: string;
  price: number;
  close_time: number;
  photo: [];
  status: LotStatus;
  owner_id: string;
};

type ListBids = {
  id: string;
  lot_id: string;
  price: number;
  username: string;
  is_best: true;
  created_at: number;
};

type Bid = {
  id: string;
  lot_id: string;
  price: number;
  username: string;
  is_best: true;
  created_at: number;
};

type ListActiveUsers = {
  id: string;
  username: string;
}[];

type UserProfile = {
  id: string;
  username: string;
}[];

type ListUserBids = {
  lot_title: string;
  bid_price: number;
  bid_created_at: number;
  is_best: boolean;
  lot_status: string;
}[];
