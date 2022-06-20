// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css'

const Contact = ({ data }) => {
    const { name, email, phone, photo } = data;
    return (
        <div className="contact">
            <div className="contactAvatar">
                <img src={photo} alt={name} />
            </div>
            <div className="contactInfo">
                <p className="contactInfoContent">
                    <b>{name}</b>
                </p>
                <div className="contactContentDesc">
                    <p className="contactContentDesc">{phone}</p>
                    <p className="contactContentDesc">{email}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;