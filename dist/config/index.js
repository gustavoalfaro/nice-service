"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// require('dotenv').config()
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const database = {
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    options: {
        port: process.env.DATABASE_PORT,
        dialect: 'postgres',
        define: {
            timestamps: false,
            freezeTableName: true,
        },
        logging: (operation, options) => console.log({ operation, options }),
    }
};
exports.database = database;
const port = process.env.PORT;
exports.port = port;
//# sourceMappingURL=index.js.map