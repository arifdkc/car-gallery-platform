const e = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const carsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    fuelType: { type: String, required: true },
    price: { type: Number, required: true },
    gear: { type: String, required: true },
    km: { type: Number, required: true },
    image: { type: [String], required: true },
    description: { type: String, required: true },
    packet: { type: String, required: true },
    color: { type: String, required: true },
    horsePower: { type: Number, required: true },
    engine: { type: Number, required: true },
    caseType: { type: String, required: true },
    plate: { type: String, required: true },
    damage: { type: Number, required: true },
    adverdNumber: { type: Number, required: true },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});
module.exports = mongoose.model('Car', carsSchema);