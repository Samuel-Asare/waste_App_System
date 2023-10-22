import "../../css/Booking.css";
import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

// ...........CONTEXT.............
import { useUserInput } from "../../context/RequestServiceContextProvider";

export default function Review() {
    const { state } = useUserInput(); // Access the context

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Service Request Summary
            </Typography>

            <hr />
            <Typography variant="p" color="primary" gutterBottom>
                User Details:
            </Typography>
            <List disablePadding>
                <hr />
                {/* USER DETAILS..... */}

                <ListItem sx={{ py: 0.2, px: 0 }}>
                    <ListItemText primary="First Name -" />
                    <Typography variant="body2">{state.fname}</Typography>
                </ListItem>

                <hr />

                <ListItem sx={{ py: 0.2, px: 0 }}>
                    <ListItemText primary="Last Name -" />
                    <Typography variant="body2">{state.lname}</Typography>
                </ListItem>

                <hr />

                <ListItem sx={{ py: 0.2, px: 0 }}>
                    <ListItemText primary="Phone Number -" />
                    <Typography variant="body2">{state.phone}</Typography>
                </ListItem>

                <hr />

                <ListItem sx={{ py: 0.2, px: 0 }}>
                    <ListItemText primary="Town -" />
                    <Typography variant="body2">{state.town}</Typography>
                </ListItem>

                <hr />

                <ListItem sx={{ py: 0.2, px: 0 }}>
                    <ListItemText primary=" Landmark -" />
                    <Typography variant="body2">{state.landmark}</Typography>
                </ListItem>

                <hr />

                <ListItem sx={{ py: 0.2, px: 0 }}>
                    <ListItemText primary="Additional Information -" />
                    <Typography variant="body2">{state.additional}</Typography>
                </ListItem>

                <hr />

                {/* END OF USER DETAILS..... */}
            </List>
            {/* ...................🚀🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 ................. */}
            <Typography variant="p" color="primary" gutterBottom>
                Waste Details:
            </Typography>
            <List disablePadding>
                <hr />
                {/* WASTE DETAILS.... */}

                <ListItem sx={{ py: 0.2, px: 0 }}>
                    <ListItemText primary="Waste Type -" />
                    <Typography variant="body2">{state.wasteType}</Typography>
                </ListItem>

                <hr />

                <ListItem sx={{ py: 0.2, px: 0 }}>
                    <ListItemText primary="Quantity of Bins -" />
                    <Typography variant="body2">
                        {state.quantityOfBins}
                    </Typography>
                </ListItem>

                <hr />

                <ListItem sx={{ py: 0.2, px: 0 }}>
                    <ListItemText primary="Service Option -" />
                    <Typography variant="body2">
                        {state.serviceOption}
                    </Typography>
                </ListItem>

                <hr />

                <ListItem sx={{ py: 0.2, px: 0 }}>
                    <ListItemText primary="Bulk Items For Collection -" />
                    <Typography variant="body2">{state.bulkyItems}</Typography>
                </ListItem>

                <hr />

                <ListItem sx={{ py: 0.2, px: 0 }}>
                    <ListItemText primary="Date & Time -" />
                    <Typography variant="body2">{state.dateTime}</Typography>
                </ListItem>

                <hr />

                <ListItem sx={{ py: 0.2, px: 0 }}>
                    <ListItemText primary="Request -" />
                    <Typography variant="body2">{state.request}</Typography>
                </ListItem>

                {/* END OF WASTE DETAILS..... */}
            </List>
        </React.Fragment>
    );
}
