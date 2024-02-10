"use client"

import { BidsList } from "@/components/BidsList";
import { Bid } from "@/definitions/Bid";
import { Lot } from "@/definitions/Lot";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [lot, setLot] = useState<Lot | null>(null);
  const [listBids, setListBids] = useState<Bid[]>([]);

  const mockLot: Lot = {
    price: 555, owner_id: "1", close_time: "today", photo: ["11"], status: "OPEN", id: "1", title: "Hui", description: "lll gggh Wenn Sie nicht mehr in die Praxis kommen können, können Sie Ihren Termin in eine Videosprechstunde umwandeln, um ihn nicht absagen zu müssen."
  }

  const mockBids: Bid[] = [{
    id: "1", lot_id: "1", price: 4, username: "vasya", is_best: true, created_at: "1:11"
  }, {
    id: "2", lot_id: "1", price: 3, username: "masha", is_best: false, created_at: "1:41"
  }, {
    id: "3", lot_id: "1", price: 4, username: "vasya", is_best: false, created_at: "1:91"
  }]
  useEffect(() => {
    fetch(`https://int20h-auction-oopo.onrender.com/lot/${params.id}`, {
      method: "GET",
    }).then((res) =>
      res.json().then((json) => {
        setLot(json);
      })
    );
    fetch(`https://int20h-auction-oopo.onrender.com/lot/${params.id}/bid`, {
      method: "GET",
    }).then((res) =>
      res.json().then((json) => {
        setListBids(json);
      })
    );

  }, [params.id]);
  const bestBid = mockBids.find(bid => bid.is_best);

  // Filter out the best bid from the rest
  const otherBids = mockBids.filter(bid => !bid.is_best);

  return (
    <Stack alignItems="center" sx={{ mx: 10, mt: 4 }} gap={4}>
      <Typography variant="h5" sx={{ fontWeight: 600 }}>00:00:00</Typography>
      <Stack direction="row" justifyContent="space-between" gap={4}>
        <Box
          sx={{
            height: '300px',
            width: '100%',
            maxWidth: '600px',
            backgroundColor: "secondary.main",
            marginBottom: 2,
            borderRadius: 2
          }}
        />
        <Stack gap={2} width="100%">

          <Typography variant="h5" sx={{ fontWeight: 600 }}>{mockLot.title}</Typography>
          <Typography variant="body1">{mockLot.description}</Typography>
          <Box>
            <Typography variant="button" color="primary" sx={{ fontWeight: 600 }}>Starting price:</Typography>
            <Typography variant="body2">{mockLot.price}</Typography>
            <Typography variant="button" color="primary" sx={{ fontWeight: 600, mt: 10 }}>
              Best Bid:
            </Typography>
            {bestBid && (
              <Typography variant="body2" >
                ${bestBid.price} by {bestBid.username} at {bestBid.created_at}
              </Typography>

            )}

            <Typography variant="button" color="primary" sx={{ fontWeight: 600 }}>Bids history:</Typography>
            {otherBids.map((bid) => (
              <Typography key={bid.id} variant="body2" >
                ${bid.price} by {bid.username} at {bid.created_at}
              </Typography>
            ))}
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            fullWidth
          >
            Create Bid
          </Button>
        </Stack></Stack>
    </Stack>
  );
}
