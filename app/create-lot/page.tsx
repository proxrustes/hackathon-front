import React from 'react';
import { Container, Box, TextField, Button, Typography, Stack } from '@mui/material';


export default function AuctionPage() {
    return (
        <Stack sx={{mx:20, mt: 4}} gap={4}>
            <Typography variant="h4" sx={{fontWeight:800, textAlign:"center"}}>
                What do you want to auction?
            </Typography>
            <Stack direction="row" justifyContent="space-between" gap={4}>
                <Box
                sx={{
                    height: 'auto',
                    width: '100%',
                    maxWidth: '600px',
                    border: '1px dashed grey',
                    marginBottom: 2
                }}
            />
                <Stack gap={2} width="100%">
                    <TextField
                        required
                        id="title"
                        fullWidth
                        label="Title"
                        placeholder="Give me a name..."
                    />
                    <TextField
                    fullWidth
                        required
                        id="description"
                        label="Description"
                        multiline
                        rows={4}
                        placeholder="Describe your item..."
                    />
                    <TextField
                        required
                        fullWidth
                        type="number"
                        id="price"
                        label="Starting Price ($)"
                        InputProps={{ inputProps: { min: 0 } }}
                    />
                    <TextField
                        required
                        fullWidth
                        id="time"
                        label="Time for Better Bid (minutes)"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3 }}
                        fullWidth
                    >
                        Create Lot
                    </Button>
                </Stack></Stack>

        </Stack>
    );
}
