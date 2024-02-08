import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
export function SearchBar() {
    return (
        <TextField sx={{ top: -10, backgroundColor: "primary.light", width: 360, 
        "& .MuiInputBase": { backgroundColor: "primary.light" }, 
        "& .MuiFilledInput": { backgroundColor: "primary.light" } }} variant="filled"
        InputProps={{
            endAdornment: <InputAdornment position="end">
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </InputAdornment>,
        }} />
    )
}