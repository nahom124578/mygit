import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const Employeecontext = createContext(null);
const Employeecontextprovider = (props) => {
  const [AllProducts, setAllProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/display")
      .then((response) => {
        setAllProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const contextValue = { AllProducts };
  console.log(AllProducts);

  return (
    <Employeecontext.Provider value={contextValue}>
      {props.children}
    </Employeecontext.Provider>
  );
};
export default Employeecontextprovider;
