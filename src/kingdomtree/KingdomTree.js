import React, { useEffect, useState } from 'react';
import Kingdom from './Kingdom';
import axios from 'axios';
import {properties} from '../properties'

const FamilyTree = () => {
    const [kingdoms, setKingdoms] = useState([]);
    const [token, setToken] = useState(undefined);
    
    useEffect(() => {
        axios.get(properties.tokenPath)
            .then(resp => {
                setToken(resp.data.token)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        if (token) {
            handleLoad('https://trefle.io/api/kingdoms', setKingdoms);
        }
    }, [token])

    const handleLoad = (linkPath, setState, callback) => {
        axios.get(`${linkPath.replace('http:', 'https:')}?token=${token}`)
            .then(resp => {
                setState(resp.data);
                callback && callback();
            })
            .catch(error => {
                console.error(error);
                callback && callback(); 
            });
    }

    return (
        <>
            <h1>Kingdom Tree</h1>
            {kingdoms && kingdoms.map((kingdom, i) => {
                return <Kingdom key={i} data={kingdom} onLoad={handleLoad} />
            })}
        </>
    );
}

export default FamilyTree;