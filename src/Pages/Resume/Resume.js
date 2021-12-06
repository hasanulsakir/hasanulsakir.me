import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// import Header from '../Shared/Header/Header';
const Resume = () => {
    return (
        <div>

            <div className="mt-5 boxBg">


                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js" className="bg-dark">


                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            height: '750px',
                            background: '#000'
                        }}
                    >
                        <Viewer fileUrl="../../pdf/cv.hasanulkarim.pdf" />
                    </div>
                </Worker>

            </div>
        </div>
    );
};

export default Resume;