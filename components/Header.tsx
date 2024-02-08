import { Button, IconButton, Stack, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export function Header() {
    return (
        <Stack direction="row" justifyContent="space-between" sx={{mx: 20}}>
            <Typography variant="h5" sx={{ fontWeight: 600, color: "text.primary" }}>Rohate Zhabenya</Typography>
            <Stack direction="row" gap={2} alignItems="center">
                <Button variant="outlined" href="/create-lot" sx={{ color: "text.primary", height: "32px" }}>create lot</Button>
                <IconButton sx={{backgroundColor:"text.primary", color:"white"}} href="/create-lot"><AccountCircleIcon/></IconButton>
            </Stack>
        </Stack>
    )
}