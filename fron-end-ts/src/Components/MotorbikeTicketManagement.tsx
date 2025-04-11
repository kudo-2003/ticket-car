import React, { useState } from "react";
import { Ticket } from "../model/Ticket";
import { mockTickets } from "../data/mockTickets";
import TicketTable from "./BusTicketManagement/TicketTable";
import TicketForm from "./BusTicketManagement/TicketForm";
import ChartContainer from "./BusTicketManagement/ChartContainer";

const MotorbikeTicketManagement: React.FC = () => {
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

    return (
        <div className="bus-ticket-management-container">
            <div className="bus-ticket-management">
                <h2>Danh sách vé xe ôm</h2>
                <button onClick={handleViewHistory} className="history-button">
                    {showHistory ? "Ẩn lịch sử" : "Xem lịch sử vé đã đặt"}
                </button>
                <TicketTable
                    tickets={tickets}
                    showHistory={showHistory}
                    searchQuery={searchQuery}
                    filterDate={filterDate}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onSearch={setSearchQuery}
                    onFilterDateChange={setFilterDate}
                />
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

export default MotorbikeTicketManagement;
