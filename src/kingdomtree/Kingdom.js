import React, { useState, useEffect } from 'react';
import BasePanel from './BasePanel';
import SubKingdom from './SubKingdom';

const Kingdom = ({ data, onLoad }) => {
    const [subkingdoms, setSubkingdoms] = useState([]);
    useEffect(() => {
        if (data.subkingdoms) {
            setSubkingdoms(data.subkingdoms);
        }
    }, []);
    return (
        <div>
            <BasePanel type="Kingdom" data={data}>
            </BasePanel>
            <div className="margin-left">
                    {subkingdoms && subkingdoms.map((subkingdom, i) => {
                        return <SubKingdom onLoad={onLoad} key={i} data={subkingdom} />
                    })}
                </div>
        </div>
    );
}
export default Kingdom;