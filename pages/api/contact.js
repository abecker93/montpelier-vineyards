export default function (req, res) {

    console.log("req", req);
    console.log("res", res);

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: "proxymvineyardsforwarder@gmail.com",
            pass: process.env.NODEMAILER_PASS,
        },
        secure: true,
    });

    const mailOptions = {
        from: '',
        to: 'andrewbecker93@gmail.com',
        subject: '',
        html: ''
    }
    transporter.sendMail(mailOptions, function (err, info) {
    if(err)
        console.log(err)
    else
        console.log(info);
    });
}