import "../../css/EachCard.css";
import { useParams } from "react-router-dom";
import Card_data from "../../JSON/Usecase.json";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import SignUp from "../Pages/Auth/SignUp";
import headerImage from "../../assets/EachUseCase/header_bg.jpeg";

const EachCard = () => {
    // useParams and Access Data
    const { id } = useParams();
    const card = Card_data[id - 1];

    // auth context
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="EachCard_container">
            {currentUser ? (
                <div key={card.id} className="main_card_content">
                    <header style={{ backgroundImage: `url(${headerImage})` }}>
                        <h1>{card.use_case}</h1>
                    </header>
                    <div className="text_content">
                        <p>{card.description}</p>
                        <p className="example">Examples:</p>
                        <ul>
                            {card.examples.map((item_list) => (
                                <li key={item_list}>{item_list}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <SignUp />
            )}
        </div>
    );
};

export default EachCard;
