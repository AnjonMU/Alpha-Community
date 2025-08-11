const express = require('express');
const Gellery = require('../models/gellery');


const gelleryController = async(req, res) => {
    const { title, Image } = req.body;

    try {
        const newGellery = new Gellery({
            title,
            Image
        });

        await newGellery.save();
        res.status(201).json({ message: 'Gellery created successfully', gellery: newGellery });
    } catch (error) {
        res.status(500).json({ message: 'Error creating gellery', error: error.message });
    }
}

const getGellery = async(req, res) => {
    try {
        const gellery = await Gellery.find();
        res.status(200).json(gellery);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching gellery', error: error.message });
    }
}

const deleteGellery = async(req, res) => {
    const { id } = req.params;

    try {
        const gellery = await Gellery.findByIdAndDelete(id);
        if (!gellery) {
            return res.status(404).json({ message: 'Gellery not found' });
        }
        res.status(200).json({ message: 'Gellery deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting gellery', error: error.message });
    }
}

const updateGellery = async(req, res) => {
    const { id } = req.params;
    const { title, Image } = req.body;

    try {
        const updatedGellery = await Gellery.findByIdAndUpdate(id, { title, Image }, { new: true });
        if (!updatedGellery) {
            return res.status(404).json({ message: 'Gellery not found' });
        }
        res.status(200).json({ message: 'Gellery updated successfully', gellery: updatedGellery });
    } catch (error) {
        res.status(500).json({ message: 'Error updating gellery', error: error.message });
    }
}

module.exports = {
    gelleryController,
    getGellery,
    deleteGellery,
    updateGellery
};