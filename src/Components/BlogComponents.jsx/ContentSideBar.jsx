import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "../../css/ContentSideBar.css";

const ContentSideBar = ({ toggle }) => {
    return (
        <div className="sideNavBar" style={{ left: toggle && "0%" }}>
            <div className="largerSection">
                {/* RECENT STORIES START */}
                <div className="recent-stories">
                    <p className="header">Recent Stories</p>
                    <ul>
                        <div className="recentStories-wrapper">
                            <NavLink>
                                <li className="recentStories-link">
                                    Technological Innovations in Local Waste
                                    Management: A Case Study of Accra
                                </li>
                            </NavLink>
                            <p className="recentStories-author">
                                Publication on Waste
                            </p>
                        </div>
                        <div className="recentStories-wrapper">
                            <NavLink>
                                <li className="recentStories-link">
                                    Reducing Plastic Pollution: A Global
                                    Perspective
                                </li>
                            </NavLink>
                            <p className="recentStories-author">
                                World Wildlife Fund
                            </p>
                        </div>
                        <div className="recentStories-wrapper">
                            <NavLink>
                                <li className="recentStories-link">
                                    Circular Economy in Waste Management:
                                    Lessons for Sustainable Practices
                                </li>
                            </NavLink>
                            <p className="recentStories-author">
                                Ellen MacArthur Foundation
                            </p>
                        </div>
                        <div className="recentStories-wrapper">
                            <NavLink>
                                <li className="recentStories-link">
                                    E-Waste: The Growing Crisis and Sustainable
                                    Solutions
                                </li>
                            </NavLink>
                            <p className="recentStories-author">
                                Global E-waste Statistics Partnership
                            </p>
                        </div>
                        <div className="recentStories-wrapper">
                            <NavLink>
                                <li className="recentStories-link">
                                    Food Waste: A Closer Look at Local and
                                    International Efforts to Reduce
                                </li>
                            </NavLink>
                            <p className="recentStories-author">
                                FAO (Food and Agriculture Organization of the
                                United Nations)
                            </p>
                        </div>
                    </ul>
                </div>
                {/* RECENT STORIES END */}
                <div className="explore-text">
                    <h4>Explore More</h4>
                </div>
                {/* TOP STORIES START */}
                <div className="top-stories">
                    <p className="header">Top Stories</p>
                    <ul>
                        <div className="topStories-wrapper">
                            <NavLink>
                                <li className="topStories-link">
                                    Waste-to-Energy: Transforming Garbage into
                                    Power for a Greener Future
                                </li>
                            </NavLink>
                            <p className="topStories-author">
                                International Renewable Energy Agency (IRENA){" "}
                            </p>
                        </div>
                        <div className="topStories-wrapper">
                            <NavLink>
                                <li className="topStories-link">
                                    Community-Led Waste Management Initiatives:
                                    Success Stories Worldwide
                                </li>
                            </NavLink>
                            <p className="topStories-author">
                                Case studies on successful waste management
                                initiatives.
                            </p>
                        </div>
                        <div className="topStories-wrapper">
                            <NavLink>
                                <li className="topStories-link">
                                    Single-Use Plastics: Tackling the Global
                                    Menace Locally
                                </li>
                            </NavLink>
                            <p className="topStories-author">
                                Plastic Pollution Coalition
                            </p>
                        </div>
                        <div className="topStories-wrapper">
                            <NavLink>
                                <li className="topStories-link">
                                    The Economics of Waste Management: A
                                    Comparative Analysis
                                </li>
                            </NavLink>
                            <p className="topStories-author">
                                OECD (Organisation for Economic Co-operation and
                                Development)
                            </p>
                        </div>
                        <div className="topStories-wrapper">
                            <NavLink>
                                <li className="topStories-link">
                                    Waste Management Policies Around the Globe:
                                    A Review of Best Practices
                                </li>
                            </NavLink>
                            <p className="topStories-author">
                                World Health Organization (WHO)
                            </p>
                        </div>
                    </ul>
                </div>
                {/* TOP STORIES END */}
            </div>
            <div className="smallerSection">
                <h6 className="header">cleanwaste covers stories on:</h6>
                <div className="divider"></div>
                <ul>
                    <li>Waste impact</li>
                    <li>Innovations from waste</li>
                    <li>waste Agencies Concerns</li>
                    <li>And more</li>
                </ul>
                <div className="divider"></div>
                <h6 className="brand">Read Blog Post</h6>
            </div>
        </div>
    );
};

ContentSideBar.propTypes = {
    toggle: PropTypes.bool, // Assuming `toggle` is a boolean
};

export default ContentSideBar;
