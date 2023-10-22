import "../../css/Booking.css";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

// CONTEXT
import { useUserInput } from "../../context/RequestServiceContextProvider"; // Import the context
import { useState } from "react";

export default function AddressForm() {
    const { state, dispatch } = useUserInput(); // Access the context
    const [check, setCheck] = useState(true);

    // telephone......................................
    const [phoneNumber, setPhoneNumber] = useState("");
    const [valid, setValid] = useState(true);

    const handlePhoneNumberChange = (event) => {
        const inputValue = event.target.value;
        setPhoneNumber(inputValue);

        // Define the regex pattern for a 10-digit number starting with 0
        const regexPattern = /^0\d{9}$/;

        // Test if the input value matches the pattern
        const isValid = regexPattern.test(inputValue);
        setValid(isValid);

        // Dispatch an action to update the name(Context)....HandlePhoneNumber
        dispatch({ type: "PHONE", payload: event.target.value });
    };

    const handleUserDetailsCheck = () => {
        setCheck(!check);
        console.log(check);
        check === true
            ? dispatch({ type: "RIGHT_USER_DETAILS", payload: true })
            : dispatch({ type: "RIGHT_USER_DETAILS", payload: false });
    };

    // ...................CONTEXT HANDLES..............................
    const handleFirstNameChange = (e) => {
        // Dispatch an action to update the name
        dispatch({ type: "FIRST_NAME", payload: e.target.value });
    };

    const handleLastNameChange = (e) => {
        // Dispatch an action to update the name
        dispatch({ type: "LAST_NAME", payload: e.target.value });
    };

    const handleTownChange = (e) => {
        // Dispatch an action to update the name
        dispatch({ type: "TOWN", payload: e.target.value });
    };

    const handleLandmarkChange = (e) => {
        // Dispatch an action to update the name
        dispatch({ type: "LANDMARK", payload: e.target.value });
    };

    const handleAdditional_InformationChange = (e) => {
        // Dispatch an action to update the name
        dispatch({ type: "ADDITIONAL", payload: e.target.value });
    };

    // ..................END CONTEXT HANDLES...........................

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                User Request Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        value={state.fname}
                        variant="standard"
                        onChange={handleFirstNameChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        value={state.lname}
                        fullWidth
                        variant="standard"
                        onChange={handleLastNameChange}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="phone_number"
                        name="Phone Number"
                        label="Phone Number"
                        // value={state.phone}
                        fullWidth
                        variant="standard"
                        inputProps={{ type: "tel", pattern: "^0\\d{9}$" }}
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        // onChange={handlePhoneChange}
                        error={!valid}
                        helperText={
                            valid
                                ? ""
                                : "Enter a valid 10-digit phone number starting with 0"
                        }
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="town"
                        name="town"
                        label="Town"
                        value={state.town}
                        fullWidth
                        variant="standard"
                        onChange={handleTownChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="landmark"
                        name="landmark"
                        label="Landmark"
                        value={state.landmark}
                        fullWidth
                        variant="standard"
                        onChange={handleLandmarkChange}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        id="additional_information"
                        name="additional_information"
                        label="Additional Information"
                        value={state.additional}
                        fullWidth
                        variant="standard"
                        onChange={handleAdditional_InformationChange}
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="primary"
                                name="saveAddress"
                                required
                                checked={!check} // Use `checked` instead of `value`
                                onChange={handleUserDetailsCheck} // Use `onChange` to update the `check` state
                            />
                        }
                        label="I provided the right information"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
