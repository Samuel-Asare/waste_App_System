import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import { UserInputProvider } from "./context/RequestServiceContextProvider.jsx";
import { ReviewsProvider } from "./context/ReviewsContext.jsx";
import { ContactUsProvider } from "./context/ContactContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            {/* auth context */}
            <AuthContextProvider>
                <UserInputProvider>
                    <ReviewsProvider>
                        <ContactUsProvider>
                            <App />
                        </ContactUsProvider>
                    </ReviewsProvider>
                </UserInputProvider>
            </AuthContextProvider>
            {/* end auth context */}

            {/* end theme context */}
        </BrowserRouter>
    </React.StrictMode>
);
