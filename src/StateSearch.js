import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SpeciesRecord from './state/SpeciesRecord';

//curl -i -d '
// {"criteriaType":"species","locationCriteria":[{"paramType":"subnation", "subnation": "NE", "nation":"US"}], "speciesTaxonomyCriteria": [{"paramType" : "scientificTaxonomy","level" : "KINGDOM","scientificTaxonomy" : "Plantae"}]}' 
// -X POST "https://explorer.natureserve.org/api/data/speciesSearch" -H "Accept: application/json" -H "Content-Type: application/json; charset=UTF-8"

const StateSearch = () => {
    const [result, setResult] = useState(undefined);

    useEffect(() => {
        axios.post(
            'https://cors-anywhere.herokuapp.com/https://explorer.natureserve.org/api/data/speciesSearch',
            {"criteriaType":"species","locationCriteria":[{"paramType":"subnation", "subnation": "NE", "nation":"US"}], "speciesTaxonomyCriteria": [{"paramType" : "scientificTaxonomy","level" : "KINGDOM","scientificTaxonomy" : "Plantae"}]})
            .then(resp => {
                console.log(resp);
                setResult(resp.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <>
            {result && (<p>Total species found for NE: {result.resultsSummary.speciesResults.total}</p>)}
            {result && result.results.map((speciesRecord, i) => {
                return <SpeciesRecord key={i} data={speciesRecord} />
            })}
        </>
    );
}

export default StateSearch;