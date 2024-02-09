import { Bid } from "@/definitions/Bid";
import { List, ListItem, ListItemText, Stack } from "@mui/material";

export function BidsList(props: { bids: Bid[] }) {
    return (
        <List>
            {props.bids.map((bid) => (
                <ListItem key={bid.id}>
                    <ListItemText
                        primary={`$${bid.price} by ${bid.username}`}
                        secondary={bid.created_at}
                    />
                </ListItem>
            ))}
        </List>
    );
}