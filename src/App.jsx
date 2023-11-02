import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Cards from './components/header/Cards/Cards'
import Bookmarks from './components/header/Bookmarks/Bookmarks'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast("This course already exist");
  const notify1 = () => toast("check credit");

  const [bookmarks, setBookmarks] = useState([]);
  const [courseCredit,setCouseCredit]=useState(0)
  const [remaining,setRemaining]= useState(20)

  const handleAddToBookmark = card => {
    let totalCredit = card.credit;
    const isExist =bookmarks.find(course=>course.course_title===card.course_title)
    if(isExist){
      notify()
       return;
    }else{
      bookmarks.forEach(course=>{
        totalCredit+=course.credit;
      })
      let creaditRemaining = 20 - totalCredit

      if(totalCredit>20 || creaditRemaining < 0){
        return notify1()
      }else{
        setCouseCredit(totalCredit)
        setRemaining(creaditRemaining)
        const newBookmarks = [...bookmarks, card];
        setBookmarks(newBookmarks);
      }
    
    }
    console.log()
    
  }

  return (
    <>
       <div className=' bg-base-200 p-10'>
      <Header></Header>
      
       <div className='lg:p-10'> 
       <div className='flex flex-col w-full lg:flex-row gap-5  '>
 
      <Cards handleAddToBookmark={handleAddToBookmark}></Cards>
      <Bookmarks bookmarks={bookmarks} remaining={remaining} courseCredit={courseCredit}></Bookmarks>
      <ToastContainer />
      </div>
      </div>
      
      </div>
    </>
  );
};


export default App;


 