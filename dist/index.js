"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_controller_1 = __importDefault(require("./app.controller"));
const config_service_1 = require("./config/config.service");
const app = (0, express_1.default)();
const port = config_service_1.PORT;
(0, app_controller_1.default)(app);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
