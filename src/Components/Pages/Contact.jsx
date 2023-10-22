import "../../css/Contact.css";
import Footer from "../Footer";
import { AuthContext } from "../../context/AuthContextProvider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

// time line import
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

// Context Imports

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import { useContact } from "../../context/ContactContextProvider";
// import { useEffect, useState } from "react";

const Contact = () => {
    const { state, dispatch } = useContact();
    const { currentUser } = useContext(AuthContext);

    const handleSubmitMessage = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "ContactUs_Message"), {
                contact_Name: state.contact_Name,
                contact_Email: state.contact_Email,
                contact_Subject: state.contact_Subject,
                contact_message: state.contact_message,
                timeStamp: serverTimestamp(),
                // user_email: updateCurrentUser.email,
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        dispatch({ type: "NAME", payload: "" });
        dispatch({ type: "EMAIL", payload: "" });
        dispatch({ type: "SUBJECT", payload: "" });
        dispatch({ type: "MESSAGE", payload: "" });
    };

    const handleName = (e) => {
        dispatch({ type: "NAME", payload: e.target.value });
    };

    const handleEmail = (e) => {
        dispatch({ type: "EMAIL", payload: e.target.value });
    };

    const handleSubject = (e) => {
        dispatch({ type: "SUBJECT", payload: e.target.value });
    };

    const handleMessage = (e) => {
        dispatch({ type: "MESSAGE", payload: e.target.value });
    };

    return (
        <>
            {currentUser ? (
                <div className="contact_container">
                    <div className="header_section">
                        <div className="content">
                            <h1>Contact Us</h1>
                            <h6>Share your idea with us, Just contact us</h6>
                            <p>Get Connected 🔗</p>
                        </div>
                    </div>
                    <div className="mid_content">
                        <div className="text_section">
                            <div className="text">
                                <h1>
                                    Bring Your Concerns On Board To Improve The
                                    System{" "}
                                </h1>
                                <p>
                                    You are a one step closer to contribute to
                                    better environmental condition
                                </p>
                                <div className="list-timeline">
                                    <Timeline position="alternate">
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                Input Personal Information
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot
                                                    variant="outlined"
                                                    color="primary"
                                                />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                Compose Message
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot
                                                    variant="outlined"
                                                    color="secondary"
                                                />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                Submit Message
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                Message Received
                                            </TimelineContent>
                                        </TimelineItem>
                                    </Timeline>
                                </div>
                            </div>
                        </div>

                        <div className="form_section">
                            <form>
                                <input
                                    type="text"
                                    placeholder="Your name..."
                                    onChange={handleName}
                                    value={state.contact_Name}
                                />
                                <input
                                    type="email"
                                    placeholder="Your email...."
                                    onChange={handleEmail}
                                    value={state.contact_Email}
                                />
                                <input
                                    type="text"
                                    placeholder="Your subject......."
                                    onChange={handleSubject}
                                    value={state.contact_Subject}
                                />
                                <textarea
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="5"
                                    placeholder="message..."
                                    onChange={handleMessage}
                                    value={state.contact_message}
                                ></textarea>

                                <button
                                    type="submit"
                                    className="submit_btn"
                                    onClick={handleSubmitMessage}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>

                    <Footer />
                </div>
            ) : (
                <Navigate to="/signup" />
            )}
        </>
    );
};

export default Contact;
