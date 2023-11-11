import "../../css/Booking.css";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, InputLabel, Select } from "@mui/material";
import DateTime from "./DateTime";

// CONTEXT
import { useUserInput } from "../../context/RequestServiceContextProvider"; // Import the context
import { useState } from "react";

export default function PaymentForm() {
    const { state, dispatch } = useUserInput(); // Access the context
    const [termsCheck, setTermsCheck] = useState(true);

    const [number, setNumber] = useState("");
    const [valid, setValid] = useState(true);

    const handleAgree_TermsCheck = () => {
        setTermsCheck(!termsCheck);
        termsCheck === true
            ? dispatch({ type: "AGREE_TO_TERMS", payload: true })
            : dispatch({ type: "AGREE_TO_TERMS", payload: false });
    };

    // ...........................................

    const handleWaste_TypeChange = (e) => {
        // Dispatch an action to update the name
        dispatch({ type: "WASTE_TYPE", payload: e.target.value });
    };

    const handleQuantity_Of_BinsChange = (e) => {
        // Dispatch an action to update the name
        dispatch({ type: "QUANTITY_OF_BINS", payload: e.target.value });

        const inputValue = e.target.value;
        setNumber(inputValue);

        // Define the regex pattern for a positive number (>= 1)
        const regexPattern = /^[1-9]\d*$/;

        // Test if the input value matches the pattern
        const isValid = regexPattern.test(inputValue);
        setValid(isValid);
    };

    const handleService_OptionChange = (e) => {
        // Dispatch an action to update the name
        dispatch({ type: "SERVICE_OPTION", payload: e.target.value });
    };

    const handleBulky_ItemChange = (e) => {
        // Dispatch an action to update the name
        dispatch({ type: "BULKY_ITEMS", payload: e.target.value });
    };

    const handleRequestChange = (e) => {
        // Dispatch an action to update the name
        dispatch({ type: "REQUEST", payload: e.target.value });
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Waste Information
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="standard">
                        <InputLabel htmlFor="phone_number">
                            Waste Type
                        </InputLabel>
                        <Select
                            required
                            native
                            inputProps={{
                                name: "waste_type",
                                id: "waste_typer",
                            }}
                            onChange={handleWaste_TypeChange}
                            value={state.wasteType}
                        >
                            <option aria-label="None" value="" />
                            <option value="General_Household_Waste">
                                General Household Waste
                            </option>
                            <option value="Recyclables ">
                                Recyclables (Plastic, Paper, Glass, etc.)
                            </option>
                            a
                            <option value="Hazardous_Waste ">
                                Hazardous Waste (Chemicals, Batteries, etc.)
                            </option>
                            <option value="Organic_Waste ">
                                Organic Waste (Food, Yard Waste, etc.)
                            </option>
                            {/* Add more options as needed */}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="quantityOfBins"
                        label="Number Of Bins"
                        fullWidth
                        autoComplete="QuantityOfBins"
                        variant="standard"
                        // type="number"
                        // onChange={handleQuantity_Of_BinsChange}
                        // value={state.quantityOfBins}
                        type="number"
                        value={number}
                        onChange={handleQuantity_Of_BinsChange}
                        error={!valid}
                        helperText={
                            valid
                                ? ""
                                : "Enter a valid number greater than or equal to 1"
                        }
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="standard">
                        <InputLabel htmlFor="phone_number">
                            Service Options
                        </InputLabel>
                        <Select
                            required
                            native
                            inputProps={{
                                name: "service_option",
                                id: "service_option",
                            }}
                            onChange={handleService_OptionChange}
                            value={state.serviceOption}
                        >
                            <option aria-label="None" value="" />
                            <option value="Regular_Pickup">
                                Regular Pickup (Scheduled Service)
                            </option>
                            <option value=" One-time_Pickup ">
                                One-time Pickup
                            </option>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="standard">
                        <InputLabel htmlFor="phone_number">
                            Bulky items for collection?
                        </InputLabel>
                        <Select
                            required
                            native
                            inputProps={{
                                name: "bulky_items",
                                id: "bulky_items",
                            }}
                            onChange={handleBulky_ItemChange}
                            value={state.bulkyItems}
                        >
                            <option aria-label="None" value="" />
                            <option value="Regular_Pickup">Yes</option>
                            <option value=" One-time_Pickup ">No</option>
                        </Select>
                    </FormControl>
                </Grid>

                {/* time and date */}
                <Grid item xs={12} md={12}>
                    <DateTime />
                </Grid>

                <Grid item xs={12} sm={12}>
                    <TextField
                        id="request"
                        name="request"
                        label="Request"
                        fullWidth
                        variant="standard"
                        value={state.request}
                        onChange={handleRequestChange}
                    />
                </Grid>

                {/* check box */}
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="primary"
                                name="saveCard"
                                value="yes"
                                required
                                checked={!termsCheck} // Use `checked` instead of `value`
                                onChange={handleAgree_TermsCheck} // Use `onChange` to update the `check` state
                            />
                        }
                        label="I agree to the terms and conditions of the service."
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
