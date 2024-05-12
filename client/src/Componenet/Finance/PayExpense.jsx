import React, { useRef, useState } from "react";

const PayExpense = () => {
  const [selectedCategory, setSelectedCategory] = useState("Supplies");
  const [amount, setAmount] = useState("");
  const [BankName, setBankName] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [responseMessage, setresponseMessage] = useState("");

  const BankInputRef = useRef(null);
  const amountInputRef = useRef(null);
  const transactionIdRef = useRef(null);

  const handleClearInput = () => {
    // Clear the input field
    BankInputRef.current.value = "";
    amountInputRef.current.value = "";
    transactionIdRef.current.value = "";
    // Clear the state
    setBankName("");
    setAmount("");
    setTransactionId("");
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleTransactionId = (Event) => {
    setTransactionId(Event.target.value);
  };

  const handleBankName = (Event) => {
    setBankName(Event.target.value);
  };

  const handleAmountChange = (event) => {
    const inputAmount = parseFloat(event.target.value);
    setAmount(isNaN(inputAmount) ? "" : inputAmount);
  };

  const handleSubmit = () => {
    setresponseMessage("");
    const isBankNameValid = !(BankName === "");
    const isAmountValid = !isNaN(amount) && amount > 0;
    const istransactioIdValid = !(transactionId === "");
    const isCategoryValid = !(selectedCategory === "");
    if (
      isAmountValid &&
      istransactioIdValid &&
      isCategoryValid &&
      isBankNameValid
    ) {
      setErrorMessage("");
      const expenseData = {
        Category: selectedCategory,
        BankName: BankName,
        Amount: amount,
        transactionId: transactionId,
      };

      // sending espense payment back to the server from the expense payment page
      //####################################################################################3
      const apiUrl = "http://127.0.0.1:8000/api/v1/expenses";

      // Options for the fetch request
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(expenseData),
      };

      // Make a POST request using fetch
      fetch(apiUrl, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setresponseMessage(data);
          handleClearInput();
        })
        .catch((error) => {});
    } else {
      setErrorMessage("Please enter a valid amount greater than zero.");
    }
  };
  return (
    <div style={{ width: "98%" }}>
      <div>
        {" "}
        <h3 style={{ fontSize: 24, textAlign: "center", fontWeight: "bolder" }}>
          {" "}
          Expense Payment{" "}
        </h3>
      </div>
      <div style={{ display: "flex", width: "100%", height: "500px" }}>
        <div style={{ flex: "1", overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "300px",
              margin: "auto",
            }}
          >
            {responseMessage && (
              <p
                id="successMessage"
                style={{ color: "green", fontWeight: "bolder" }}
              >
                {responseMessage}
              </p>
            )}
            <label htmlFor="category" style={{ marginBottom: "10px" }}>
              Choose a category:
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              style={{
                padding: "8px",
                marginBottom: "10px",
                backgroundColor: "grey",
              }}
            >
              <option value="Supplies">Supplies</option>
              <option value="Utilities">Utilities</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Other Expenses">Other Expenses</option>
            </select>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="amount" style={{ marginBottom: "10px" }}>
                Enter the amount:
              </label>
              <input
                ref={amountInputRef}
                type="number"
                id="amount"
                defaultValue={amount}
                onChange={handleAmountChange}
                style={{
                  padding: "8px",
                  marginBottom: "20px",
                  backgroundColor: "grey",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="transactionId" style={{ marginBottom: "10px" }}>
                Enter Bank Name:
              </label>
              <input
                ref={BankInputRef}
                type="text"
                id="BankName"
                onChange={handleBankName}
                style={{
                  padding: "8px",
                  marginBottom: "20px",
                  backgroundColor: "grey",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="transactionId" style={{ marginBottom: "10px" }}>
                Enter the transactionId:
              </label>
              <input
                ref={transactionIdRef}
                type="text"
                id="transactionId"
                onChange={handleTransactionId}
                style={{
                  padding: "8px",
                  marginBottom: "20px",
                  backgroundColor: "grey",
                }}
              />
            </div>

            <button
              style={{
                backgroundColor: "rgb(0, 136, 214)",
                height: "50px",
                width: "100px",
                borderRadius: "10px",
                marginTop: "20px",
                marginBottom: "40px",
              }}
              onClick={handleSubmit}
              id="payExpense"
            >
              Summit
            </button>
            {errorMessage && (
              <p style={{ color: "red", fontWeight: "bolder" }}>
                {errorMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PayExpense;
