"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin = __importStar(require("firebase-admin"));
const quickworkers_7a5c1_firebase_adminsdk_xnr7n_b7ad93801e_json_1 = __importDefault(require("../quickworkers-7a5c1-firebase-adminsdk-xnr7n-b7ad93801e.json")); // Replace with your service account key
admin.initializeApp({
    credential: admin.credential.cert(quickworkers_7a5c1_firebase_adminsdk_xnr7n_b7ad93801e_json_1.default),
    databaseURL: 'https://quickworkers-7a5c1-default-rtdb.firebaseio.com/', // Replace with your Firebase database URL
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Import your worker routes
const admin_route_1 = __importDefault(require("./routes/admin.route"));
// Use your worker routes
app.use('/workers', admin_route_1.default);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
