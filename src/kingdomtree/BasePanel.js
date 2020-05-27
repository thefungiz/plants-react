import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

const BasePanel = ({type, data, children}) => {
    const [description, setDescription] = useState(undefined);
    const [loadingDescription, setLoadingDescription] = useState(false);
    const [imageSrc, setImageSrc] = useState(undefined);
    useEffect(() => {
        setLoadingDescription(true);
        const search = data.slug ? data.slug : data.name
        if (search) {
            axios.get(`https://en.wikipedia.org/w/api.php?action=query&origin=*&titles=${search}&prop=extracts|pageimages&format=json&exintro=1&redirects=1&pithumbsize=250`)
                .then(resp => {
                    const page = Object.values(resp.data.query.pages)[0];
                    if (page.extract) {
                        setDescription(page.extract);
                    }
                    if (page.thumbnail) {
                        setImageSrc(page.thumbnail.source);
                    }
                    setLoadingDescription(false);
                })
                .catch(error => {
                    console.error(error);
                    setLoadingDescription(false);
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
            {children}
        </div>
    );
};

export default BasePanel;