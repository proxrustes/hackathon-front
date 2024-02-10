import { Lot } from "@/definitions/Lot";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

export function LotPreview(props: { lot: Lot }) {
    //TODO:  підключить картинки
    return (
        <Grid item xs={6} md={4} xl={2}>
            <a style={{ textDecoration: 'none' }} href={`/lot-overview/${props.lot.id}`}>
                <Paper elevation={3} sx={{ cursor: 'pointer' }}>
                    <Box sx={{ width: "100%", height: 250, backgroundColor: "secondary.main" }} />
                    <Stack direction="row" justifyContent="space-between" sx={{ p: 1 }}>
                        <Typography variant="h5" sx={{fontWeight: 800}}>{props.lot.title}</Typography>
                        <Typography variant="h5">$ {props.lot.price}</Typography>
                    </Stack>
                </Paper>
            </a>
        </Grid>
    )

}
