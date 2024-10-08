const express =  require("express");
const app =  express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() =>{
    console.log("connected to DB");
}).catch((err) =>{
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/testListing",async (req, res) =>{
    let sampleListing = new Listing({
        title: "My New Villa",
        description: "By the beach",
        price: 1200,
        location: "Delhi",
        country: "India",
    });

    await sampleListing.save();
    console.log("sample was saved");
    res.send("success");
});

app.get("/", (req, res) =>{
    res.send("HI, I am root");
});

app.listen(8080, (req, res) =>{
    console.log("app is listening on port 8080.");
});
