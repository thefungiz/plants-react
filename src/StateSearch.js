import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SpeciesRecord from './state/SpeciesRecord';
import Pagination from './pagination/Pagination';

const StateSearch = () => {
    const states = ["AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MH", "MA", "MI", "FM", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"];
    const [selectedState, setSelectedState] = useState("AL");
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
                    [{ "paramType": "subnation", "subnation": selectedState, "nation": "US" }],
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
    }, [selectedState, page, recordsPerPage]);

    return (
        <>
            API Provided by https://explorer.natureserve.org/
            <div className="pagination">
                {result && result.resultsSummary && <Pagination resultsSummary={result.resultsSummary} setPage={setPage} setRecordsPerPage={setRecordsPerPage} />}
            </div>
            <div>
                Select a state:
                <select onChange={e => setSelectedState(e.currentTarget.value)}>
                    {states.map((state, i) => { return <option key={state} value={state}>{state}</option> })}
                </select>
            </div>
            <div>
                {result && (<p>Total species found for {selectedState}: {result.resultsSummary.speciesResults.total}</p>)}
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