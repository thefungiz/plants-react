import React, { useState, useEffect } from "react";
import DefaultPanel from './DefaultPanel';
import DivisionClass from './DivisionClass';

const Division = ({data, onLoad}) => {
    const [division, setDivision] = useState(data);
    const [divisionClasses, setDivisionClasses] = useState(division.division_classes);
    useEffect(() => {
        if (division.division_classes) {
            setDivisionClasses(division.division_classes);
        }
    }, [division])

    return (
        <div>
            <DefaultPanel type="Division" onLoad={onLoad} data={division} setState={setDivision} />
            <div className="margin-left">
                {divisionClasses && divisionClasses.map((divisionClass, i) => {
                    return <DivisionClass key={i} onLoad={onLoad} data={divisionClass} />
                })}
            </div>
        </div>
    );
}
export default Division;