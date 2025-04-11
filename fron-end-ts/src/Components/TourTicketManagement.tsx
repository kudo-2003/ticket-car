import React, { useState } from "react";
import { Ticket } from "../model/Ticket";
import { mockTickets } from "../data/mockTickets";
import TicketForm from "./BusTicketManagement/TicketForm";
import ChartContainer from "./BusTicketManagement/ChartContainer";

const TourTicketManagement: React.FC = () => {
    const [tickets, setTickets] = useState<Ticket[]>(mockTickets);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [formMode, setFormMode] = useState<"add" | "edit">("add");
    const [currentTicket, setCurrentTicket] = useState<Ticket | null>(null);
    const [showHistory, setShowHistory] = useState(false);

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

    return (
        <div className="bus-ticket-management-container">
            <div className="bus-ticket-management">
                <h2>Danh sách vé xe du lịch</h2>
                <button onClick={() => setShowHistory(!showHistory)} className="history-button">
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
                                            <button onClick={() => handleEdit(ticket)} className="edit-button">Sửa</button>
                                            <button onClick={() => handleDelete(ticket.ticketId)} className="delete-button">Xóa</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
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
                <ChartContainer />
            </div>
        </div>
    );
};

export default TourTicketManagement;
