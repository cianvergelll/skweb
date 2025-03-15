import React, { useState } from 'react';

export default function Certificates() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        birthday: '',
        status: '',
        age: '',
        years_living: '',
        sitio: '',
        purpose: ''
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
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
                <label>Birthday</label>
                <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} />
            </div>
            <div>
                <label>Status</label>
                <input type="text" name="status" value={formData.status} onChange={handleChange} />
            </div>
            <div>
                <label>Age</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} />
            </div>
            <div>
                <label>Years Living</label>
                <input type="number" name="years_living" value={formData.years_living} onChange={handleChange} />
            </div>
            <div>
                <label>Sitio Location</label>
                <input type="text" name="sitio" value={formData.sitio} onChange={handleChange} />
            </div>
            <div>
                <label>Purpose</label>
                <input type="text" name="purpose" value={formData.purpose} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};