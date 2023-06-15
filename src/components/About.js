import React from "react";
import { Outlet } from "react-router-dom";

export default class About extends React.Component {
    render() {
        return (
            <div>
                <div>About component</div>
                <Outlet />
            </div>
        );
    }
}