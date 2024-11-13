// import React from "react";
import isPropValid from "@emotion/is-prop-valid";
import ReactDOM from "react-dom/client";
import { StyleSheetManager, WebTarget } from "styled-components";

import "./fonts.css";
import "./index.css";

import App from "./app/app";

// This implements the default behavior from styled-components v5
// Styled-components for ar-spatially-kit
function shouldForwardProp(propName: string, target: WebTarget) {
    if (typeof target === "string") {
        // For HTML elements, forward the prop if it is a valid HTML attribute
        return isPropValid(propName);
    }
    // For other elements, forward all props
    return true;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <App />
    </StyleSheetManager>,
    // </React.StrictMode>,
);
