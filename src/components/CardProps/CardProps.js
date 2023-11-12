import React from 'react';

const CardProps = ({ link, alt, description }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4">
      <img src={link} alt={alt} className="w-250 h-250 mx-auto my-auto" />
      <div className="px-6 py-4">
        <p className="text-blue-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default CardProps;