const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
exports.register = async(req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const username = name;

        const newUser = new User({
            name,
            email,
            username,
            password: hashedPassword,

        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', username });

    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.login = async(req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '10h' });
        console.log("Token generated:", token);

        res.status(200).json({
            success: true,
            message: 'Login successful',
            token: token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                username: user.username,
                role: user.role,

            }
        });

    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.userController = async(req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}