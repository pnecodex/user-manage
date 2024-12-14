const nodemailer = require('nodemailer');
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const nodemailerSendgrid = require('nodemailer-sendgrid');
const transport = nodemailer.createTransport({
    // nodemailerSendgrid({
    //     apiKey: process.env.SENDGRID_API_KEY
    // })
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    service: "gmail",
    auth: {
        user: 'adnanmalika918@gmail.com',
        pass: "as55as18as",
        // user:process.env.EMAIL,
        // pass:process.env.PASSWORD,
    }
});

// const transport = nodemailer.createTransport(
//     nodemailerSendgrid({
//         apiKey: process.env.SENDGRID_API_KEY
//     })
// );
export const sendConfirmationEmail = async (user) => {
    try {
        const token = await jwt.sign(
            { id: user.id, },
            process.env.JWT_SECRET,
        );
        const url = `http://localhost:3000/dashboard/${token}`
        const emailConfirmsend = await transport.sendMail({
            from: 'adnanmalika918@gmail.com',
            to: `${user.firstname},${user.email}`,
            subject: `${user.firstname} ${user.lastname}`,
            html: `<h1>Hello world!</h1> <a href=${url}>${url} </a>`,
        });
        if (emailConfirmsend) {
            console.log('send mail');
        } else {
            console.log('not mail');
        }
        return console.log({ emailConfirmsend, message: 'send email' });
    } catch (error) {
        return new Error(error)

    }
    // .then(()=>{
    //     console.log('email sending confirmation...');
    // }).catch(()=>{
    //     console.log('sending error');
    // });
}

// export const sendConfirmationEmail =async (user) => {
//     const url = `http://localhost:3000/confirmation`
//     console.log(`${user.password},${user.email}`,'aaaa');
//      const   mailOption = { from: 'example918@gmail.com',
//         to: `${user.name},${user.password}`,
//         subject: 'hello world',
//         html: `<h1>Hello world!</h1> <a href=${url}>${url}</a>`,}



// transport.sendMail(mailOption,(err,data)=>{
//     if(err){
//         console.log('error occured',err, data);
//     }else{
//         return console.log('send mail');
//     }
// })
// }