import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
    render() {
        const menus = (
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/product">Product</Link>
                </li>
            </ul>
        );
        return (
            <>
                <div>Home component</div>
                {menus}
            </>
        );
    }
}