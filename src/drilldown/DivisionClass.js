
import React, { useState, useEffect } from "react";
import DefaultPanel from './DefaultPanel';
import DivisionOrder from './DivisionOrder';

const DivisionClass = ({data, onLoad}) => {
    const [divisionClass, setDivisionClass] = useState(data);
    const [divisionOrders, setDivisionOrders] = useState(divisionClass.division_orders);
    useEffect(() => {
        if (divisionClass.division_orders) {
            setDivisionOrders(divisionClass.division_orders);
        }
    }, [divisionClass])

    return (
        <div>
            <DefaultPanel type="Division Class" onLoad={onLoad} data={divisionClass} setState={setDivisionClass} />
            <div className="margin-left">
                {divisionOrders && divisionOrders.map((divisionOrder, i) => {
                    return <DivisionOrder key={i} onLoad={onLoad} data={divisionOrder} />
                })}
            </div>
        </div>
    );
}
export default DivisionClass;