import { LotPreview } from "@/components/LotPreview";
import { SearchBar } from "@/components/SearchBar";
import { Lot } from "@/definitions/lot";
import { Box, Grid, Stack } from "@mui/material";

const mockLots: Lot[] = [{
  id: "0", title: "title",
  description: "string",
  price: 466,
  close_time: "today",
  photo: [],
  status: "OPEN",
  owner_id: 1
}, {
  id: "1", title: "title",
  description: "string",
  price: 466,
  close_time: "today",
  photo: [],
  status: "OPEN",
  owner_id: 1
}]

export default function Home() {
  return (
    <>
      <Box sx={{ height: 60, backgroundColor: "primary.main", width: "100%" }} />
      <Stack alignItems="center">   <SearchBar /></Stack>
      <Stack width="100%" sx={{ mx: 20, mt: 2}}>
        <Grid spacing={4} container>{mockLots.map((x) => <LotPreview lot={x} />)}</Grid></Stack>


    </>
  );
}
