"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/health", (req, res) => {
    res.json({
        message: "Everything is working fine",
    });
});
app.listen(3000, () => {
    console.log("Connect to port 3000");
});
