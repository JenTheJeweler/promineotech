//Resume embedded here as a pdf?  needs to be dynamic,
// full page, interactive-clickable.
// Components:
// Navbar
// Logo
// Resume
import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import { Document, Page, pdfjs } from "react-pdf";
import ResumePDF from "https://docs.google.com/document/d/1QrWc6L3A_wacgqzUb64uxNbYBkbC4OgNZ7a_q6_ytAg/edit?usp=sharing"; // Replace with the path to your resume PDF file

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Navbar />
      <Logo />
      <h1>Resume</h1>
      <div style={{ width: 600 }}>
        <Document
          file={ResumePDF}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => console.log("Error loading PDF:", error)}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button
        onClick={() => setPageNumber(pageNumber - 1)}
        disabled={pageNumber <= 1}
      >
        Previous
      </button>
      <button
        onClick={() => setPageNumber(pageNumber + 1)}
        disabled={pageNumber >= numPages}
      >
        Next
      </button>
    </div>
  );
};

export default Resume;
