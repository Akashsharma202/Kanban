import React, { useState } from "react";
import "../CSS/Home.css";
import settingsImage from "../Img/settings.png";
import cancelImage from "../Img/cancel.png";

const Home = (props) => {
    const [selectedValue, setSelectedValue] = useState("");
    const [group, setGroup] = useState("");
    const [order, setOrder] = useState("");
    const [flag, setFlag] = useState(false);

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleSelectGroup = (event) => {
        const selectedGroup = event.target.value;
        setGroup(selectedGroup);
        props.setGroup(selectedGroup);
        localStorage.setItem("group", selectedGroup);
    };

    const handleSelectOrder = (event) => {
        const selectedOrder = event.target.value;
        setOrder(selectedOrder);
        props.setOrder(selectedOrder);
        localStorage.setItem("order", selectedOrder);
    };

    const handleonClick = () => {
        setFlag((prevFlag) => !prevFlag);
    };

    return (
        <div className="container">
            <button className="btn" onClick={handleonClick}>
                <img className="setting" src={settingsImage} width={"40px"} alt="Settings"></img>
                <p className="para">Display</p>
            </button>
            <div className="Outer" style={flag ? { display: "block" } : { display: "none" }}>
                <div style={{ display: "grid" }}>
                    <img className="cancel" src={cancelImage} width={"20px"} alt="Cancel" onClick={handleonClick}></img>
                </div>
                <div className="Inner">
                    <p>Grouping</p>
                    <select id="grouping" value={group} onChange={handleSelectGroup}>
                        <option value="status">Status</option>
                        <option value="user">User</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>
                <div className="Inner">
                    <p>Ordering</p>
                    <select id="ordering" value={order} onChange={handleSelectOrder}>
                        <option value="priority">Priority</option>
                        <option value="title">Title</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Home;
    