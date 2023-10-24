import "../../css/Booking.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import Footer from "../Footer";
import { useContext, useState } from "react";

// ...........CONTEXT.............
import { useUserInput } from "../../context/RequestServiceContextProvider";

// FIREBASE....................FIREBASE....................
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import { AuthContext } from "../../context/AuthContextProvider";
import { useEffect } from "react";

// .........................

const steps = ["User Details", "Waste details", "Review your Details"];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <AddressForm />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review />;
        default:
            throw new Error("Unknown step");
    }
}

export default function Checkout() {
    const { state, dispatch } = useUserInput(); // Access the Request Data
    const [btnDisable, setBtnDisable] = useState(true);
    // auth context
    const { currentUser } = useContext(AuthContext);
    const [activeStep, setActiveStep] = useState(0);
    const [alert, setAlert] = useState(false);

    // PREVENT EMPTY REQUIRED FIELD TO BE SENT TO THE DATABASE...............................
    useEffect(() => {
        // add more check fields to avoid sending empty values...
        if (
            (state.fname !== "" ||
                state.lname !== "" ||
                state.phone !== "" ||
                state.town !== "" ||
                state.landmark !== "" ||
                state.wasteType !== "" ||
                state.quantityOfBins !== "",
            state.serviceOption ||
                state.bulkyItems !== "" ||
                state.dateTime !== null)
        ) {
            setBtnDisable(false);
        }
    }, [state]);

    // END CHECK ..........................

    // SHOW  ALERT .................
    useEffect(() => {
        if (activeStep === steps.length - 1) {
            // run the below when on the review section
            if (btnDisable === true) {
                setAlert(true);
            } else {
                setAlert(false);
            }
        } else {
            // disappear when you move back from the review section
            setAlert(false);
        }
    }, [activeStep, btnDisable]);

    // END SHOW ALERT.....................

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    // .......ONSUBMIT ..................
    const handleSubmit = async () => {
        setActiveStep(activeStep + 1);
        console.log("request");

        try {
            // setDoc(doc(db, "users", currentUser.id)

            const docRef = await addDoc(
                collection(db, "RequestWasteCollection"),
                {
                    ...state,
                    timeStamp: serverTimestamp(),
                    user_email: currentUser.email,
                }
            );
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        // Dispatch the "RESET" action to reset the state
        dispatch({ type: "RESET" });
    };

    //  .......END ONSUBMIT..........

    return (
        <div className="connet_wrapper">
            <div className="booking">
                {/* ALERT */}
                {alert === true && (
                    <div className="alert alert-danger" role="alert">
                        Required Field Is Empty
                    </div>
                )}
                {/* END ALERT */}
                <React.Fragment>
                    <CssBaseline />
                    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                        <Paper
                            variant="outlined"
                            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                            className="connect_glassy_div"
                        >
                            <Typography
                                component="h1"
                                variant="h4"
                                align="center"
                            >
                                Request For Service
                            </Typography>
                            <Stepper
                                activeStep={activeStep}
                                sx={{ pt: 3, pb: 5 }}
                            >
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Typography variant="h5" gutterBottom>
                                        Thank you for requesting our service 👍
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Your waste collection request has been
                                        successfully submitted. We have sent you
                                        a confirmation email. Thank you for
                                        using our service!
                                    </Typography>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {getStepContent(activeStep)}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "flex-end",
                                        }}
                                    >
                                        {activeStep !== 0 && (
                                            <Button
                                                onClick={handleBack}
                                                sx={{ mt: 3, ml: 1 }}
                                            >
                                                Back
                                            </Button>
                                        )}

                                        {activeStep === steps.length - 1 ? (
                                            <Button
                                                variant="contained"
                                                onClick={handleSubmit}
                                                sx={{ mt: 3, ml: 1 }}
                                                disabled={btnDisable}
                                                style={{
                                                    cursor:
                                                        btnDisable === true &&
                                                        "pointer",
                                                }}
                                            >
                                                Request Now
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="contained"
                                                onClick={handleNext}
                                                sx={{ mt: 3, ml: 1 }}
                                            >
                                                Next
                                            </Button>
                                        )}
                                    </Box>
                                </React.Fragment>
                            )}
                        </Paper>
                    </Container>
                </React.Fragment>
            </div>
            <Footer />
        </div>
    );
}
