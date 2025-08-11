const Bokking = require('../models/booking');

const createBooking = async(req, res) => {
    const { name, email, eventName, date, description } = req.body;

    try {
        const newBooking = new Bokking({
            name,
            email,
            eventName,
            date,
            description
        });

        await newBooking.save();
        res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
    } catch (error) {
        res.status(500).json({ message: 'Error creating booking', error: error.message });
    }
}
const getBookings = async(req, res) => {
    try {
        const bookings = await Bokking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookings', error: error.message });
    }
}
const deleteBooking = async(req, res) => {
    const { id } = req.params;

    try {
        const booking = await Bokking.findByIdAndDelete(id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting booking', error: error.message });
    }
}
const updateBooking = async(req, res) => {
    const { id } = req.params;
    const { name, email, eventName, date, description } = req.body;

    try {
        const updatedBooking = await Bokking.findByIdAndUpdate(id, { name, email, eventName, date, description }, { new: true });
        if (!updatedBooking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json({ message: 'Booking updated successfully', booking: updatedBooking });
    } catch (error) {
        res.status(500).json({ message: 'Error updating booking', error: error.message });
    }
}
module.exports = {
    createBooking,
    getBookings,
    deleteBooking,
    updateBooking
};