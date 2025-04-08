import React, { useState } from "react";
import { Ticket } from "../../model/Ticket";
import { defaultCar, defaultBuyer } from "../../data/defaultValues";

interface TicketFormProps {
    mode: "add" | "edit";
    ticket: Ticket | null;
    onSubmit: (ticket: Ticket) => void;
    onCancel: () => void;
}

const TicketForm: React.FC<TicketFormProps> = ({ mode, ticket, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState<Ticket>(
        ticket || {
            ticketId: 0,
            passengerName: "",
            travelDate: new Date(),
            departure: "",
            destination: "",
            price: 0,
            car: defaultCar,
            buyer: defaultBuyer,
        }
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === "travelDate" ? new Date(value) : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="ticket-form-overlay">
            <div className="ticket-form">
                <h3>{mode === "add" ? "Thêm vé mới" : "Chỉnh sửa vé"}</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        Tên hành khách:
                        <input
                            type="text"
                            name="passengerName"
                            value={formData.passengerName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Ngày đi:
                        <input
                            type="date"
                            name="travelDate"
                            value={formData.travelDate.toISOString().split("T")[0]}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Điểm khởi hành:
                        <input
                            type="text"
                            name="departure"
                            value={formData.departure}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Điểm đến:
                        <input
                            type="text"
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Giá vé:
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <div className="form-actions">
                        <button type="submit">Lưu</button>
                        <button type="button" onClick={onCancel}>
                            Hủy
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TicketForm;
