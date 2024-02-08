import { SearchBar } from "@/components/SearchBar";
import { Box, Container, Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box sx={{ height: 60, backgroundColor: "primary.main", width: "100%" }}/>
      <Stack alignItems="center">   <SearchBar /></Stack>
   
    </>
  );
}
