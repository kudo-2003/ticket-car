import React, { useState } from "react";
import { Ticket } from "../model/Ticket";
import { defaultCar, defaultBuyer } from "../data/defaultValues";
import { mockTickets } from "../data/mockTickets";
import TicketForm from "./BusTicketManagement/TicketForm"; // Import TicketForm

const CoachTicketManagement: React.FC = () => {
    const [tickets, setTickets] = useState<Ticket[]>(mockTickets);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [formMode, setFormMode] = useState<"add" | "edit">("add");
    const [currentTicket, setCurrentTicket] = useState<Ticket | null>(null);
    const [showHistory, setShowHistory] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterDate, setFilterDate] = useState(() => {
        const today = new Date();
        return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;
    });

    const handleAdd = () => {
        setFormMode("add");
        setCurrentTicket(null);
        setIsFormVisible(true);
    };

    const handleEdit = (ticket: Ticket) => {
        setFormMode("edit");
        setCurrentTicket(ticket);
        setIsFormVisible(true);
    };

    const handleDelete = (ticketId: number) => {
        setTickets(tickets.filter((ticket) => ticket.ticketId !== ticketId));
    };

    const handleFormSubmit = (ticket: Ticket) => {
        if (formMode === "add") {
            setTickets([...tickets, { ...ticket, ticketId: tickets.length + 1 }]);
        } else if (formMode === "edit" && currentTicket) {
            setTickets(
                tickets.map((t) =>
                    t.ticketId === currentTicket.ticketId ? ticket : t
                )
            );
        }
        setIsFormVisible(false);
    };

    const handleViewHistory = () => {
        setShowHistory(!showHistory);
    };

    const handleViewChart = () => {
        alert("Xem biểu đồ vé đã mua, vé đã hủy và doanh thu tiền trong tháng/năm.");
    };

    const today = new Date();
    const pastTickets = tickets.filter((ticket) => ticket.travelDate < today);

    const filteredTickets = pastTickets.filter((ticket) => {
        const matchesSearch = ticket.passengerName
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        const matchesDate = filterDate
            ? ticket.travelDate.toISOString().startsWith(filterDate)
            : true;
        return matchesSearch && matchesDate;
    });

    return (
        <div className="bus-ticket-management-container">
            <div className="bus-ticket-management">
                <h2>Danh sách vé xe khách</h2>
                <button onClick={handleViewHistory} className="history-button">
                    {showHistory ? "Ẩn lịch sử" : "Xem lịch sử vé đã đặt"}
                </button>
                {!showHistory && (
                    <>
                        <button onClick={handleAdd} className="add-button">Thêm vé</button>
                        <table>
                            <thead>
                                <tr>
                                    <th>Mã vé</th>
                                    <th>Tên hành khách</th>
                                    <th>Ngày đi</th>
                                    <th>Điểm khởi hành</th>
                                    <th>Điểm đến</th>
                                    <th>Giá vé</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tickets.map((ticket) => (
                                    <tr key={ticket.ticketId}>
                                        <td>{ticket.ticketId}</td>
                                        <td>{ticket.passengerName}</td>
                                        <td>{ticket.travelDate.toISOString().split("T")[0]}</td>
                                        <td>{ticket.departure}</td>
                                        <td>{ticket.destination}</td>
                                        <td>{ticket.price}</td>
                                        <td>
                                            <button
                                                onClick={() => handleEdit(ticket)}
                                                className="edit-button"
                                            >
                                                Sửa
                                            </button>
                                            <button
                                                onClick={() => handleDelete(ticket.ticketId)}
                                                className="delete-button"
                                            >
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
                {showHistory && (
                    <div className="ticket-history">
                        <h3>Lịch sử vé đã đặt</h3>
                        <div className="history-filters">
                            <input
                                type="text"
                                placeholder="Tìm kiếm theo tên hành khách"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <input
                                type="month"
                                value={filterDate}
                                onChange={(e) => setFilterDate(e.target.value)}
                            />
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Mã vé</th>
                                    <th>Tên hành khách</th>
                                    <th>Ngày đi</th>
                                    <th>Điểm khởi hành</th>
                                    <th>Điểm đến</th>
                                    <th>Giá vé</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTickets.map((ticket) => (
                                    <tr key={ticket.ticketId}>
                                        <td>{ticket.ticketId}</td>
                                        <td>{ticket.passengerName}</td>
                                        <td>{ticket.travelDate.toISOString().split("T")[0]}</td>
                                        <td>{ticket.departure}</td>
                                        <td>{ticket.destination}</td>
                                        <td>{ticket.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {isFormVisible && (
                    <TicketForm
                        mode={formMode}
                        ticket={currentTicket}
                        onSubmit={handleFormSubmit}
                        onCancel={() => setIsFormVisible(false)}
                    />
                )}
            </div>
            <div className="chart-container">
                <h2>Thống kê</h2>
                <button onClick={handleViewChart} className="chart-button">
                    Xem biểu đồ
                </button>
            </div>
        </div>
    );
};

export default CoachTicketManagement;
