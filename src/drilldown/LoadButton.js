import React, { useState } from 'react';

const LoadButton = ({onLoad, linkPath, setState}) => {
    const [loading, setLoading] = useState(false);
    const [hide, setHide] = useState(false);

    const handleClick = () => {
        setLoading(true);
        onLoad(linkPath, setState, () => {setLoading(false); setHide(true)});
    };

    return(
        <div className="center">
            {!loading && !hide && 
            <button  disabled={loading} onClick={() => handleClick()}>Load Children</button>}
        </div>
    );
};

export default LoadButton;