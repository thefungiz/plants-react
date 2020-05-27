
import React, { useState, useEffect } from "react";
import DefaultPanel from './DefaultPanel';
import Family from './Family';

const DivisionOrder = ({data, onLoad}) => {
    const [divisionOrder, setDivisionOrder] = useState(data);
    const [families, setFamilies] = useState(divisionOrder.families);
    useEffect(() => {
        if (divisionOrder.families) {
            setFamilies(divisionOrder.families);
        }
    }, [divisionOrder]);

    return (
        <div>
            <DefaultPanel type="Order" onLoad={onLoad} data={divisionOrder} setState={setDivisionOrder} />
            <div className="margin-left">
                {families && families.map((family, i) => {
                    return <Family key={i} onLoad={onLoad} data={family} />
                })}
            </div>
        </div>
    );
}
export default DivisionOrder;