import React from 'react';

const H14xl = ({ extraClass, children }) => {
    return (
        <h1 className={`text-4xl font-bold ${extraClass}`}>{children}</h1>
    );
};

export default H14xl;