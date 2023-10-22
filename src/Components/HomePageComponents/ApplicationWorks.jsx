import "../../css/ApplicationWorks.css";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";

const ApplicationWorks = () => {
    return (
        <div className="application_container">
            <div className="app_card">
                <ImportantDevicesIcon />
                <h6>App works from mobile and desktop device</h6>
                <ul>
                    <li>works on iphone and ipad</li>
                    <li>works on andriod</li>
                    <li>works on other operating systems</li>
                </ul>
            </div>

            <div className="app_card">
                <ShieldOutlinedIcon />
                <h6>All your data are secured</h6>
                <ul>
                    <li>credientials are safely stored</li>
                    <li>
                        Profile information can only be altered by the owner
                    </li>
                    <li>User friendly application</li>
                </ul>
            </div>
        </div>
    );
};

export default ApplicationWorks;
