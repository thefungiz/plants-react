import React, { useEffect, useState } from 'react';
import Kingdom from './familytree/Kingdom';
import axios from 'axios';
import { properties } from './properties';

const FamilyTree = () => {
    const [kingdoms, setKingdoms] = useState([]);
    const token = properties.token;

    const handleLoad = (linkPath, setState, callback) => {
        axios.get(`${linkPath}?token=${token}`)
            .then(resp => {
                setState(resp.data);
                callback && callback();
            })
            .catch(error => {
                console.error(error);
                callback && callback(); 
            });
    }

    useEffect(() => {
        handleLoad('https://trefle.io/api/kingdoms', setKingdoms);
    }, []);

    return (
        <>
            <h1>Family Tree</h1>
            {kingdoms && kingdoms.map((kingdom, i) => {
                return <Kingdom key={i} data={kingdom} onLoad={handleLoad} />
            })}
        </>
    );
}

export default FamilyTree;