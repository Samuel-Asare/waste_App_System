import "../../css/UseCase.css";
import { Link } from "react-router-dom";
import "../../css/Cards.css";
import Usecase_data from "../../JSON/Usecase.json";
import { useEffect, useState } from "react";

const UseCase = () => {
    const [visible, setVisible] = useState(12);
    const [loadDisplay, setLoadDisplay] = useState(false);

    useEffect(() => {
        if (Usecase_data.length <= visible) {
            setLoadDisplay(true);
        }
    }, [visible]);

    const showMoreCards = () => {
        setVisible((preValue) => preValue + 6);
    };

    return (
        <div className="usecase_container">
            {/* CARDS DIV */}
            <div className="cards_outerDiv">
                {Usecase_data.slice(0, visible).map((data) => (
                    <div key={data.id} className="card">
                        <div className="line"></div>
                        <h1>{data.use_case}</h1>
                        <p>{data.description}</p>

                        <Link to={`/case/usecase/${data.id}`}>
                            <button>Read More</button>
                        </Link>
                    </div>
                ))}
            </div>
            {/* LOAD BUTTON */}
            <div className="load_button">
                <button
                    onClick={showMoreCards}
                    className="load_more_btn"
                    style={{ display: loadDisplay && "none" }}
                >
                    Load More
                </button>
            </div>
        </div>
    );
};

export default UseCase;
