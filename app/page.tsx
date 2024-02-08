"use client";
import { LotPreview } from "@/components/LotPreview";
import { SearchBar } from "@/components/SearchBar";
import { Lot } from "@/definitions/lot";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const mockLots: Lot[] = [
  {
    id: "0",
    title: "title",
    description: "string",
    price: 466,
    close_time: "today",
    photo: [],
    status: "OPEN",
    owner_id: 1,
  },
  {
    id: "1",
    title: "title",
    description: "string",
    price: 466,
    close_time: "today",
    photo: [],
    status: "OPEN",
    owner_id: 1,
  },
];

export default function Home() {
  //TODO: fetch lots info
  //TODO: add filters (nastya in progress)

  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleFilters = () => {
    setFiltersOpen(!filtersOpen);
  };
  return (
    <>
      <Box
        sx={{ height: 60, backgroundColor: "primary.main", width: "100%" }}
      />
      <Stack alignItems="center">
        <SearchBar />
      </Stack>
      <Stack width="100%" sx={{ mx: 20, mt: 2 }}>
        <Grid spacing={4} container>
          {mockLots.map((x) => (
            <LotPreview lot={x} />
          ))}
        </Grid>
      </Stack>
    </>
  );
}
