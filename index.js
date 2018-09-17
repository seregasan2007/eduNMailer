const nodemailer = require('nodemailer');

const xoauth2 = require('xoauth2');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
            user: 'mama210897@gmail.com',
            clientId: '164338413337-t7mvh8cahqvg1jua0ji0hv20uuj7idc8.apps.googleusercontent.com',
            clientSecret: 'ty pidor',
            refreshToken: '1/orlgGx2JC8zRPs03dQJuPcByQeJjqIpCfASVWohZZvTf_5b8Lxyb4OHQFez3ym8G'
        })
    }
});

let HelperOptions = {
    from: '"Сергей Чернецов" <mama210897@gmail.com',
    to: 'trashtube2323@gmail.com',
    subject: 'Hello World!',
    text: 'You are gay'
};

transporter.sendMail(HelperOptions, (error, info) => {
    if(error){
        return console.log(error);
    }
    console.log('The message was sent! eeeeeeeeeeee');
    console.log(info);
})