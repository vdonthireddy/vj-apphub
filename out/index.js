"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (req, res) {
    res.end('Hello world!!! ');
});
app.listen(3000, function () {
    console.log('sever started at: http://localhost:3000/');
});
console.log('Hello World!');
