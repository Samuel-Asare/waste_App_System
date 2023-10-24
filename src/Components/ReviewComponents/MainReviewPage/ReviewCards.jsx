import { Link } from "react-router-dom";
import "../../../css/Review.css";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import AssistantOutlinedIcon from "@mui/icons-material/AssistantOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

const ReviewCards = () => {
    return (
        <div className="Reviewcontainer">
            <Link to="/review/response">
                <div className="tag">
                    <div>
                        <TimelineOutlinedIcon />
                        <h6>Response Time</h6>
                        <p>
                            Fast response time is our priority. We are dedicated
                            to ensuring that your requests are addressed
                            promptly and efficiently. Our team is available
                            around the clock to serve you.
                        </p>
                    </div>
                </div>
            </Link>
            <Link to="/review/relation">
                <div className="tag">
                    <div>
                        <SupportAgentOutlinedIcon />
                        <h6>Relation / Service</h6>
                        <p>
                            Our goal is to maintain strong relationships with
                            our customers. We provide excellent service, and
                            your feedback is essential in helping us improve and
                            build lasting relationships with you.
                        </p>
                    </div>
                </div>
            </Link>
            <Link to="/review/general_suggestion">
                <div className="tag">
                    <div>
                        <AssistantOutlinedIcon />
                        <h6>General Suggestion</h6>
                        <p>
                            We welcome your suggestions and ideas to enhance our
                            services. Your feedback is highly valued, and it
                            helps us continuously improve and offer a better
                            experience to our customers.
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ReviewCards;
