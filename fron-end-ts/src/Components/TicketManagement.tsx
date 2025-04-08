import React, { useState } from "react";
import busbutton from "../images/button/button_bus.png";
import khachbutton from "../images/button/button_khach.png";
import dulichbutton from "../images/button/button_du_lich.png";
import taxibutton from "../images/button/button_taxi.png";
import motorbikebutton from "../images/button/button_motorbike.png";
import BusTicketManagement from "./BusTicketManagement";
import CoachTicketManagement from "./CoachTicketManagement";
import TourTicketManagement from "./TourTicketManagement";
import TaxiTicketManagement from "./TaxiTicketManagement";
import MotorbikeTicketManagement from "./MotorbikeTicketManagement";
import "../Styles/TicketManagement.css";

const TicketManagement: React.FC = () => {
    const [activeComponent, setActiveComponent] = useState<string>("");

    const handleButtonClick = (component: string) => {
        setActiveComponent(component);
    };

    if (activeComponent === "bus") {
        return <BusTicketManagement />;
    }

    if (activeComponent === "coach") {
        return <CoachTicketManagement />;
    }

    if (activeComponent === "tour") {
        return <TourTicketManagement />;
    }

    if (activeComponent === "taxi") {
        return <TaxiTicketManagement />;
    }

    if (activeComponent === "motorbike") {
        return <MotorbikeTicketManagement />;
    }

    return (
        <div className="ticket-management">
            <nav className="navbar">
                <div className="navbar-left">
                    <button className="menu-button">☰</button>
                    <div className="search-bar">
                        <input type="text" placeholder="Search Ticket" />
                        <button className="search-button">🔍</button>
                    </div>
                </div>
                <div className="navbar-center">
                    <a href="#" className="nav-link">USER CENTER</a>
                    <a href="#" className="nav-link">RESERVATIONS</a>
                    <a href="#" className="nav-link">USER RECORD</a>
                </div>
                <div className="navbar-right">
                    <button className="user-button">User</button>
                    <button className="menu-button">☰</button>
                </div>
            </nav>
            <div className="content">
                <div className="management-categories">
                    <div className="category-buttons">
                        <button
                            className="category-button"
                            onClick={() => handleButtonClick("bus")}
                        >
                            <img src={busbutton} alt="Bus Icon" />
                            Quản lý vé xe bus
                        </button>
                        <button
                            className="category-button"
                            onClick={() => handleButtonClick("coach")}
                        >
                            <img src={khachbutton} alt="Coach Icon" />
                            Quản lý vé xe khách
                        </button>
                        <button
                            className="category-button"
                            onClick={() => handleButtonClick("tour")}
                        >
                            <img src={dulichbutton} alt="Tour Icon" />
                            Quản lý vé xe du lịch
                        </button>
                        <button
                            className="category-button"
                            onClick={() => handleButtonClick("taxi")}
                        >
                            <img src={taxibutton} alt="Taxi Icon" />
                            Quản lý vé xe taxi
                        </button>
                        <button
                            className="category-button"
                            onClick={() => handleButtonClick("motorbike")}
                        >
                            <img src={motorbikebutton} alt="Bike Icon" />
                            Quản lý xe ôm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketManagement;
