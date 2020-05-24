import React, { useState, useEffect } from 'react';
import SubKingdom from './SubKingdom';

const Kingdom = ({data, onLoad}) => {
    const [subkingdoms, setSubkingdoms] = useState([]);
    useEffect(() => {
        if (data.subkingdoms) {
            setSubkingdoms(data.subkingdoms);
        }
    }, []);
    return (
        <div>
            <div className="panel">
                <h2>Kingdom: {data.name}</h2>
            </div>
            <div className="margin-left">
                {subkingdoms && subkingdoms.map((subkingdom, i) => {
                    return <SubKingdom onLoad={onLoad} key={i} data={subkingdom} />
                })}
            </div>
        </div>
    );
}
export default Kingdom;