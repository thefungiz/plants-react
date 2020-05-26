import React from 'react';

const Pagination = ({ resultsSummary, setPage, setRecordsPerPage }) => {
    return (
        <div>
            <button className="pag-button" onClick={() => setPage(0)}>First</button>
            <button className="pag-button" onClick={() => setPage(resultsSummary.page - 1)}>Previous</button>
                    Page {resultsSummary.page} of {resultsSummary.totalPages}
            <button className="pag-button" onClick={() => setPage(resultsSummary.page + 1)}>Next</button>
            <button className="pag-button" onClick={() => setPage(resultsSummary.totalPages - 1)}>Last</button>
        </div>
    );
}
export default Pagination;