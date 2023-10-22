import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const MyThemeContext = createContext();

const INITIAL_NIGHT_STATE = { nightmode: false };

const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            return {
                nightmode: !state.nightmode,
            };
        default:
            return state;
    }
};

export const ThemeContextProviderComponent = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_NIGHT_STATE);

    const value = {
        state,
        dispatch,
    };

    return (
        <MyThemeContext.Provider value={value}>
            {children}
        </MyThemeContext.Provider>
    );
};

ThemeContextProviderComponent.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ThemeContextProviderComponent;

// COPY AND PASTE THIS IN THE COMPONENT YOU WANT TO USE THE DARK & LIGHT MODE

// WRAPPE THE APP WITH

{
    /* theme context */
}

//  <ThemeContextProviderComponent>
//     </ThemeContextProviderComponent>

/*

      // theme context.............
      const theme = useContext(MyThemeContext);
      const night = theme.state.nightmode;
  
      //  const night = theme?.state?.nightmode; // Check if theme and its properties exist
  
      const handleToggleClick = () => {
          theme.dispatch({ type: "TOGGLE" });
      };


    //   THE BUTTON TOGGLE

    <div className="toggle_div">
                        <div
                            className="toggle_button"
                            onClick={handleToggleClick}
                        >
                            <p>Light</p>
                            <div
                                className="circle"
                                style={{ right: night && "32.5px" }}
                            ></div>
                            <p>Dark</p>
                        </div>
                    </div>



    //   THE STYLE 
     style={{
                        backgroundColor: night && "#040404",
                    }}

      */
