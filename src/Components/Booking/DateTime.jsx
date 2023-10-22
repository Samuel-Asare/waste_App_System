import "../../css/Booking.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

// CONTEXT
import { useUserInput } from "../../context/RequestServiceContextProvider";
import { useState } from "react";

export default function DateTime() {
    const { state, dispatch } = useUserInput();

    const [selectedDateTime, setSelectedDateTime] = useState(null);

    const handleDateTimeChange = (newDateTime) => {
        setSelectedDateTime(newDateTime);

        // Assuming you want to dispatch the selectedDateTime to your context
        dispatch({ type: "DATE_TIME", payload: newDateTime.toString() });

        console.log(state);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker
                    label="Pick a date and time"
                    onChange={handleDateTimeChange}
                    value={selectedDateTime}
                />
                <p>Selected Date and Time: {selectedDateTime?.toString()}</p>
            </DemoContainer>
        </LocalizationProvider>
    );
}
