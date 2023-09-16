import { useEffect, useState } from "react";

import Card from './../Card/Card';


const Cards = ({handleAddToBookmark}) => {
    const [countCard, setCountCards] = useState([]);

    useEffect (()=>{
        fetch('card.json')
        .then(res => res.json())
        .then(data => setCountCards(data))
    },[]);
 

     
    return (
        <div className=" grid grid-cols-3 gap-5  ">
            
            {
                countCard.map(card => <Card
                    key={card.id}
                    card={card}
                    handleAddToBookmark={handleAddToBookmark}
                    ></Card>)
            }
        </div>
    );
};
 
export default Cards;