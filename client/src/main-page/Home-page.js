import React from 'react';
// import Feedback from './FeedBack';
import About from './Home';
import NavBar from './NavBar';


const HomePage = () => {
  return (
    <>
      <NavBar/>
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <About />
   
      </div>
      
    </>
  )
}
export default HomePage;