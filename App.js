import React from "react";
import ReactDOM from "react-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <p className="logo">Namaste Food</p>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="restaurant-card">
            <div className="restaurant-image">
                <img src="https://i.ibb.co/z4z4z4z/restaurant.jpg" alt="restaurant"/>
            </div>
            <div className="restaurant-info">
                <div className="restaurant-name">
                    <p>Namaste Food</p>
                </div>
                <div className="restaurant-rating">
                    <p>4.5</p>
                </div>
            </div>
        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">search</div>
            <div className="restaurant-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);