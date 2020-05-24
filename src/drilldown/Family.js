
import React, { useState, useEffect } from "react";
import DefaultPanel from './DefaultPanel';
import Genus from "./Genus";

const Family = ({data, onLoad}) => {
    const [family, setFamily] = useState(data);
    const [genuses, setGenuses] = useState(family.genuses);
    useEffect(() => {
        if (family.genuses) {
            setGenuses(family.genuses);
        }
    }, [family]);

    return (
        <div>
            <DefaultPanel type="Family" onLoad={onLoad} data={family} setState={setFamily} />
            <div className="margin-left">
                {genuses && genuses.map((genus, i) => {
                    return <Genus key={i} onLoad={onLoad} data={genus} />
                })}
            </div>
        </div>
    );
}
export default Family;