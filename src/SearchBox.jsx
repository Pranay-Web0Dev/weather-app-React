import { TextField, Button } from "@mui/material";

export default function SearchBox({ city, onChange, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <TextField
                
                label="City Name"
                variant="outlined"
                value={city}
                onChange={onChange}
                required
            />
            <Button variant="contained" type="submit" style={{ marginLeft: "10px" }}>
                Search
            </Button>
        </form>
    );
}
