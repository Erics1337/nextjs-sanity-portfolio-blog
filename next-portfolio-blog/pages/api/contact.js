import NodeMailer from 'nodemailer'

export default async function (req, res) {
  require('dotenv').config()

  const transporter = NodeMailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'ericsdevportfolio@gmail.com',
      pass: process.env.PASSWORD,
    },
    secure: true,
  })

  const mailData = {
    // Burner gmail account sending the email
    from: 'ericsdevportfolio@gmail.com',
    // Recipient (Me!)
    to: 'erics1337@gmail.com',
    // Subject
    subject: `Message From ${req.body.name} Using Your Portfolio's Contact Form`,
    // Plain-text body of the message
    text: `${req.body.message}`,
    // Html body for formatting
    html: `<div>
          <h2>Hi Eric!</h2>
          <p>${req.body.message}</p>
          <h3>Sent by ${req.body.name} from ${req.body.email}</h3>
          </div>`
  }
  
  transporter.sendMail(mailData, function (err, info) {
    if(err) console.log(err)
    else console.log(info)
  })
  
  // Always return success code
  res.status(200)
  // Yay! This fixed it.  Needed this
  res.end()
}