import * as puppeteer from 'puppeteer';
import * as nodemailer from 'nodemailer';
import { Request, Response } from 'express';
import { check, validationResult } from 'express-validator';

export class QuotationGenerator {
  async generateAndSendQuotationEmail(quotationData: QuotationData, recipientEmail: string): Promise<void> {
    const htmlContent = this.createHtmlQuotation(quotationData);
    const pdfBuffer = await this.generatePDF(htmlContent);
    
    // Email details
    const transporter = nodemailer.createTransport({
      service: 'Yahoo', // e.g., 'Gmail', 'Outlook', etc.
      auth: {
        user: 'Dev QuickWorks',
        pass: '%m7Vf_nLydXS49^',
      },
    });
   console.log(1)
    const mailOptions = {
      from: 'cgpt2532@gmail.com',
      to:  recipientEmail,
      subject: 'Your Quotation',
      text: 'Please find your quotation attached.',
      attachments: [{ filename: 'quotation.pdf', content: pdfBuffer }],
    };
    console.log(mailOptions)
    try {
      console.log(transporter.sendMail(mailOptions))
      const info = await transporter.sendMail(mailOptions);
      console.log(3)
      console.log(`Email sent: ${info.response}`);
    } catch (error) {
      throw new Error(`Error sending email: ${error}`);
    }
  }

  private createHtmlQuotation(quotationData: QuotationData): string {
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

  private async generatePDF(htmlContent: string): Promise<Buffer> {
    const browser = await puppeteer.launch({ headless: 'new' }); // Specify headless mode as "new"
    const page = await browser.newPage();
    await page.setContent(htmlContent);
    const pdfBuffer = await page.pdf({ format: 'A4' });
    await browser.close();
    return pdfBuffer;
  }
}

// Define the QuotationData and ItemDocument types
interface ItemDocument {
  name: string;
  price: number;
}

export interface QuotationData {
  quotationId: number;
  customerName: string;
  location: string;
  jobType: string;
  jobDescription: string;
  dateOfCompletion: Date | null;
  timeOfArrival: string | null;
  workerName: string;
  bringGoods: boolean | null;
  paymentAmount: number;
  items: ItemDocument[] | null;
}

export const quotationGenerator = new QuotationGenerator();
