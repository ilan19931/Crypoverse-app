import React from 'react';
import { Spin } from "antd";

const Loader = () => {
    return (
        <div claaName="loader">
            <p>Loading Data... </p> <Spin />
        </div>);
};

export default Loader;
