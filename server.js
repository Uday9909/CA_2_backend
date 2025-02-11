const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); 
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/signup', async (req, res) => {
    const { username, email, password, dateOfBirth } = req.body;

    
    if (!username) {
        return res.status(400).send('Username cannot be empty');
    }
    if (!email) {
        return res.status(400).send('Email cannot be empty');
    }
    if (password.length < 8 || password.length > 16) {
        return res.status(400).send('Password length should be greater than 8 or less than or equal to 16');
    }

    
    const newUser = new User({ username, email, password, dateOfBirth });
    try {
        await newUser.save();
        res.status(201).send('User created successfully');
    } catch (error) {
        res.status(500).send('Error creating user');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
