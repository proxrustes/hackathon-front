import { Avatar, Button, Stack, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export function Header() {
    return (
        <Stack direction="row" justifyContent="space-between">
            <Typography variant="h5" sx={{ fontWeight: 600, color: "text.primary" }}>Rohate Zhabenya</Typography>

            <Stack direction="row" gap={2} alignItems="center">
                <Button variant="outlined" sx={{ color: "text.primary", height:"32px" }}>create lot</Button>
                <Avatar sx={{ bgcolor: "text.primary" }}><AccountCircleIcon /></Avatar>
            </Stack>

        </Stack>
    )
}