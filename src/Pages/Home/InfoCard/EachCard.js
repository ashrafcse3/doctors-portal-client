import React from 'react';

const EachCard = ({ info: { icon, title, subtitle, bg_color } }) => {
    return (
        <div className={`p-2 card flex-row bg-gradient-to-r  text-white ${bg_color}`}>
            {icon}
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    );
};

export default EachCard;