
import React, { useState, useEffect } from "react";
import DefaultPanel from './DefaultPanel';

const Genus = ({data, onLoad}) => {
    const [genus, setGenus] = useState(data);
    return (
        <div>
            <DefaultPanel type="Genus" onLoad={onLoad} data={genus} setState={setGenus} />
        </div>
    );
}
export default Genus;