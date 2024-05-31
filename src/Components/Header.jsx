import { useEffect } from "react";

const Header = () => {
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1', { xhost: 'asd' })
    },[])
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

export default Header;