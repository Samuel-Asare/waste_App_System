import "../../css/Service.css";
import service_data from "../../JSON/Service.json";
import serviceImage from "../../assets/HomePage/Service_Image.png";

const Service = () => {
    return (
        <div className="Service">
            <div className="glassy_div">
                <div className="text">
                    <h2>Our Services</h2>
                    <p className="header_p_text">
                        Our user-friendly platform provides convenient waste
                        collection services tailored to your needs.
                    </p>

                    <div className="service_div">
                        {service_data.map((service) => (
                            <div key={service.id} className="service_item ">
                                <h4>{service.service_name}</h4>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="image_div">
                    <img
                        src={serviceImage}
                        alt="service image"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

export default Service;
