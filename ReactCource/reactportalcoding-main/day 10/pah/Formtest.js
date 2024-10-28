import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from '../Form';

test('displays name when entered', () => {
    render(<Form onSubmit={jest.fn()} />);
    const input = screen.getByLabelText(/name/i);
    fireEvent.change(input, { target: { value: 'John Doe' } });
    expect(input.value).toBe('John Doe');
});

test('displays email when entered', () => {
    render(<Form onSubmit={jest.fn()} />);
    const input = screen.getByLabelText(/email/i);
    fireEvent.change(input, { target: { value: 'john@example.com' } });
    expect(input.value).toBe('john@example.com');
});

test('displays message when entered', () => {
    render(<Form onSubmit={jest.fn()} />);
    const textarea = screen.getByLabelText(/message/i);
    fireEvent.change(textarea, { target: { value: 'Hello, this is a message.' } });
    expect(textarea.value).toBe('Hello, this is a message.');
});

test('calls onSubmit with correct user information', () => {
    const handleSubmit = jest.fn();
    render(<Form onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello, this is a message.' } });

    fireEvent.click(screen.getByText(/submit/i));
    expect(handleSubmit).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello, this is a message.'
    });
});

test('shows error when required fields are empty', () => {
    render(<Form onSubmit={jest.fn()} />);
    fireEvent.click(screen.getByText(/submit/i));

    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/message is required/i)).toBeInTheDocument();
});
