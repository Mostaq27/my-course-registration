import { IoMdBook } from "react-icons/io";
import { FiDollarSign} from "react-icons/fi";
 
const Card = ({ card, handleAddToBookmark }) => {
    const { course_title, course_img, course_details, credit, price } = card
    return (
        
            <div className=" grid w-[312px]  card rounded-box shadow-2xl px-3 ">

                <figure className="mt-2">
                    <img src={course_img} alt="" className="rounded-xl" />
                </figure>
                <h2 className="text-xl font-semibold py-2">{course_title}</h2>
                <p >{course_details}</p>
                <div className="flex justify-between font-medium text-gray-500">
                    <div className="flex flex-row gap-3 pt-3">
                       <p className="mt-1"><FiDollarSign></FiDollarSign></p> 
                    <p>Price {price}</p>

                    </div>
                    <div className="gap-3 pt-3 inline-flex">
                       <p className="pt-1"><IoMdBook></IoMdBook></p> 
                        <p >Credit :{credit} hr</p>
                    </div>
                </div>
                <button onClick={()=>handleAddToBookmark(card)} className="btn capitalize bg-[#2F80ED] active:bg-red-500 rounded-lg font-bold text-white m-4">Select</button>

            </div>
        
    );
};

 

export default Card;