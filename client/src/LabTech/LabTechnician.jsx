import { useEffect, useState, Link } from 'react';
import './LabTechnician.css';
import axios from 'axios';
import ResultReporting from './ResultReporting';


function LabTechnician(){

    const [requests , setRequest] = useState([])
    
    useEffect(() => {

        const fetchUncheckedRequest = async () => {
            try {
                const response = await axios.get('/api/labrequest')
                setRequest(response.data);
            } catch (error) {
                console.error('Failed to fetch unchecked elements:', error);
            }
        };
        fetchUncheckedRequest();

    })
    
    async function deleteRequest(id){
        try {
            await axios.put(`/update/${id}`, { checked: true });
            //setRequest(requests.filter(item => item._id !== id));
        } catch (error) {
            console.error('Failed to update element:', error);
        }
    
        console.log(id)
    }
    const buttonStyle = {
        
        color: 'red',
        backgroundColor: 'rgb(233, 241, 241)',
        padding: '10px',
        border: "none",
        cursor: "pointer",
        paddingTop: '1',
        paddingBottom: '1',
      };

    return(
        <div className="main-element">
            <div className="labpage">
            
                <div className="announcement">
                    <h1 className='title1'>Announcement</h1>
                    <div className="element">

                    </div>
                    
                
                   
                    
                </div>
                <div className="todo-list">
                   <h1 className='title2'>To do list</h1>

                   <div className="list">
                  


                        <ol >
                            {
                                requests.map((request, index ) =>{
                                    return <li key={request._id} style={{padding:'2px' , paddingLeft: '20px',margin: "0px", listStyleType: 'none' }}>
                                        <span>  {index + 1}. &nbsp; Dr. {request.doctorName}&nbsp; &nbsp;
                                                patient name: {request.patientName} &nbsp; &nbsp;
                                                patientID: {request.patientID} &nbsp; &nbsp;
                                                Type: {request.labTestType}&nbsp; &nbsp;
                                                {request.urgency && <span>urgency</span> }&nbsp;
                                        </span>
                                        
                                        <button onClick={() => deleteRequest(request._id)} style={buttonStyle}>delete</button>
                                    </li>
                                })
                            }
                        </ol>

                        


                        
                    </div> 
                </div>
                
        </div>
        </div>
    )
}

export default LabTechnician