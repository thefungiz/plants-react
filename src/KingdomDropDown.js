import React, { useEffect, useState } from 'react';
import Kingdom from './drilldown/Kingdom';
import axios from 'axios';
import { properties } from './properties';

const KingdomDropDown = () => {
    const [kingdoms, setKingdoms] = useState([]);
    const token = properties.token;

    const handleLoad = (linkPath, setState) => {
        let path = linkPath.substring(linkPath.indexOf('/api'));
        axios.get(`${path}?token=${token}`)
            .then(resp => {
                setState(resp.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        handleLoad('/api/kingdoms', setKingdoms);
    }, []);

    return (
        <>
            <h1>Kingdom Dropdown</h1>
            {kingdoms && kingdoms.map((kingdom, i) => {
                return <Kingdom key={i} data={kingdom} onLoad={handleLoad} />
            })}
        </>
    );
}

export default KingdomDropDown;