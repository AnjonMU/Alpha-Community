//create event controller
const express = require('express');
const Event = require('../models/event');
const createEvent = (req, res) => {
    const { title, date, location, description, image } = req.body;

    const newEvent = new Event({
        title,
        date,
        location,
        description,
        image
    });

    newEvent.save()
        .then(event => res.status(201).json({ message: 'Event created successfully', event }))
        .catch(err => res.status(500).json({ message: 'Error creating event', error: err.message }));

}
const getEvents = (req, res) => {
    Event.find()
        .then(events => res.status(200).json(events))
        .catch(err => res.status(500).json({ message: 'Error fetching events', error: err.message }));
}

module.exports = {
    createEvent,
    getEvents
};