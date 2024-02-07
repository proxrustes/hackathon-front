import { Avatar, Button, Stack, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export function Header() {
    return (
        <Stack direction="row">
            <Typography variant="h5" sx={{ fontWeight: 600 }}>Rohate Zhabenya</Typography>
            <Button variant="outlined">create lot</Button>
            <Avatar sx={{ bgcolor: "black" }}><AccountCircleIcon /></Avatar>
        </Stack>
    )
}