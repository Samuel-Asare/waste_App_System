import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RiseLoader from "react-spinners/RiseLoader";
import Header from "./Components/Header";
import AppRoutes from "./Routes";
import { useState, useLayoutEffect } from "react";

const App = () => {
    const [loader, setLoader] = useState(true);

    useLayoutEffect(() => {
        setLoader(true);

        setTimeout(() => {
            setLoader(false);
        }, 3000);
    }, []);

    return (
        <div className="App">
            {loader ? (
                <div className="loading-space">
                    <RiseLoader
                        color={"#646cff"}
                        loading={loader}
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            ) : (
                <div>
                    <Header />
                    <AppRoutes />
                </div>
            )}
        </div>
    );
};

export default App;
