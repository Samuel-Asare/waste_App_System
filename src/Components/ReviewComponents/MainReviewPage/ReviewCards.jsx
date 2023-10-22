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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Laudantium obcaecati, illo sint maxime odio
                            explicabo!
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Laudantium obcaecati, illo sint maxime odio
                            explicabo!
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Laudantium obcaecati, illo sint maxime odio
                            explicabo!
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ReviewCards;
