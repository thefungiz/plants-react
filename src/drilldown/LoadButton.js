import React from 'react';

const LoadButton = ({onLoad, linkPath, setState}) => {
    return(
    <button onClick={() => onLoad(linkPath, setState)}>Load</button>
    );
};

export default LoadButton;