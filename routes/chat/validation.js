const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("inside the router validation");
});

router.post("/login", (req, res) => {});

router.post("/register", (req, res) => {});

router.post("/reset/email", async (req, res) => {
    let data = req.body;
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.SENDER,
            pass: process.env.EMAILPASSWORD,
        },
    });
    let mailOptions = {
        from: process.env.SENDER,
        to: data.email,
        subject: `OTP From Belatti Application`,
        text: `Greetings of the day this is the varification otp from the Belatti application \n\n Your OTP is ${otp}`,
    };
    transporter.sendMail(mailOptions);
    return res.json({ success: true });
});

router.post("/reset", (req, res) => {});

module.exports = router;
