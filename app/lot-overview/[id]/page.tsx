import { Box, Stack, Typography } from "@mui/material";

export default function Page({ params }: { params: { id: string } }) {
    //TODO: fetch lot info based on params.id
    const mockFetchedLotInfo = {
        id: "0", title: "title",
        description: "stringstringstringstringstring string stringstring string string string a string",
        price: 466,
        close_time: "today",
        photo: [],
        status: "OPEN",
        owner_id: 1
    }
    return (
        <Stack alignItems="center" sx={{ mx: 20, mt: 4 }} gap={4}>
            <Typography variant="h4">00:00:00</Typography>
            <Stack direction="row" width="100%" sx={{ mx: 20, mt: 2 }} gap={4}>
                <Box sx={{ width: 540, height: 440, backgroundColor: "secondary.main", borderRadius:4  }} />
                <Stack gap={4}>
                    <Typography variant="h2">{mockFetchedLotInfo.title}</Typography>
                    <Typography variant="h5">{mockFetchedLotInfo.description}</Typography>

                </Stack>
            </Stack>
        </Stack>
    )
}