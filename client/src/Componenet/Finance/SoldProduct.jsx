import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './custom-ag-grid.css'; 

const SoldProduct = () =>{ 
    const [colDefs] = useState([
        { field: 'productId' },
        { field: 'name' },
        { field: 'unitPrice' },
        { field: 'itemQuantity' },
        { field: 'category' },
        { field: 'dateOfSale'}
    ]);

    const [rowData, setRowData] = useState([]);


    useEffect(() => {
        // Fetch data from the API
        fetch('http://127.0.0.1:8000/api/v1/soldproduct')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(SoldProduct => {
            // Store the fetched data in the state
            setRowData(SoldProduct);
          })
          .catch(error => {
          });
      }, []); 

    return (
        <div  style={{width:'98%'}}>
            <div> <h3 style={{fontSize:24,textAlign:'center', fontWeight:'bolder'}}> Sold Products </h3></div>
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
        <div style={{height : '100px',alignContent:'center'}}>              
      </div>
      </div>      
    );
}
export default SoldProduct;
