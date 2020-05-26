import React from 'react';

const Pagination = ({ resultsSummary, setPage, setRecordsPerPage }) => {

    const handlePageNumberChange = (target) => {
        const index = Math.floor(target.value) - 1;
        if (index !== resultsSummary.page && index >= 0 && index < resultsSummary.totalPages) {
            setPage(index);
        }
        else {
            target.value = resultsSummary.page + 1;
        }
    };

    return (
        <div className="row">
            <button className="pag-button" onClick={() => setPage(0)}>{"<<"}</button>
            <button className="pag-button" onClick={() => setPage(resultsSummary.page - 1)}>{"<"}</button>
                    Page <input className="pag-input" type="number" defaultValue={resultsSummary.page + 1} onBlur={(e) => e.currentTarget.value && handlePageNumberChange(e.currentTarget)} /> of {resultsSummary.totalPages}
            <button className="pag-button" onClick={() => setPage(resultsSummary.page + 1)}>{">"}</button>
            <button className="pag-button" onClick={() => setPage(resultsSummary.totalPages - 1)}>{">>"}</button>
        </div>
    );
}
export default Pagination;