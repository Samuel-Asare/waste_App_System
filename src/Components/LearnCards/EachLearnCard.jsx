import "../../css/EachLearnCard.css";
import { useParams } from "react-router-dom";
import LearnData from "../../JSON/Learn.json";

const EachLearnCard = () => {
    // useParams and Access Data
    const { id } = useParams();
    const card = LearnData[id - 1];

    return (
        <div className="EachLearnCard_container">
            <div key={card.id} className="main_card_content">
                <header>
                    <div className="text">
                        <h1>{card.project}</h1>
                        <p>{card.what_we_can_learn}</p>
                    </div>
                </header>
                <div className="text_content">
                    <p>{card.long_description}</p>
                    <p className="step">Steps:</p>
                    <ul>
                        {card.steps.map((item_list) => (
                            <li key={item_list}>{item_list}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EachLearnCard;
