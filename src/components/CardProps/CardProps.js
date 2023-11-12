import React from 'react';

const CardProps = ({ link, alt, description }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <img src={link} alt={alt} className="w-full h-auto" />
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default CardProps;