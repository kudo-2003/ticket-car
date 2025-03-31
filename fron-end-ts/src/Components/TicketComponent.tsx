import React from 'react';
import { Ticket } from '../model/Ticket';

interface TicketProps {
    ticket: Ticket;
}

const TicketComponent: React.FC<TicketProps> = ({ ticket }) => {
    return (
        <div>
            <h2>Thông tin vé</h2>
            <p>Mã vé: {ticket.ticketId}</p>
            <p>Tên hành khách: {ticket.passengerName}</p>
            <p>Ngày đi: {ticket.travelDate.toDateString()}</p>
            <p>Điểm khởi hành: {ticket.departure}</p>
            <p>Điểm đến: {ticket.destination}</p>
            <p>Giá vé: {ticket.price}</p>
        </div>
    );
};

export default TicketComponent;
