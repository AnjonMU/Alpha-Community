import React, { useEffect, useState } from 'react';
import './Events.css';
import event1 from './media/upcomming event/event1.jpeg';
import event2 from './media/upcomming event/event2.jpeg';
import event3 from './media/upcomming event/event3.jpeg';
import event4 from './media/upcomming event/event4.jpeg';
import event5 from './media/upcomming event/event5.jpeg';

const initialEvents = [{
        id: 1,
        name: 'Winter Carnival',
        image: event1,
        date: '2025-12-20T00:00:00',
    },
    {
        id: 2,
        name: 'Blust Night With Alpha Community',
        image: event2,
        date: '2025-10-05T00:00:00',
    },
    {
        id: 3,
        name: 'Drama Festival',
        image: event3,
        date: '2025-07-10T00:00:00',
    },
    {
        id: 4,
        name: 'Music Fiesta',
        image: event4,
        date: '2025-05-22T00:00:00',
    },
    {
        id: 5,
        name: 'Cultural Night',
        image: event5,
        date: '2025-02-15T00:00:00',
    },
];

const getTimeRemaining = (dateString) => {
    const now = new Date();
    const eventDate = new Date(dateString);
    const diff = eventDate - now;

    if (diff <= 0) return null;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    return `${days}d ${hours}h ${minutes}m`;
};

const Events = () => {
    const [going, setGoing] = useState({});
    const [interested, setInterested] = useState({});
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const now = new Date();
        const updatedEvents = initialEvents.map((event) => ({
            ...event,
            status: new Date(event.date) < now ? 'Past' : 'Upcoming',
        }));
        setEvents(updatedEvents);
    }, []);

    const toggle = (id, type) => {
        if (type === 'going') {
            setGoing((prev) => ({
                ...prev,
                [id]: prev[id] ? prev[id] - 1 : 1,
            }));
        } else {
            setInterested((prev) => ({
                ...prev,
                [id]: prev[id] ? prev[id] - 1 : 1,
            }));
        }
    };

    const upcomingEvents = events.filter((event) => event.status === 'Upcoming');
    const pastEvents = events.filter((event) => event.status === 'Past');

    return ( <
        div className = "events-page" >
        <
        h1 className = "page-title" > 📅Our Stunning Events < /h1>

        { /* UPCOMING EVENTS */ } <
        div className = "section-title" > 🔥Upcoming Events < /div> <
        div className = "events-grid" > {
            upcomingEvents.map((event) => ( <
                div key = { event.id }
                className = "event-card upcoming" >
                <
                img src = { event.image }
                alt = { event.name }
                className = "event-img" / >
                <
                h2 > { event.name } < /h2> <
                p className = "event-date" > 📍{ new Date(event.date).toDateString() } < /p> <
                p className = "countdown" > ⏳{ getTimeRemaining(event.date) } < /p>

                <
                div className = "btn-group" >
                <
                button className = { `btn going ${going[event.id] ? 'active' : ''}` }
                onClick = {
                    () => toggle(event.id, 'going')
                } > 👍Going { going[event.id] || 0 } <
                /button> <
                button className = { `btn interested ${interested[event.id] ? 'active' : ''}` }
                onClick = {
                    () => toggle(event.id, 'interested')
                } > ⭐Interested { interested[event.id] || 0 } <
                /button> < /
                div > <
                /div>
            ))
        } <
        /div>

        { /* PAST EVENTS */ } <
        div className = "section-title" > 📜Past Events < /div> <
        div className = "events-grid" > {
            pastEvents.map((event) => ( <
                div key = { event.id }
                className = "event-card past" >
                <
                img src = { event.image }
                alt = { event.name }
                className = "event-img" / >
                <
                h2 > { event.name } < /h2> <
                p className = "event-date" > 📍{ new Date(event.date).toDateString() } < /p> <
                p className = "past-label" > ✅Completed < /p> < /
                div >
            ))
        } <
        /div> < /
        div >
    );
};

export default Events;