"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const chalk_1 = __importDefault(require("chalk"));
const config_service_1 = require("../config/config.service");
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(config_service_1.MONGODB_URI);
        console.log(chalk_1.default.bgGreenBright.white("Connected to MongoDB successfully"));
    }
    catch (error) {
        console.log(chalk_1.default.bgRedBright.white("Error connecting to MongoDB:"), error);
    }
};
exports.default = connectDB;
