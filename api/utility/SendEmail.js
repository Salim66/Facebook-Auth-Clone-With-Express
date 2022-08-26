import nodemailer from 'nodemailer';

// create send mail
export const SendEmail = (to, subject, text) => {

    try {
        
        var transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
              user: "shrvdev624466@gmail.com",
              pass: "zuapdacevebvniok"
            }
          });
    
          transport.sendMail({
            from: 'salimhasanriad@gmail.com',
            to: to,
            subject: subject,
            text: text
          });

    } catch (error) {
        console.log(error);
    }

}