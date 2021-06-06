/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IxG1OSDd9Ncn7JV2fl1bsg3ih5Z7QzrHelCcblSaFRC0b6kqBGmq3vIEaInUirmqiiuAgizZ6hVEnsu4k2HgIMu00j8TJ1Zd1");


// API


// App config

const app = express();


// Middleware


app.use(cors({origin: true}));
app.use(express.json());


// Api routes

app.get("/", (request, response) => response.status(200).send("helloworld"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command

exports.api = functions.region("asia-south1").https.onRequest(app);


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// http://localhost:5001/midyamezonclone/us-central1/api
