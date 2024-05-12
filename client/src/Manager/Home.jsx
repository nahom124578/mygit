import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow bg-gradient-to-r from-blue-500 to-purple-500 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
            Welcome, Hospital Manager!
          </h1>
          <p className="text-white text-lg md:text-xl text-center mb-8">
            Here are some important statistics and updates:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
            <Link className="text-2xl font-bold mb-4" to='/patient-addmision'>Patient Admissions</Link>
              
              <p className="text-gray-600 text-lg">
                
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
            <Link className="text-2xl font-bold mb-4" to='/staff'>Staffing Overview</Link>
              <p className="text-gray-600 text-lg">
                
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
            <Link className="text-2xl font-bold mb-4" to='/finance'>Financial Information</Link>
              
              <p className="text-gray-600 text-lg">
                
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
            <Link className="text-2xl font-bold mb-4" to='/kpi'>Key Performance Indicators</Link>
              
              <p className="text-gray-600 text-lg">
                
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
            <Link className="text-2xl font-bold mb-4" to='/events'>coming Events and Announcements</Link>
            
              <p className="text-gray-600 text-lg">
                
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
            <Link className="text-2xl font-bold mb-4" to='/manager-feedback'>Patient Feedback and Testimonials:</Link>
              
              <p className="text-gray-600 text-lg">
                
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
            <Link className="text-2xl font-bold mb-4" to='/res'>Resource Library</Link>
          
              <p className="text-gray-600 text-lg">
                
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
            <Link className="text-2xl font-bold mb-4" to='/not'>Notification Center:</Link>
            
              <p className="text-gray-600 text-lg">
                
              </p>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;