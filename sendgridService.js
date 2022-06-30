const sendgrid = require("@sendgrid/mail")
require('dotenv').config()
sendgrid.setApiKey(process.env.API_KEY)

/********************************************************************************************************************************************************************************************** */

/* Prerequisites of using sendgrid - Please refer official doc link of sendgrid - https://docs.sendgrid.com/for-developers/sending-email/quickstart-nodejs#prerequisites 



/* The Difference between both the method is- if you choose to use sendgrid.send() then all the recipients of that mail would be able to see each others email ,
and if you want to expose their emails to one another then use sendgrid.sendMultiple()
*/

function sendMail(params) {
    try {

        sendgrid.send({
            to: ["dummyEmail1@mailinator.com", "dummyEmail2@mailinator.com"], // Replace these with your email addresses
            from: process.env.FROM_EMAIL,// Replace this with your verified sender identity email
            subject: "Subject Of Mail", // Replace this with your subject
            html: "Hi user <br> This is Dummy  Body Of Mail For Testing <br><br> Thanks<br>Nishant"// Replace this with your body content
        })

    } catch (error) {
        console.log("Error in sending emails------>", error.response.body.errors)
    }
}

function sendMailToMultipleUsers(params) {
    try {

        sendgrid.sendMultiple({
            to: ["dummyEmail1@mailinator.com", "dummyEmail2@mailinator.com"], // Replace these with your email addresses
            from: process.env.FROM_EMAIL,// Replace this with your verified sender identity email
            subject: "Subject Of Mail", // Replace this with your subject
            html: "Hi user <br> This is Dummy  Body Of Mail For Testing <br><br> Thanks<br>Nishant"// Replace this with your body content
        })

    } catch (error) {
        console.log("Error in sending emails------>", error.response.body.errors)
    }
}


