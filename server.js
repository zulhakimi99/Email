// Chunk 1
require('dotenv').config();
const express = require('express');
const path = require('path');
const sendMail1 = require('./mail');
const { log } = console;
const app = express();

const PORT = 8080;



// Data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


app.post('/email', (req, res) => {
    const { subject, email, text } = req.body;
    log('Data: ', req.body);

    sendMail1(email, subject, text, function(err, data) {
        if (err) {
            return console.log('Error occurs',err );
        }
        return console.log('Message sent!!!');
    });
});


app.post('/email2', (req, res) => {
    const { subject, email, text } = req.body;
    log('Data: ', req.body);

    sendMail1(email, subject, text, function(err, data) {
        if (err) {
            return console.log('Error occurs',err );
        }
        return console.log('Message sent!!!');
    });
});

// email, subject, text
app.post('/email1', (req, res) => {
    const { subject, email, text } = req.body;
    log('Data: ', req.body);

    sendMail1(email, subject, text, function(err, data) {
        if (err) {
            return console.log('Error occurs',err );
        }
        return console.log('Message sent!!!');
    });
});


app.post('/email', (req, res) => {
    const { subject, email, text } = req.body;
    log('Data: ', req.body);

    sendchangenotify(email, subject, text ,function(err, data) {
        if (err) {
            return console.log('Error occurs',err );
        }
        return console.log('Message sent!!!');
    });
});



// Booking Information
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'bookinginformation.html'));
});


// Render Reminder
app.get('/reminder', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'reminder.html'));
});

// Render Change Notification
app.get('/changenofity', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'changenotify.html'));
});

// Error page
app.get('/error', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'error.html'));
});


// Booking sent page
app.get('/booking/sent', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'bookingsent.html'));
});




// Start server
app.listen(PORT, () => log('Server is starting on PORT, ', 8080));