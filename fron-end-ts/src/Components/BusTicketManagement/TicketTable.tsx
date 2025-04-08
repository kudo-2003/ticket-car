import React from "react";
import { Ticket } from "../../model/Ticket";

interface TicketTableProps {
    tickets: Ticket[];
    showHistory: boolean;
    searchQuery: string;
    filterDate: string;
    onEdit: (ticket: Ticket) => void;
    onDelete: (ticketId: number) => void;
    onSearch: (query: string) => void;
    onFilterDateChange: (date: string) => void;
}

const TicketTable: React.FC<TicketTableProps> = ({
    tickets,
    showHistory,
    searchQuery,
    filterDate,
    onEdit,
    onDelete,
    onSearch,
    onFilterDateChange,
}) => {
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
        <>
            {!showHistory && (
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
                                        onClick={() => onEdit(ticket)}
                                        className="edit-button"
                                    >
                                        Sửa
                                    </button>
                                    <button
                                        onClick={() => onDelete(ticket.ticketId)}
                                        className="delete-button"
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {showHistory && (
                <div className="ticket-history">
                    <h3>Lịch sử vé đã đặt</h3>
                    <div className="history-filters">
                        <input
                            type="text"
                            placeholder="Tìm kiếm theo tên hành khách"
                            value={searchQuery}
                            onChange={(e) => onSearch(e.target.value)}
                        />
                        <input
                            type="month"
                            value={filterDate}
                            onChange={(e) => onFilterDateChange(e.target.value)}
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
        </>
    );
};

export default TicketTable;
