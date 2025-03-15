import React, { useState } from 'react';

const Partnerships = () => {
    const [formData, setFormData] = useState({
        phone_number: '',
        company_name: '',
        company_address: '',
        company_email: '',
        company_phone_number: '',
        area_of_participation: '',
        company_partnership_purpose: '',
        file: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'file' ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="phone_number">Phone Number</label>
                <input type="tel" id="phone_number" name="phone_number" value={formData.phone_number} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="company_name">Company Name</label>
                <input type="text" id="company_name" name="company_name" value={formData.company_name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="company_address">Company Address</label>
                <input type="text" id="company_address" name="company_address" value={formData.company_address} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="company_email">Company Email</label>
                <input type="email" id="company_email" name="company_email" value={formData.company_email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="company_phone_number">Company Phone Number</label>
                <input type="tel" id="company_phone_number" name="company_phone_number" value={formData.company_phone_number} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="area_of_participation">Area of Participation</label>
                <select id="area_of_participation" name="area_of_participation" value={formData.area_of_participation} onChange={handleChange}>
                    <option value="Environment">Environment</option>
                    <option value="Education">Education</option>
                    <option value="Health">Health</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Economic Empowerment">Economic Empowerment</option>
                    <option value="Governance">Governance</option>
                    <option value="Peace Building">Peace Building</option>
                    <option value="Social Inclusion">Social Inclusion</option>
                </select>
            </div>
            <div>
                <label htmlFor="company_partnership_purpose">Company Partnership Purpose</label>
                <input type="text" id="company_partnership_purpose" name="company_partnership_purpose" value={formData.company_partnership_purpose} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="file">Proposal Letter/Plan</label>
                <input type="file" id="file" name="file" onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Partnerships;