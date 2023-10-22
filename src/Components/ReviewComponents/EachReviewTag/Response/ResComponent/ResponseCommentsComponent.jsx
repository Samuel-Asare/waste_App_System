import { useMemo, useState } from "react";
import "../../../../../css/ResponseContentSection.css";
import {
    collection,
    onSnapshot,
    getDocs,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { db } from "../../../../../Firebase/firebase";

const formatDate = (timestamp) => {
    const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    };
    return new Date(timestamp.seconds * 1000).toLocaleString(
        undefined,
        options
    );
};

const ResponseCommentsComponent = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useMemo(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(
                    collection(db, "ResponseTime_Review")
                );
                const newData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                // Sort the data by timestamp in ascending order
                newData.sort(
                    (a, b) => a.timeStamp.seconds - b.timeStamp.seconds
                );
                setData(newData);
            } catch (error) {
                setError(error.message);
            }
        };

        const unsubscribe = onSnapshot(
            collection(db, "ResponseTime_Review"),
            () => {
                fetchData();
            }
        );

        fetchData(); // Fetch initial data

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, []);

    async function deleteData(idnum) {
        await deleteDoc(doc(db, "ResponseTime_Review", idnum));
    }

    return (
        <>
            <div className="commented_div">
                {error && <p className="error_message">Error: {error}</p>}
                {data.length > 0 ? (
                    <div>
                        {data.map((item) => (
                            <div className="text" key={item.id}>
                                {item.message}
                                <div className="details">
                                    <div className="timeStamp">
                                        <div className="options_div">
                                            <svg
                                                width={15}
                                                height={15}
                                                fill="none"
                                                stroke="goldenrod"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1}
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                onClick={() =>
                                                    deleteData(item.id)
                                                }
                                            >
                                                <path d="m5.25 5.25.938 15c.044.867.675 1.5 1.5 1.5h8.625c.828 0 1.447-.633 1.5-1.5l.937-15" />
                                                <path d="M3.75 5.25h16.5" />
                                                <path d="M9 5.25V3.375a1.122 1.122 0 0 1 1.125-1.125h3.75A1.121 1.121 0 0 1 15 3.375V5.25" />
                                                <path d="M12 8.25v10.5" />
                                                <path d="M8.625 8.25 9 18.75" />
                                                <path d="M15.375 8.25 15 18.75" />
                                            </svg>
                                        </div>
                                        <span className="time">
                                            {formatDate(item.timeStamp)}
                                        </span>
                                    </div>
                                    <div className="by">
                                        <p> {item.user}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No Response Reviews Available.</p>
                )}
            </div>
        </>
    );
};

export default ResponseCommentsComponent;
