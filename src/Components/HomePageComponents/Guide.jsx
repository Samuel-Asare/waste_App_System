import "../../css/Guide.css";
import how_it_works_data from "../../JSON/How_It_Works.json";

// time line imports

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection";
import ContactsIcon from "@mui/icons-material/Contacts";
import PublishIcon from "@mui/icons-material/Publish";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";

const Guide = () => {
    return (
        <div className="guide_container">
            <div className="glassy_div">
                <div className="text">
                    <div className="text_header">
                        <h2>How The App Works</h2>
                        <p>
                            Our Waste Management System makes waste disposal
                            hassle-free and eco-friendly
                        </p>
                    </div>
                    <div className="cards">
                        {how_it_works_data.map((data) => (
                            <div key={data.id} className="card">
                                <h4>{data.task}</h4>
                                <p>{data.details}</p>
                            </div>
                        ))}
                    </div>
                    <p className="bottom_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis totam repudiandae eaque ipsa, nesciunt vero
                        eveniet illo illum. Et totam voluptatibus quis, harum
                        corporis dignissimos earum incidunt! Ullam, dolorem
                        aliquid.
                    </p>
                </div>
                <div className="list-timeline">
                    {/*  */}
                    <Timeline position="alternate">
                        {/* 1 */}
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: "auto 0" }}
                                align="right"
                                variant="body2"
                                color="#1a22ba"
                            >
                                Step 1
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot>
                                    <PersonAddIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: "12px", px: 2 }}>
                                <Typography variant="h6" component="span">
                                    SignUp / LogIn
                                </Typography>
                                <Typography sx={{ color: "#595959" }}>
                                    For Easy Booking
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        {/* 2 */}
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: "auto 0" }}
                                variant="body2"
                                color="#1a22ba"
                            >
                                step 2
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary">
                                    <AssistantDirectionIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: "12px", px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Navigate to the Connent page
                                </Typography>
                                <Typography sx={{ color: "#595959" }}>
                                    The page houses the connect process
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        {/* 3 */}
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: "auto 0" }}
                                align="right"
                                variant="body2"
                                color="#1a22ba"
                            >
                                Step 3
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary" variant="outlined">
                                    <ContactsIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: "12px", px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Provide the required Information
                                </Typography>
                                <Typography sx={{ color: "#595959" }}>
                                    Needed for better Identification
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        {/* 4 */}
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: "auto 0" }}
                                align="right"
                                variant="body2"
                                color="#1a22ba"
                            >
                                Step 4
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary">
                                    <PublishIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: "12px", px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Submit the Information
                                </Typography>
                                <Typography sx={{ color: "#595959" }}>
                                    Connected!!!!
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        {/* 5 */}
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="secondary">
                                    <RepeatIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: "12px", px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Repeat
                                </Typography>
                                <Typography sx={{ color: "#595959" }}>
                                    Everytime you need to contact the waste
                                    agencies
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        {/* END.................. */}
                    </Timeline>
                </div>
            </div>
        </div>
    );
};

export default Guide;
