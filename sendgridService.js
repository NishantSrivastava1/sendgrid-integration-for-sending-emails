const sendgrid = require("@sendgrid/mail")
const Fs = require('fs');
require('dotenv').config()
sendgrid.setApiKey(process.env.API_KEY)

/********************************************************************************************************************************************************************************************** */

// Prerequisites of using sendgrid - Please refer official doc link of sendgrid - https://docs.sendgrid.com/for-developers/sending-email/quickstart-nodejs#prerequisites 

function sendMail() {
    try {

        sendgrid.send({
            to: ["dummyEmail1@mailinator.com", "dummyEmail2@mailinator.com"], // Replace these with your email addresses
            from: {
                email: process.env.FROM_EMAIL,// Replace this with your verified sender identity email
                name: process.env.FROM_NAME // Replace this with the name that you want to show your users
            },
            subject: "Subject Of Mail", // Replace this with your subject
            html: "Hi user <br> This is Dummy  Body Of Mail For Testing <br><br> Thanks<br>Nishant"// Replace this with your body content
        })

    } catch (error) {
        console.log("Error in sending emails------>", error.response.body.errors)
    }
}

function sendMailToMultipleUsers() {
    try {

        sendgrid.sendMultiple({
            to: ["dummyEmail1@mailinator.com", "dummyEmail2@mailinator.com"], // Replace these with your email addresses
            from: {
                email: process.env.FROM_EMAIL,// Replace this with your verified sender identity email
                name: process.env.FROM_NAME // Replace this with the name that you want to show your users
            },
            subject: "Subject Of Mail", // Replace this with your subject
            html: "Hi user <br> This is Dummy  Body Of Mail For Testing <br><br> Thanks<br>Nishant"// Replace this with your body content
        })

    } catch (error) {
        console.log("Error in sending emails------>", error.response.body.errors)
    }
}

/* The Difference between both the method is- if you choose to use sendgrid.send() then all the recipients of that mail would be able to see each others email ,
and if you want to expose their emails to one another then use sendgrid.sendMultiple()
*/



// Sending Email With Attachments
function sendMailWithAttachments() {

    let attachmentPath = `${__dirname}/sample.pdf`; 
    let attachment = Fs.readFileSync(attachmentPath).toString("base64")

    sendgrid.sendMultiple({
        to: ["dummyEmail1@mailinator.com", "dummyEmail2@mailinator.com"], // Replace these with your email addresses
        from: {
            email: process.env.FROM_EMAIL,// Replace this with your verified sender identity email
            name: process.env.FROM_NAME // Replace this with the name that you want to show your users
    },
        subject: "Subject Of Mail", // Replace this with your subject
        html: "Hi user <br> This is Dummy  Body Of Mail For Testing <br><br> Thanks<br>Nishant",// Replace this with your body content
        attachments: [
            {
                content: attachment,
                filename: "sample.pdf",
                type: "application/pdf",
                disposition: "attachment"
            }]
    })

}

