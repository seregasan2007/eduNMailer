const nodemailer = require('nodemailer');

var email_smtp = nodemailer.createTransport({ 
host: "smtp.gmail.com",
auth: {
type: "login", // default
user: "login@gmail.com", // <— сюда логин
pass: "passwod" // <— сюда павроль
}
});

let HelperOptions = {
from: '"Сергей Чернецов" <mama210897@gmail.com',
to: 'trashtube2323@gmail.com',
subject: 'Hello World!',
text: 'Lorem text'
};

email_smtp.sendMail(HelperOptions, (error, info) => {
if(error){
return console.log(error);
}
console.log('The message was sent! eeeeeeeeeeee');
console.log(info);
})