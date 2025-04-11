import React, { useState, useEffect } from "react";
import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/common/footer/Footer";
import "./bus_ticket_css/bus_ticket.css";

const BusTicket: React.FC<{ setCurrentPage: (page: string) => void }> = ({ setCurrentPage }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [trips, setTrips] = useState([]);

  // API GET
  useEffect(() => {
    fetch("https://67f8c5cf2466325443edbce8.mockapi.io/api/images/tickets") // Thay bằng endpoint của bạn
      .then((response) => response.json())
      .then((data) => setTrips(data))
      .catch((error) => console.error("Error fetching trips:", error));
  }, []);

  const handleSearch = () => {
    alert(`Tìm vé từ ${from} đến ${to} vào ngày ${date}`);
    // Thêm logic tìm kiếm vé ở đây
  };

  return (
    <div className="bus-ticket-page">
      <Navbar />
      <header className="bus-ticket-header">
        <h1>Mua vé xe bus</h1>
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
          <button onClick={handleSearch}>Tìm vé</button>
        </div>
      </header>
      <div className="ticket-cards">
        {trips.map((trip: any) => (
          <div key={trip.id} className="ticket-card">
            <img src={trip.image} alt={trip.route} className="ticket-image" />
            <p>
              <strong>{trip.route}</strong>
            </p>
            <p>Số chỗ: {trip.seats}</p>
            <p>Ngày giờ: {trip.dateTime}</p>
            <p>Thời gian đi: {trip.duration}</p>
            <p>Đánh giá: {trip.rating} ★</p>
            <button>{trip.price}</button>
          </div>
        ))}
      </div>
      <Footer year={2025} companyName="Ticket Car" />
    </div>
  );
};

export default BusTicket;