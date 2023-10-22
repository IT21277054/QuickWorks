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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quotationGenerator = exports.QuotationGenerator = void 0;
const puppeteer = __importStar(require("puppeteer"));
const nodemailer = __importStar(require("nodemailer"));
class QuotationGenerator {
    generateAndSendQuotationEmail(quotationData, recipientEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            const htmlContent = this.createHtmlQuotation(quotationData);
            const pdfBuffer = yield this.generatePDF(htmlContent);
            // Email details
            const transporter = nodemailer.createTransport({
                service: 'Yahoo',
                auth: {
                    user: 'Dev QuickWorks',
                    pass: '%m7Vf_nLydXS49^',
                },
            });
            console.log(1);
            const mailOptions = {
                from: 'cgpt2532@gmail.com',
                to: recipientEmail,
                subject: 'Your Quotation',
                text: 'Please find your quotation attached.',
                attachments: [{ filename: 'quotation.pdf', content: pdfBuffer }],
            };
            console.log(mailOptions);
            try {
                console.log(transporter.sendMail(mailOptions));
                const info = yield transporter.sendMail(mailOptions);
                console.log(3);
                console.log(`Email sent: ${info.response}`);
            }
            catch (error) {
                throw new Error(`Error sending email: ${error}`);
            }
        });
    }
    createHtmlQuotation(quotationData) {
        // Create an HTML template based on the quotationData
        // You can use a templating engine like Handlebars for more complex HTML generation
        const itemsList = quotationData.items
            ? `<ul>${quotationData.items.map((item) => `<li>${item.name}: ${item.price}</li>`).join('')}</ul>`
            : '';
        const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <!-- Your CSS styles go here -->
      </head>
      <body>
        <h1>Quotation</h1>
        <p>Quotation ID: ${quotationData.quotationId}</p>
        <p>Customer Name: ${quotationData.customerName}</p>
        <p>Location: ${quotationData.location}</p>
        <p>Job Type: ${quotationData.jobType}</p>
        <!-- Add other quotation data as needed -->
        ${itemsList}
      </body>
      </html>
    `;
        return htmlContent;
    }
    generatePDF(htmlContent) {
        return __awaiter(this, void 0, void 0, function* () {
            const browser = yield puppeteer.launch({ headless: 'new' }); // Specify headless mode as "new"
            const page = yield browser.newPage();
            yield page.setContent(htmlContent);
            const pdfBuffer = yield page.pdf({ format: 'A4' });
            yield browser.close();
            return pdfBuffer;
        });
    }
}
exports.QuotationGenerator = QuotationGenerator;
exports.quotationGenerator = new QuotationGenerator();
