declare module 'pdfkit' {
    class PDFDocument {
      // Define the methods and properties you plan to use here.
      // For example:
      pipe(stream: any): PDFDocument;
      fontSize(size: number): PDFDocument;
      text(text: string): PDFDocument;
      heading(text: string,align:any): PDFDocument;
      moveDown(): PDFDocument;
      end():PDFDocument;
      // Add other methods and properties as needed.
    }
    export = PDFDocument;
  }