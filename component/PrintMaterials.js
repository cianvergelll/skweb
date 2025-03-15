import React, { useState } from 'react';

export default function PrintMaterials() {
    const [formData, setFormData] = useState({
        phone_number: '',
        file: null,
        copies: 1,
        type: 'Colored'
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
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
                <label htmlFor="file">File</label>
                <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="copies">Number of Copies</label>
                <input
                    type="number"
                    id="copies"
                    name="copies"
                    value={formData.copies}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="type">Type of Print</label>
                <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                >
                    <option value="Colored">Colored</option>
                    <option value="B&W">B&W</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};