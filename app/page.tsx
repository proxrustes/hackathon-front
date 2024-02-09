"use client";
import { LotPreview } from "@/components/LotPreview";
import { SearchBar } from "@/components/SearchBar";
import { Lot } from "@/definitions/Lot";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from "@mui/material";
import { useState } from "react";

const mockLots: Lot[] = [
  {
    id: "0",
    title: "title",
    description: "string",
    price: 466,
    close_time: 4,
    photo: [],
    status: "OPEN",
    owner_id: "1",
  },
  {
    id: "1",
    title: "title",
    description: "string",
    price: 466,
    close_time: 4,
    photo: [],
    status: "OPEN",
    owner_id: "1",
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

      <Stack sx={{ mx: 20, mt: 1 }}>
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
        <Grid spacing={4} container   sx={{mt:1}}>
          {mockLots.map((x) => (
            <LotPreview lot={x} key={x.id} />
          ))}
        </Grid>
      </Stack>
    </>
  );
}
