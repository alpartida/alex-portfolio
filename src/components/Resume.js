import React from 'react';
import { Document, Page } from 'react-pdf';
import AlexPartidaResume2021 from '../assets/AlexPartidaResume2021.pdf';

function Resume() {
    return (
        <div>
            <h1>Alexandra Partida's Resume </h1>
            <h2> Read more about my past experience and my transition into tech.</h2>
            <a download href={AlexPartidaResume2021}>
                <button>
                    Download Resume
            </button>
            </a>
            <Document file={AlexPartidaResume2021} options={{ workerSrc: "pdf.worker.js" }} >
                <Page pageNumber={1} />
            </Document>
        </div >
    )
}

export default Resume