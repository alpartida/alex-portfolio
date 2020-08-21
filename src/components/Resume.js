import React from 'react';
import { Document, Page } from 'react-pdf';
import alexResume from '../assets/alexResume.PDF';

function Resume() {
    return (
        <div>
            <h1>Alexandra Partida's Resume </h1>
            <h2> Read more about my past experience and my transition into tech.</h2>
                <a download href={alexResume}>
            <button>
                    Download Resume
            </button>
                    </a>
            <Document file={alexResume} options={{ workerSrc: "pdf.worker.js" }} >
                <Page pageNumber={1} />
            </Document>
        </div >
    )
}

export default Resume