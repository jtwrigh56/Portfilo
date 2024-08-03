import React from "react";
import { PDFViewer } from "../components/pdfviewer";

const Resume: React.FC = () => { 
    return (
        <div>
            <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            opacity: 0.5, // Adjust opacity here
          }}
          className="relative left-[calc 3rem)] aspect-[1200/850] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] sm:left-[calc(25%+36rem)] sm:w-[72.1875rem]"
            />
            <PDFViewer></PDFViewer>
        </div>
    );
}

export default Resume;