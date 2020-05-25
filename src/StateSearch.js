import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SpeciesRecord from './state/SpeciesRecord';
import Pagination from './pagination/Pagination';

const StateSearch = () => {
    const [result, setResult] = useState(undefined);
    const [page, setPage] = useState(0);
    const [recordsPerPage, setRecordsPerPage] = useState(20);

    useEffect(() => {
        axios.post(
            'https://cors-anywhere.herokuapp.com/https://explorer.natureserve.org/api/data/speciesSearch',
            {
                "criteriaType": "species",
                "pagingOptions": {
                    page,
                    recordsPerPage
                },
                "locationCriteria":
                    [{ "paramType": "subnation", "subnation": "NE", "nation": "US" }],
                "speciesTaxonomyCriteria":
                    [{ "paramType": "scientificTaxonomy", "level": "KINGDOM", "scientificTaxonomy": "Plantae" }]
            })
            .then(resp => {
                console.log(resp);
                setResult(resp.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [page, recordsPerPage]);

    return (
        <>
            API Provided by https://explorer.natureserve.org/
            <div className="pagination">
                {result && result.resultsSummary && <Pagination resultsSummary={result.resultsSummary} setPage={setPage} setRecordsPerPage={setRecordsPerPage} />}
            </div>
            <div>
                {result && (<p>Total species found for NE: {result.resultsSummary.speciesResults.total}</p>)}
                {result && result.results.map((speciesRecord, i) => {
                    return <SpeciesRecord key={i} data={speciesRecord} />
                })}
            </div>
            <div className="pagination">
                {result && result.resultsSummary && <Pagination resultsSummary={result.resultsSummary} setPage={setPage} setRecordsPerPage={setRecordsPerPage} />}
            </div>
        </>
    );
}

export default StateSearch;