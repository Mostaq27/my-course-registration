import { useEffect, useState } from "react";
// import { PropTypes } from 'prop-types';
import Card from './../Card/Card';


const Cards = ({handleAddToBookmark}) => {
    const [countCard, setCountCards] = useState([]);

    useEffect (()=>{
        fetch('card.json')
        .then(res => res.json())
        .then(data => setCountCards(data))
    },[]);

    // const handleSelectCourse = () => {

    // }
    // console.log(countCard);
    return (
        <div className=" grid grid-cols-3 gap-5 px-10 ">
            {/* <h1 className="text-4xl">Cards:{countCard.length}</h1> */}
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
// Card.propTypes = {
     
//     handleAddToBookmark: PropTypes.func
// }
export default Cards;