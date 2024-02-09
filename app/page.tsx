"use client";
import { LotPreview } from "@/components/LotPreview";
import { SearchBar } from "@/components/SearchBar";
import { Lot } from "@/definitions/Lot";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  //TODO: fetch lots info
  //TODO: add filters (nastya in progress)

  const [filtersOpen, setFiltersOpen] = useState(false);
  const [lots, setLots] = useState<Lot[]>([]);

  const toggleFilters = () => {
    setFiltersOpen(!filtersOpen);
  }

  useEffect(() => {
    fetch(`https://int20h-auction-oopo.onrender.com/lot?filter={}`,
      {
        method: "GET",
      })
      .then((res) =>
        res.json().then((json) => {
          setLots(json);
        }))
  })

  return (
    <>
      <Box
        sx={{ height: 60, backgroundColor: "primary.main", width: "100%" }}
      />
      <Stack alignItems="center">
        <SearchBar />
      </Stack>

      <Stack sx={{ mx: 10, mt: 1 }}>
        <Stack alignItems="flex-end">
          <Button onClick={toggleFilters} variant="outlined"
          >Filters</Button>
        </Stack>
        {filtersOpen && <Stack direction="row" gap={4}
          justifyContent="space-between"><Stack width="100%">
            <InputLabel htmlFor="filter-input">Filter</InputLabel>
            <OutlinedInput
              fullWidth
              size="small"
              id="filter-input"
              label="Filter"
            /></Stack >
          <Stack width="100%"><InputLabel htmlFor="filter-input">Filter</InputLabel>
            <OutlinedInput
              fullWidth
              size="small"
              id="filter-input"
              label="Filter"
            /></Stack>
          <Stack width="100%"><InputLabel htmlFor="filter-input">Filter</InputLabel>
            <OutlinedInput
              fullWidth
              size="small"
              id="filter-input"
              label="Filter"
            /></Stack>


        </Stack>}
        <Grid spacing={4} container sx={{ mt: 1 }}>

          {lots?.map((x) => (
            <LotPreview lot={x} key={x.id} />
          ))}
        </Grid>
      </Stack>
    </>
  );
}
