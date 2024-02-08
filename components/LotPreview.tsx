import { Lot } from "@/definitions/lot";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

export function LotPreview(props: { lot: Lot }) {
    return (
        <Grid item xs={2}>
            <Paper>
                <Box sx={{ width: "100%", height: 250, backgroundColor: "secondary.main" }} />
                <Stack sx={{ p: 1 }}>
                    <Typography variant="h4">  {props.lot.title}</Typography>
                    <Typography variant="h6">   {props.lot.description}</Typography>
                </Stack>
            </Paper>


        </Grid>
    )
}