import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

const SpeciesRecord = ({data}) => {
    const [description, setDescription] = useState(undefined);
    const [loadingDescription, setLoadingDescription] = useState(false);
    const [imageSrc, setImageSrc] = useState(undefined);
    useEffect(() => {
        setLoadingDescription(true);
        if (data.scientificName) {
            axios.get(`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&titles=${data.scientificName}&prop=extracts&format=json&exintro=1`)
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
    }, []);
    useEffect(() => {
        if (data.scientificName) {
            axios.get(`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&titles=${data.scientificName}&prop=pageimages&format=json&pithumbsize=250`)
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
    }, []);
    return (
        <div className="panel">
            <h2>{data.scientificName}</h2>
            <div>
                {imageSrc && (<img className="pull-right" src={imageSrc} />)}
                Primary Common Name: {data.primaryCommonName}<br/>
                Family: {data.speciesGlobal.family}<br/>
                Informal taxonomy: {data.speciesGlobal.informalTaxonomy}<br/>
                Comments: {ReactHtmlParser(data.speciesGlobal.taxonomicComments)}
                {loadingDescription ? (<p>Loading additional information...</p>) : ReactHtmlParser(description)}
            </div>
        </div>
    );
};

export default SpeciesRecord;