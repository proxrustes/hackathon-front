import { Bid } from "@/definitions/Bid";
import { Lot } from "@/definitions/Lot";
import { UserBid } from "@/definitions/UserBid";
import { User } from "next-auth";
import { useState, useEffect } from "react";

export default async function ApiPage() {
  const [lot, setLot] = useState<Lot | null>(null);
  const [bid, setBid] = useState<Bid | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [listActiveUsers, setListActiveUsers] = useState<User[]>([]);
  const [userBids, setUserBids] = useState<UserBid[]>([]);
  const [listLots, setListLots] = useState<Lot[]>([]);
  const [listBids, setListBids] = useState<Bid[]>([]);

  useEffect(() => {
    // Create lot
    fetch(`https://int20h-auction-oopo.onrender.com/lot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }).then((res) =>
      res.json().then((json) => {
        setLot(json);
      })
    );

    // Upd lot by id
    fetch(`https://int20h-auction-oopo.onrender.com/lot/{id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }).then((res) =>
      res.json().then((json) => {
        setLot(json);
      })
    );

    // Get lot by filter
    fetch(`https://int20h-auction-oopo.onrender.com/lot/{id}/cancel`, {
      method: "POST",
    }).then((res) =>
      res.json().then((json) => {
        setLot(json?.message);
      })
    );

    // Get lot by filter
    fetch(`https://int20h-auction-oopo.onrender.com/lot?filter={}`, {
      method: "GET",
    }).then((res) =>
      res.json().then((json) => {
        setLot(json);
      })
    );

    // Get list of lots
    fetch(`https://int20h-auction-oopo.onrender.com/lot?filter={}`, {
      method: "GET",
    }).then((res) =>
      res.json().then((json) => {
        setListLots(json);
      })
    );

    // Create bid
    fetch(`https://int20h-auction-oopo.onrender.com/bid`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }).then((res) =>
      res.json().then((json) => {
        setBid(json);
      })
    );

    // Create List bids
    fetch(`https://int20h-auction-oopo.onrender.com/lot/{id}/bid`, {
      method: "GET",
    }).then((res) =>
      res.json().then((json) => {
        setListBids(json);
      })
    );

    // Active Users
    fetch(`https://int20h-auction-oopo.onrender.com/lot/{id}/active-users`, {
      method: "GET",
    }).then((res) =>
      res.json().then((json) => {
        setListActiveUsers(json);
      })
    );

    // User
    fetch(`https://int20h-auction-oopo.onrender.com/profile`, {
      method: "GET",
    }).then((res) =>
      res.json().then((json) => {
        setUser(json);
      })
    );

    // User bids
    fetch(`https://int20h-auction-oopo.onrender.com/profile/bids`, {
      method: "GET",
    }).then((res) =>
      res.json().then((json) => {
        setUserBids(json);
      })
    );
  }, []);

  return;
}
