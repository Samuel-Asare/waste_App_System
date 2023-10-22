import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import LearnData from "../../JSON/Learn.json";
import { AuthContext } from "../../context/AuthContextProvider";
import "../../css/Learn.css";
import "../../css/Learncard.css";

const Learn = () => {
    const [visible, setVisible] = useState(12);
    const [loadDisplay, setLoadDisplay] = useState(false);
    const [data, setData] = useState(LearnData);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        if (filter === "") {
            setData(LearnData);
        } else {
            const filteredData = LearnData.filter((item) =>
                item.project.toLowerCase().includes(filter.toLowerCase())
            );
            setData(filteredData);
            setLoadDisplay(true);
        }
    }, [filter]);

    useEffect(() => {
        if (LearnData.length <= visible) {
            setLoadDisplay(true);
        }
    }, [visible]);

    const showMoreCards = () => {
        setVisible((prevValue) => prevValue + 6);
    };

    const { currentUser } = useContext(AuthContext);

    return (
        <div className="learn_container">
            {currentUser ? (
                <>
                    <div className="search">
                        <input
                            type="text"
                            name="search"
                            placeholder="Filter By Search..."
                            onChange={(e) => setFilter(e.target.value)}
                            value={filter}
                        />
                    </div>
                    <div className="LearnCard_Wrapper">
                        {data.slice(0, visible).map((item) => (
                            <div key={item.id} className="card">
                                <div className="text-dev">
                                    <h5>{item.project}</h5>
                                    <p>{item.what_we_can_learn}</p>
                                    <Link to={`/case/learn/${item.id}`}>
                                        <button>Read More</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="load_button">
                        <button
                            onClick={showMoreCards}
                            className="load_more_btn"
                            style={{ display: loadDisplay ? "none" : "block" }}
                        >
                            Load More
                        </button>
                    </div>
                </>
            ) : (
                <SignUp />
            )}
        </div>
    );
};

export default Learn;
