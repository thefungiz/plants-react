import React, { useState, useEffect } from "react";
import LoadButton from './LoadButton';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

const DefaultPanel = ({ type, onLoad, data, setState }) => {
    const [description, setDescription] = useState(undefined);
    const [loadingDescription, setLoadingDescription] = useState(false);
    const [imageSrc, setImageSrc] = useState(undefined);
    useEffect(() => {
        setLoadingDescription(true);
        if (data.slug) {
            axios.get(`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&titles=${data.slug}&prop=extracts&format=json&exintro=1`)
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
        if (data.slug) {
            axios.get(`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&titles=${data.slug}&prop=pageimages&format=json&pithumbsize=250`)
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
            <h4 className="center">{type}: {data.name}</h4>
            <div>
                {imageSrc && (<img className="pull-right" src={imageSrc} />)}
                {loadingDescription ? (<p>Loading additional information...</p>) : ReactHtmlParser(description)}
            </div>
            <LoadButton onLoad={onLoad} linkPath={data.link} setState={setState} />
        </div>
    );
};

export default DefaultPanel;