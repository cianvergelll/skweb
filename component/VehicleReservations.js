import React, { useState } from 'react';

const VehicleReservations = () => {
    const [formData, setFormData] = useState({
        phone_number: '',
        vehicle_type: '',
        destination: '',
        purpose: '',
        date: '',
        time: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="phone_number">Phone Number</label>
                <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="vehicle_type">Vehicle Type</label>
                <select
                    id="vehicle_type"
                    name="vehicle_type"
                    value={formData.vehicle_type}
                    onChange={handleChange}
                >
                    <option value="">Select a vehicle type</option>
                    <option value="L300_B8">L300_B8</option>
                    <option value="L300_B9">L300_B9</option>
                    <option value="CoasterBus">CoasterBus</option>
                </select>
            </div>
            <div>
                <label htmlFor="destination">Destination</label>
                <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="purpose">Purpose</label>
                <input
                    type="text"
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="time">Time</label>
                <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default VehicleReservations;