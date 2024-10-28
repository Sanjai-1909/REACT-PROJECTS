import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const validate = () => {
        let tempErrors = {};
        if (!form.name) tempErrors.name = 'Name is required';
        if (!form.email) tempErrors.email = 'Email is required';
        if (!form.message) tempErrors.message = 'Message is required';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(form);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} />
                {errors.name && <div>{errors.name}</div>}
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} />
                {errors.email && <div>{errors.email}</div>}
            </div>
            <div>
                <label>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} />
                {errors.message && <div>{errors.message}</div>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
