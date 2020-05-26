import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import LoadImages from './LoadImages';

const SpeciesRecord = ({ data }) => {
    const [wikipediaExtract, setWikipediaExtract] = useState(undefined);
    const [imageSrc, setImageSrc] = useState(undefined);
    useEffect(() => {
        setWikipediaExtract(undefined);
        if (data.scientificName) {
            axios.get(`https://en.wikipedia.org/w/api.php?action=query&origin=*&titles=${data.scientificName}&prop=extracts|info|pageimages&format=json&exintro=1&inprop=url&pithumbsize=250`)
                .then(resp => {
                    const page = Object.values(resp.data.query.pages)[0];
                    if (page.extract) {
                        setWikipediaExtract(page.extract + `<p>Source: <a target="_blank" href="${page.fullurl}">${page.title}</a> on Wikipedia</p?`);
                    }
                    if (page.thumbnail) {
                        setImageSrc(page.thumbnail.source);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [data]);
    return (
        <div className="panel">
            {imageSrc && (<img alt={data.scientificName} className="pull-right" src={imageSrc} />)}
            <h2>{ReactHtmlParser(data.formattedScientificName)}</h2>
            <h4>Common name: {data.primaryCommonName}</h4>
            <h4>Family: {data.speciesGlobal.family}</h4>
            {data.speciesGlobal.otherCommonNames && data.speciesGlobal.otherCommonNames.length > 0 && <div><b>Other common names:</b><ul>{data.speciesGlobal.otherCommonNames.map((name, i) => {return <li key={i}>{name}</li>})}</ul></div>}
            {data.speciesGlobal.informalTaxonomy && <div><b>Informal taxonomy:</b> {data.speciesGlobal.informalTaxonomy}</div>}
            {data.speciesGlobal.taxonomicComments && <div><b>Comments:</b> {ReactHtmlParser(data.speciesGlobal.taxonomicComments)}</div>}
            {wikipediaExtract && <div>{ReactHtmlParser(wikipediaExtract)}<LoadImages data={data} /></div>}
        </div>
    );
};

export default SpeciesRecord;