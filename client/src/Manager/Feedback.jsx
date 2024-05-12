import React from 'react';
import {useState, useEffect} from 'react';
import axios from "axios";

const Manager_Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get("/feedback")
    .then(result => {
      var feedbackList = result.data.map((feedbacks, index) => {
        return {...feedbacks, id: index}
      });
      setFeedbacks(feedbackList)
    })
  }, [])

  return (
    <>
      <div className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Feedback Dashboard
        </h1>

        {feedbacks.length === 0 ? (
          <p className="text-gray-600 text-lg">No feedbacks found.</p>
        ) : (
          <table className="w-full text-left table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 font-bold">Subject Department</th>
                <th className="px-4 py-2 font-bold">Feedback</th>
                <th className="px-4 py-2 font-bold">Time</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback) => (
                <tr key={feedback.id}>
                  <td className="px-4 py-2">{`${feedback.department}`}</td>
                  <td className="px-4 py-2">{feedback.improvement}</td>
                  <td className="px-4 py-2">{feedback.timestamp.substring(0,19)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>

    </>
  )
}

export default Manager_Feedback