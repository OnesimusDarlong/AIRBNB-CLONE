const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        default: "https://unsplash.com/photos/happy-man-in-snorkeling-mask-dive-underwater-with-tropical-fishes-in-coral-reef-sea-pool-travel-lifestyle-water-sport-outdoor-adventure-swimming-lessons-on-summer-beach-holiday-aerial-view-from-the-drone-iId6d_e_ND4",
        type: String,
        set: (v) => v === "" ? "https://unsplash.com/photos/happy-man-in-snorkeling-mask-dive-underwater-with-tropical-fishes-in-coral-reef-sea-pool-travel-lifestyle-water-sport-outdoor-adventure-swimming-lessons-on-summer-beach-holiday-aerial-view-from-the-drone-iId6d_e_ND4" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;