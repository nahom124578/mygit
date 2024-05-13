import React from 'react';
import p1 from './../images/p1.jpg';
import p2 from './../images/p2.jpg';
import './Home.css';

import p9 from "./../images/p9.jpg";



const Home = () => {
  return (
    <> 
      <section className="why-choose-us-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="why-choose-us-content">
          <div className="why-choose-us-item">
            <h3 className="item-title">Expert Care</h3>
            <p className="item-description">Our team of highly skilled healthcare professionals is committed to delivering personalized care tailored to your needs.</p>
          </div>
          <div className="why-choose-us-item">
            <h3 className="item-title">Advanced Facilities</h3>
            <p className="item-description">Equipped with modern facilities and cutting-edge technology, we offer comprehensive medical services ranging from routine check-ups to specialized treatments.</p>
          </div>
          <div className="why-choose-us-item">
            <h3 className="item-title">Patient-Centered Approach</h3>
            <p className="item-description">We believe in treating each patient with respect, dignity, and empathy. Your comfort and satisfaction are paramount to us.</p>
          </div>
          <div className="why-choose-us-item">
            <h3 className="item-title">Community Focused</h3>
            <p className="item-description">Proudly serving our community, we strive to make a positive impact on the health and well-being of our patients and their families.</p>
          </div>
        </div>
      </section>

      <div className='homePage-container'>
        <h1 className='Home-title'>
          We care about
          <span className='home-highlight'>
            {" "} your health
          </span>
        </h1>
        <p className='home-text'>
          At Amist Kilo General Hospital, your health and well-being are our top priorities. We are dedicated to providing exceptional medical care with compassion, expertise, and state-of-the-art technology.
        </p>
        <p>በ፭ ኪሎ አጠቃላይ ሆስፒታል፣ ጤናዎ እና ደህንነትዎ ቅድሚያ የምንሰጣቸው ጉዳዮች ናቸው. በርህራሄ፣ በእውቀት እና በዘመናዊ ቴክኖሎጂ ልዩ የህክምና አገልግሎት ለመስጠት ቆርጠናል።</p>
        <div className='home-images'>
          <img className="home-image" src={p1} alt="p1" /> 
          <img className="home-image" src={p2} alt="p2" /> 
        </div>
      </div>
      <div>
      
      <div className='feedback-container'>
        <div className='feedback-title'>
          <span className='feedback-label'>Feedback</span>
          <h2 className='feedback-subtitle'>
            Your feedback
              <span className='feedback-highlight'> {" "}matters for us</span>
          </h2>
          <p className='feedback-text'>
            Your feedback is invaluable to us in improving our hospital services. Please share your thoughts to help us enhance your experience. Your input matters greatly.
          </p>
          <p>     የሆስፒታል አገልግሎታችንን ለማሻሻል የእርስዎ አስተያየት ለእኛ ጠቃሚ ነው. እባክዎን ልምድዎን ለማሳደግ እንዲረዱን ሀሳብዎን ያካፍሉ. የእርስዎ ግብአት በጣም አስፈላጊ ነው።</p>
          <div className='feedback-image-container'>
            <img className="feedback-image" src={p9} alt="p9" />
          </div>
        </div>
      </div>
     <footer className="footer">
  <div className="footer-content">
    <div className="footer-contact">
      <h4>Contact Us</h4>
      <div className="footer-social-icons">
        {/* Add your social media icons here */}
        <span className="social-icon">Facebook</span>
        <span className="social-icon">Twitter</span>
        <span className="social-icon">Instagram</span>
      </div>
      <p className="footer-tel">Tel: <a href="tel:+251-900000000">+251-900000000</a></p>
      <p className="footer-email">Email: <a href="mailto:info@amistkilogeneralhospital.com">info@amistkilogeneralhospital.com</a></p>
    </div>
    <p className="footer-copywrite">© 2024 Amist Kilo General Hospital. All rights reserved.</p>
  </div>
</footer>
    </div>


      

      
    </>
  );
}

export default Home;
