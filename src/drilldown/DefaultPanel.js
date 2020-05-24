import React from "react";
import LoadButton from './LoadButton';

const DefaultPanel = ({type, onLoad, data, setState}) => {
    return (
        <div className="panel">
            <h4>{type}: {data.name}</h4>
            <LoadButton onLoad={onLoad} linkPath={data.link} setState={setState} />
        </div>
    );
};

export default DefaultPanel;