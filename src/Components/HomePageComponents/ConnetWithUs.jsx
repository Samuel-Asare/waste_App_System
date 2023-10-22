import { Button } from "reactstrap";
import "../../css/ConnectWithUs.css";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const ConnetWithUs = () => {
    return (
        <div className="connect_With_Us">
            <div className="glassy_div">
                <div className="content">
                    <h2 className="brandName">CleanWaste</h2>
                    <h3 className="connect_text">
                        Connect With Us For Better Waste Collection, Disposal
                        and Educational Resources
                    </h3>
                    <Link to="/connect">
                        <Button className="button">
                            Book Now <GoArrowUpRight />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ConnetWithUs;
