"use client";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import pdf from "../assets/resume.pdf";

export function PDFViewer() {
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <div
                style={{
                    border: '1px solid rgba(0, 0, 0, 0.3)',
                    height: '750px',
                }}
            >
                <Viewer fileUrl="/resume.pdf" />
            </div>
        </Worker>
    );
}