import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './custom-ag-grid.css'; 

const Revenue = ()=>{ 
       const [colDefs] = useState([
         { field: 'year'   },
         { field: 'month'  },
         { field: 'category'},
         { field: 'amount' },
     ]);
       const [rowData, setRowData] = useState([]);
       useEffect(() => {
        // Fetch data from the API
        fetch('http://127.0.0.1:8000/api/v1/revenue')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(givenservice => {
            // Store the fetched data in the state
            setRowData(givenservice);
          })
          .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
          });
      }, []); 
       return(          
            <div  style={{width:'98%'}}>
              <div> <h3 style={{fontSize:24,textAlign:'center', fontWeight:'bolder'}}> Revenue Report </h3></div>
              <div style={{ marginLeft:'1%', display: 'flex', width: '100%', height: '500px' }}>
                <div style={{ flex: '1', overflow: 'hidden' }}>
                  <div className="ag-theme-alpine" style={{ height: '100%', width: '100%' }}>
                    <AgGridReact
                      rowData={rowData}
                      columnDefs={colDefs}
                    />
                  </div>
                </div>
              </div>
              </div>   
             );
            }
     export default Revenue;
