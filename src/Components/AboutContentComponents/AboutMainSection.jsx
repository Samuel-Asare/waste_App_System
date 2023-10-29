import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import "../../css/About.css";
import { Navigate } from "react-router-dom";

import service_Img from "/Users/admin/Documents/My_Doc_Sam/Final_Year_Project/Code/Waste_System_Web_App/src/assets/About_Page_images/service_img.jpeg";
import team_1 from "/Users/admin/Documents/My_Doc_Sam/Final_Year_Project/Code/Waste_System_Web_App/src/assets/About_Page_images/team_1.jpeg";
import team_2 from "/Users/admin/Documents/My_Doc_Sam/Final_Year_Project/Code/Waste_System_Web_App/src/assets/About_Page_images/team_2.jpeg";
import team_3 from "/Users/admin/Documents/My_Doc_Sam/Final_Year_Project/Code/Waste_System_Web_App/src/assets/About_Page_images/team_3.jpeg";
import team_4 from "/Users/admin/Documents/My_Doc_Sam/Final_Year_Project/Code/Waste_System_Web_App/src/assets/About_Page_images/team_4.jpeg";

const AboutMainSection = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <>
            {currentUser ? (
                <div className="about_content_wrapper">
                    <header>
                        <div className="header_text_div">
                            <h5>ABOUT US</h5>
                            <p>
                                clean<span>waste.</span>
                            </p>
                        </div>
                    </header>
                    {/* section about */}
                    <section className="about_content">
                        <div className="image">
                            <img src={service_Img} alt="about us image" />
                        </div>

                        {/* text content  */}
                        <div className="text_content">
                            <article>
                                <h2>What We Offer:</h2>
                                <div className="text-content">
                                    <ol type="1">
                                        <span>
                                            <li>
                                                <h6>
                                                    Streamlined Communication
                                                    with Waste Collection
                                                    Agencies:
                                                </h6>
                                            </li>
                                            <p>
                                                Our application simplifies waste
                                                management by providing a direct
                                                channel for users to communicate
                                                with waste collection agencies.
                                                You can now request waste
                                                collection services with just a
                                                few taps on your smartphone.
                                            </p>
                                        </span>

                                        <span>
                                            <li>
                                                <h6>
                                                    Educational Resources and
                                                    Waste Use Cases:
                                                </h6>
                                            </li>
                                            <p>
                                                Discover a wealth of educational
                                                resources and learn about
                                                various waste types and their
                                                optimal handling. Explore
                                                innovative use cases for waste,
                                                showcasing how it can be
                                                repurposed or recycled
                                                effectively.
                                            </p>
                                        </span>

                                        <span>
                                            <li>
                                                <h6>
                                                    Stay Informed with Waste
                                                    News and Blogs:
                                                </h6>
                                            </li>
                                            <p>
                                                Keep yourself updated with the
                                                latest waste-related news,
                                                trends, and insightful blogs
                                                through our dedicated section.
                                                Stay informed about the evolving
                                                landscape of waste management
                                                and sustainability.
                                            </p>
                                        </span>

                                        <span>
                                            <li>
                                                <h6>
                                                    Voice Your Opinions and
                                                    Concerns:
                                                </h6>
                                            </li>
                                            <p>
                                                We value your feedback and
                                                ideas. Our application allows
                                                you to share your thoughts,
                                                opinions, suggestions, and
                                                concerns through the reviews
                                                section. Your feedback is
                                                essential in our journey towards
                                                continuous improvement.
                                            </p>
                                        </span>
                                    </ol>
                                </div>
                            </article>
                        </div>
                    </section>
                    {/* vision text */}
                    <section className="vision-text-content">
                        <div className="text-content">
                            <div className="top-text">
                                <h2>Our Vision</h2>
                                <p>
                                    At our core, we strive to create a cleaner
                                    and healthier environment. By leveraging
                                    technology, education, and community
                                    engagement, we aim to contribute to a
                                    sustainable world where waste is minimized
                                    and responsibly managed.
                                </p>
                            </div>
                            <div className="bottom-text">
                                <p>
                                    <i>
                                        Join us in this mission towards a{" "}
                                        <span>greener</span> future!
                                    </i>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* section team */}
                    <section className="team">
                        <div className="team_header">
                            <h2>Our Team</h2>
                        </div>
                        <div className="team_content">
                            <div className="team_card">
                                <img src={team_1} alt="partner image" />
                                <div className="card_information">
                                    <h6>John Doe</h6>
                                    <p>Lorem, ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <div className="team_card">
                                <img src={team_2} alt="partner image" />
                                <div className="card_information">
                                    <h6>Will Smith</h6>
                                    <p>Lorem, ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <div className="team_card">
                                <img src={team_3} alt="partner image" />
                                <div className="card_information">
                                    <h6>Mike Stones</h6>
                                    <p>Lorem, ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <div className="team_card">
                                <img src={team_4} alt="partner image" />
                                <div className="card_information">
                                    <h6>Samuel Asare</h6>
                                    <p>Software Developer</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* section banner */}
                    <section className="about_banner">
                        <div>
                            <h5>
                                Discover meaningful waste management solutions
                                that prioritize sustainability, environmental
                                responsibility, and community well-being.
                            </h5>
                            <h5>
                                Ready to make a difference? Embrace responsible
                                waste management and make use of our service
                                today!
                            </h5>
                        </div>
                    </section>
                </div>
            ) : (
                <Navigate to="/signup" />
            )}
        </>
    );
};

export default AboutMainSection;
