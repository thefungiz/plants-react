import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import LoadImages from './LoadImages';

const SpeciesRecord = ({ data }) => {
    const [description, setDescription] = useState(undefined);
    const [loadingDescription, setLoadingDescription] = useState(false);
    const [imageSrc, setImageSrc] = useState(undefined);
    useEffect(() => {
        setDescription(undefined);
        setLoadingDescription(true);
        if (data.scientificName) {
            axios.get(`https://en.wikipedia.org/w/api.php?action=query&origin=*&titles=${data.scientificName}&prop=extracts&format=json&exintro=1`)
                .then(resp => {
                    const result = Object.values(resp.data.query.pages)[0].extract;
                    setDescription(result ? result : '<p class="center">No description found</p>');
                    setLoadingDescription(false);
                })
                .catch(error => {
                    console.error(error);
                    setLoadingDescription(false);
                });
        }
    }, [data]);
    useEffect(() => {
        setImageSrc(undefined);
        if (data.scientificName) {
            axios.get(`https://en.wikipedia.org/w/api.php?action=query&origin=*&titles=${data.scientificName}&prop=pageimages&format=json&pithumbsize=250`)
                .then(resp => {
                    const thumbnail = Object.values(resp.data.query.pages)[0].thumbnail;
                    if (thumbnail) {
                        setImageSrc(thumbnail.source);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [data]);
    return (
        <div className="panel">
            {imageSrc && (<img className="pull-right" src={imageSrc} />)}
            <h2><i>{data.scientificName}</i></h2>
            <h4>Common name: {data.primaryCommonName}</h4>
            <h4>Family: {data.speciesGlobal.family}</h4>
            <div>Informal taxonomy: {data.speciesGlobal.informalTaxonomy}</div>
            <div>Comments: {ReactHtmlParser(data.speciesGlobal.taxonomicComments)}</div>
            <div><div>Wikipedia:</div>
            {loadingDescription ? (<p>Loading additional information...</p>) : ReactHtmlParser(description)}
            </div>
            <LoadImages data={data} />
        </div>
    );
};

export default SpeciesRecord;