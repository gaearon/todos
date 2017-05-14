import React from 'react';

const CenterFixed = ({ children }) => (
    <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        {children}
    </div>
);

export default CenterFixed;