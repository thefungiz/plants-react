import React, { useState, useEffect } from "react";
import DefaultPanel from "./DefaultPanel";
import Division from "./Division";

const SubKingdom = ({data, onLoad}) => {
    const [subkingdom, setSubkingdom] = useState(data);
    const [divisions, setDivisions] = useState([]);
    useEffect(() => {
        if (subkingdom.divisions) {
            setDivisions(subkingdom.divisions);
        }
    }, [subkingdom]);
    return (
        <div>
            <DefaultPanel type="Subkingdom" onLoad={onLoad} data={subkingdom} setState={setSubkingdom} />
            <div className="margin-left">
                {divisions && divisions.map((division, i) => {
                    return <Division key={i} data={division} onLoad={onLoad} />
                })}
            </div>
        </div>
    );
}

export default SubKingdom;