import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/common/footer/Footer";
import "./home_css/home.css";

const Home: React.FC<{ setCurrentPage: (page: string) => void }> = ({ setCurrentPage }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const navigate = useNavigate(); // Khởi tạo useNavigate

  // API call to fetch vehicle types
  useEffect(() => {
    // Fetch data from MockAPI
    fetch("https://67f8c5cf2466325443edbce8.mockapi.io/api/images/xe")
      .then((response) => response.json())
      .then((data) => setVehicleTypes(data))
      .catch((error) => console.error("Error fetching vehicle types:", error));
  }, []);

  const handleCardClick = () => {
    navigate("/busTicket"); // Điều hướng đến trang busTicket
  };

  return (
    <div className="home-page">
      <div className="home">
        {/* Navigation */}
        <Navbar />

        {/* Header */}
        <header className="header">
          <h1>Đặt vé xe khách trực tuyến</h1>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Nơi đi"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nơi đến"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <input
              type="date"
              placeholder="Ngày khởi hành"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <button>Tìm vé</button>
          </div>
        </header>
        {/* Main Content API */}
        <section className="vehicle-selection">
          <h2>Mua vé xe gì?</h2>
          <div className="vehicle-cards">
            {vehicleTypes.map((vehicle: any) => (
              <div
                key={vehicle.id}
                className="vehicle-card"
                onClick={handleCardClick} // Thêm sự kiện onClick
              >
                <img src={vehicle.image} alt={vehicle.name} />
                <h3>{vehicle.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <Footer year={2025} companyName="Ticket Car" />
      </div>
    </div>
  );
};

export default Home;