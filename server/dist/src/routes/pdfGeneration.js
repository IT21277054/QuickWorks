"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PDFDocument = require("pdfkit");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.post('/generate-pdf', (req, res) => {
    const { jobId, customerId, location, jobType, jobDescription, dateOfCompletion, timeOfArrival, workerId } = req.body;
    const items = req.body.items || [];
    const doc = new PDFDocument();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=quickworks_report_${jobId}.pdf`);
    doc.pipe(res);
    doc.fontSize(16).heading('QuickWorks Report', { align: 'center' });
    doc.fontSize(12).text(`Job ID: ${jobId}`);
    doc.text(`Customer ID: ${customerId}`);
    doc.text(`Location: ${location}`);
    doc.text(`Job Type: ${jobType}`);
    doc.text(`Job Description: ${jobDescription}`);
    doc.text(`Date of Completion: ${dateOfCompletion}`);
    doc.text(`Time of Arrival: ${timeOfArrival}`);
    doc.text(`Worker ID: ${workerId}`);
    doc.moveDown();
    doc.fontSize(14).text('Items:');
    items.forEach((item) => {
        doc.text(`- ${item.name}: ${item.quantity}`);
    });
    doc.end();
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
