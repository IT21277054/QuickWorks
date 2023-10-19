"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const logger_1 = __importDefault(require("../log/logger"));
const JobRoutes_1 = __importDefault(require("../src/routes/JobRoutes"));
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use('/api/jobrouter', JobRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Hello, TypeScript Express!');
});
mongoose_1.default.connect(process.env.MONGODB_URI).then(() => {
    logger_1.default.info('MongoDB connected');
    app.on('error', (err) => {
        logger_1.default.error(err);
    });
    app.listen(port, () => {
        logger_1.default.info(`TypeScript with Express
         http://localhost:${port}/`);
    });
});
