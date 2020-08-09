require('dotenv').config();
const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD 
    }
});

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: 'blackillerz74@gmail.com',
        to: email, // TODO: the receiver email
        subject,
        text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

module.exports = sendMail;
