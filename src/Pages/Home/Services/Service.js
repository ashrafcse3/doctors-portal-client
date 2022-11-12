import React from 'react';

const Service = ({ service: { icon, description, name } }) => {
    return (
        <div className="card p-4 bg-base-100 shadow-xl">
            <figure><img src={icon} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;