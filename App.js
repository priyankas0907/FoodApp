import React from "react";
import ReactDom from "react-dom/client";

const App = () => (
    <h1>My first Comp</h1>
);




const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>);