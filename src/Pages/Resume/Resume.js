import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
const Resume = () => {
    return (
        <div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">


                <div
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        height: '750px',
                    }}
                >
                    <Viewer fileUrl="../../pdf/cv.hasanulkarim.pdf" />
                </div>
            </Worker>;
        </div>
    );
};

export default Resume;