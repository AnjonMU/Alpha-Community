// Contact.js
import React, { useState } from 'react';
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaComments } from 'react-icons/fa';

const Contact = () => {
    const [feedback, setFeedback] = useState('');
    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        alert('Thanks for your feedback!');
        setFeedback('');
    };

    return ( <
        div className = "contact-container" >
        <
        h1 className = "contact-title" > < FaPhoneAlt / > Contact Us < /h1> <
        div className = "contact-info" >
        <
        p > < strong > Email: < /strong>  <
        a href = "https://mail.google.com/mail/?view=cm&fs=1&to=alphacommunity@gmail.com"
        target = "_blank"
        rel = "noopener noreferrer" >
        alphacommunity @gmail.com <
        /a> < /
        p >

        <
        p > < strong > Phone: < /strong> +8801XXXXXXXXX</p >

        <
        p > < strong > Location: < /strong>  <
        a href = "https://www.google.com/maps/dir//Sylhet+Metropolitan+University,+Pirer+bazar,+Sylhet+-+Tamabil+Hwy,+Bateshwar/@24.9301381,91.9704423,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3750552bc71c899d:0x804e438bcc32b390!2m2!1d91.9730172!2d24.9301381?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D"
        target = "_blank"
        rel = "noopener noreferrer" >
        View in Google Maps <
        /a> < /
        p > <
        /div>

        <
        form className = "feedback-form"
        onSubmit = { handleFeedbackSubmit } >
        <
        h2 > < FaComments / > Your Feedback < /h2> <
        textarea value = { feedback }
        onChange = {
            (e) => setFeedback(e.target.value)
        }
        placeholder = "Write your opinion here..."
        required /
        >
        <
        button type = "submit" > Submit < /button> < /
        form > <
        /div>
    );
};

export default Contact;