import React from 'react';

const PrimaryH3 = ({ children, extraClass }) => {
    return (
        <h3 className={`text-xl text-primary font-bold ${extraClass}`}>{children}</h3>
    );
};

export default PrimaryH3;