import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SpeciesRecord from './SpeciesRecord';
import Pagination from '../pagination/Pagination';

const StateSearch = () => {
    const states = ["AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MH", "MA", "MI", "FM", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"];
    const [selectedState, setSelectedState] = useState("AL");
    const [result, setResult] = useState(undefined);
    const [page, setPage] = useState(0);
    const [recordsPerPage, setRecordsPerPage] = useState(20);

    useEffect(() => {
        axios.post(
            `https://explorer.natureserve.org/api/data/speciesSearch`,
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
                setResult(resp.data);
                console.log(resp)
            })
            .catch(error => {
                console.error(error);
            });
    }, [selectedState, page, recordsPerPage]);

    return (
        <div>
            <h1>State Search</h1>
            API Provided by https://explorer.natureserve.org/
            <div className="row">
                <div className="six columns">
                    Select a state:
                <select onChange={e => setSelectedState(e.currentTarget.value)}>
                        {states.map((state, i) => { return <option key={state} value={state}>{state}</option> })}
                    </select>
                    {result && (<p>Total species found for {selectedState}: {result.resultsSummary.speciesResults.total}</p>)}
                </div>
                <div className="six columns pagination">
                    {result && result.resultsSummary && <Pagination resultsSummary={result.resultsSummary} setPage={setPage} setRecordsPerPage={setRecordsPerPage} />}
                </div>
            </div>
            <div>
                {result && result.results.map((speciesRecord, i) => {
                    return <SpeciesRecord key={i} data={speciesRecord} />
                })}
            </div>
        </div>
    );
}

export default StateSearch;