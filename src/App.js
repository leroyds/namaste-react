import React from "react";
import ReactDOM from "react-dom";
import Test from "./Components/Test";
import Header from "./Components/Header";
import Body from "./Components/Body";

const AppLayout = () => {
    return (
        <div className="app">
            {/* <Header/>
            <Body/> */}
            <Test/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);