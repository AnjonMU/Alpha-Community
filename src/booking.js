import React from 'react';

function Booking() {
    return ( <
        div className = "booking-container" >
        <
        h2 > Book Us
        for Your Event < /h2> <
        form className = "booking-form" >
        <
        input type = "text"
        placeholder = "Your Name"
        required / >
        <
        input type = "email"
        placeholder = "Your Email"
        required / >
        <
        input type = "text"
        placeholder = "Event Name"
        required / >
        <
        input type = "date"
        required / >
        <
        textarea placeholder = "Message"
        rows = "4" > < /textarea> <
        button type = "submit" > Submit Booking < /button> < /
        form > <
        /div>
    );
}

export default Booking;