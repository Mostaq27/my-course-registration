import React from 'react';
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks,remaining,courseCredit}) => {
  return (
    <div className='w-[20%] '>
<div className=' w-[300px] p-5 bg-base-100 shadow-x rounded-md shadow-xl '>
      
      <h1 className="text-xl font-semibold text-[#2F80ED]" >Course Remaining {remaining} hr</h1><br />
      <hr /><hr /><hr />
      <h1 className="text-2xl font-semibold">course name</h1><br />
    {
        bookmarks.map((bookmark,index)=> <div key={bookmark.id}>
            <h1>{index+1}. {bookmark.course_title}</h1><br />
        </div>

    
        )
    
    }
    <hr /><hr /><hr /><br />
  <h1 className='font-medium '>Total Credit Hour: {courseCredit}</h1>
  
    </div>
    </div>
  );
};


Bookmarks.propTypes = {
  bookmarks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      
    })
  ).isRequired,
};

export default Bookmarks;
