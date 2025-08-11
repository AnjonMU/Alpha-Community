const Members = require('../models/members');
const createMember = async(req, res) => {
    const { name, image, degisnation } = req.body;

    try {
        const newMember = new Members({
            name,
            image,
            degisnation
        });

        await newMember.save();
        res.status(201).json({ message: 'Member created successfully', member: newMember });
    } catch (error) {
        res.status(500).json({ message: 'Error creating member', error: error.message });
    }
}
const getMembers = async(req, res) => {
    try {
        const members = await Members.find();
        res.status(200).json(members);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching members', error: error.message });
    }
}
const deleteMember = async(req, res) => {
    const { id } = req.params;

    try {
        const member = await Members.findByIdAndDelete(id);
        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }
        res.status(200).json({ message: 'Member deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting member', error: error.message });
    }
}
const updateMember = async(req, res) => {
    const { id } = req.params;
    const { name, image, degisnation } = req.body;

    try {
        const updatedMember = await Members.findByIdAndUpdate(id, { name, image, degisnation }, { new: true });
        if (!updatedMember) {
            return res.status(404).json({ message: 'Member not found' });
        }
        res.status(200).json({ message: 'Member updated successfully', member: updatedMember });
    } catch (error) {
        res.status(500).json({ message: 'Error updating member', error: error.message });
    }
}
module.exports = {
    createMember,
    getMembers,
    deleteMember,
    updateMember
};