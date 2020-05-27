import React from "react";
import LoadButton from './LoadButton';
import BasePanel from "./BasePanel"


const DefaultPanel = ({ type, onLoad, data, setState }) => {
    return (
        <BasePanel type={type} data={data}>
            <LoadButton onLoad={onLoad} linkPath={data.link} setState={setState} />
        </BasePanel>
    );
};

export default DefaultPanel;