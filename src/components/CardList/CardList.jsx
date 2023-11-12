import React from 'react';
import CardProps from '../CardProps/CardProps'; 
import cardData from '../../data/cardData'; 

const CardList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {cardData.map((card) => (
        <CardProps key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardList;
