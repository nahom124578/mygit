import React from "react";
import ReactDOM from "react-dom";

const SimpleComp = (p) => {
  const node = p.node;
  const rowData = node.data;

  // pay the salary which display the employee information

  const paySalary = () => {
    if (!rowData.isPaid && !rowData.onleave) {
      let check = false;
      const screenWidth = window.screen.availWidth;
      const windowWidth = 600;
      const windowHeight = 400;
      const left = (screenWidth - windowWidth) / 2;
      const newWindow = window.open(
        "",
        "_blank",
        `width=${windowWidth},height=${windowHeight},left=${left}`
      );
      const container = newWindow.document.createElement("div");

      newWindow.document.body.appendChild(container);
      newWindow.document.body.style.backgroundColor = "gray";

      function windowSwich() {
        window.location.reload();
        newWindow.close();
      }

      ReactDOM.render(
        <React.Fragment>
          <div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tr>
                <th
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  parameters
                </th>
                <th
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  Value
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  Name
                </td>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  {rowData["employeeName"]}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  ID
                </td>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  {rowData["employeeID"]}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  Bank Name
                </td>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  {rowData["bankName"]}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  Account Number
                </td>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  {rowData["bankAccountNumber"]}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  Amount
                </td>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  {rowData["salary"] +
                    rowData["bonus"] -
                    rowData["currentMonthPenalty"] -
                    rowData["outstandingDebt"]}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  Transaction Id
                </td>
                <td style={{ padding: "8px", border: "1px solid" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                    id="transactionId"
                  />
                </td>
              </tr>
            </table>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                style={{
                  backgroundColor: "white",
                  height: "50px",
                  width: "100px",
                  borderRadius: "10px",
                  marginTop: "20px",
                }}
                id="closeButton"
              >
                Cancel
              </button>
              <button
                style={{
                  backgroundColor: "rgb(0, 136, 214)",
                  height: "50px",
                  width: "100px",
                  borderRadius: "10px",
                  marginTop: "20px",
                }}
                id="paySalary"
              >
                Proceed
              </button>
            </div>
          </div>
        </React.Fragment>,
        container
      );

      newWindow.document
        .getElementById("paySalary")
        .addEventListener("click", () => {
          // sending imployee information back to the server from the the salary payment page
          const apiUrl = "http://127.0.0.1:8000/api/v1/salary";
          const transactionId =
            newWindow.document.getElementById("transactionId").value;

          if (!(transactionId === "")) {
            rowData["transactionID"] = transactionId;

            const options = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(rowData),
            };

            // Make a POST request using fetch
            fetch(apiUrl, options)
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                return response.json();
              })
              .then(windowSwich())
              .catch((error) => {});
          } else {
            if (!check) {
              const errorMessage = "Please enter valid inputs.";
              const errorContainer = newWindow.document.createElement("div");
              errorContainer.textContent = errorMessage;
              errorContainer.style.color = "red";
              newWindow.document.body.appendChild(errorContainer);
              check = true;
            }
          }
        });

      newWindow.document
        .getElementById("closeButton")
        .addEventListener("click", () => {
          newWindow.close();
        });
    }
  };

  // change the salary parameters which allow the manager to change the value of salary parameters

  const changeSalaryparameter = () => {
    //the window
    if (!rowData["onleave"] && !rowData["isPaid"]) {
      const screenWidth = window.screen.availWidth;
      const windowWidth = 600;
      const windowHeight = 550;
      const left = (screenWidth - windowWidth) / 2;
      const newWindow = window.open(
        "",
        "_blank",
        `width=${windowWidth},height=${windowHeight},left=${left}`
      );
      const container = newWindow.document.createElement("div");
      newWindow.document.body.appendChild(container);
      newWindow.document.body.style.backgroundColor = "gray";
      function windowSwich() {
        window.location.reload();
        newWindow.close();
      }

      ReactDOM.render(
        <React.Fragment s>
          <div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tr>
                <th
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  Parameters
                </th>
                <th
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  Value
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  Name
                </td>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  {rowData["employeeName"]}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  ID
                </td>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  {rowData["employeeID"]}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  bonus
                </td>
                <td style={{ padding: "8px", border: "1px solid" }}>
                  <input
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                    id="bonus"
                    type="number"
                    defaultValue={rowData["bonus"]}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  penality
                </td>
                <td style={{ padding: "8px", border: "1px solid" }}>
                  <input
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                    id="currentMonthPenalty"
                    type="number"
                    defaultValue={rowData["currentMonthPenalty"]}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  debt
                </td>
                <td style={{ padding: "8px", border: "1px solid" }}>
                  <input
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                    id="outstandingDebt"
                    type="number"
                    defaultValue={rowData["outstandingDebt"]}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  Bank Name
                </td>
                <td style={{ padding: "8px", border: "1px solid" }}>
                  <input
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                    id="bankName"
                    type="text"
                    defaultValue={rowData["bankName"]}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: "bolder",
                    border: "1px solid",
                  }}
                >
                  Account Number
                </td>
                <td style={{ padding: "8px", border: "1px solid" }}>
                  <input
                    type="number"
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                    id="bankAccountNumber"
                    defaultValue={rowData["bankAccountNumber"]}
                  />
                </td>
              </tr>
            </table>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              style={{
                fontWeight: "bold",
                backgroundColor: "white",
                height: "50px",
                width: "100px",
                borderRadius: "10px",
                marginTop: "20px",
              }}
              id="closeButton"
            >
              Cancel
            </button>

            <button
              style={{
                backgroundColor: "rgb(22, 172, 55)",
                height: "50px",
                width: "100px",
                borderRadius: "10px",
                marginTop: "20px",
              }}
              id="makeChange"
            >
              Proceed
            </button>
          </div>
        </React.Fragment>,
        container
      );

      // handling the buttons
      let check = false;
      newWindow.document
        .getElementById("makeChange")
        .addEventListener("click", () => {
          // Get the updated values from input fields
          const updatedAccountNumber = Number(
            newWindow.document.getElementById("bankAccountNumber").value
          );
          const updatedBankName =
            newWindow.document.getElementById("bankName").value;
          const updatedBonus = Number(
            newWindow.document.getElementById("bonus").value
          );
          const updatedDebt = Number(
            newWindow.document.getElementById("outstandingDebt").value
          );
          const updatedPenality = Number(
            newWindow.document.getElementById("currentMonthPenalty").value
          );

          // Validate salary and account number
          const isBonusValid = !isNaN(updatedBonus) && updatedBonus >= 0;
          const isDebtValid = !isNaN(updatedDebt) && updatedDebt >= 0;
          const isPenalityValid =
            !isNaN(updatedPenality) && updatedPenality >= 0;
          const isAccountNumberValid =
            !isNaN(updatedAccountNumber) &&
            Number.isInteger(updatedAccountNumber) &&
            updatedAccountNumber > 0;
          const isBankNameValid = !(updatedBankName === "");

          if (
            isBonusValid &&
            isDebtValid &&
            isPenalityValid &&
            isAccountNumberValid &&
            isBankNameValid
          ) {
            // Update rowData with the new values
            rowData["bankAccountNumber"] = updatedAccountNumber;
            rowData["bankName"] = updatedBankName;
            rowData["bonus"] = updatedBonus;
            rowData["outstandingDebt"] = updatedDebt;
            rowData["currentMonthPenalty"] = updatedPenality;

            // Send PATCH request to the API
            const apiUrl = "http://127.0.0.1:8000/api/v1/salary";

            const options = {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(rowData),
            };

            fetch(apiUrl, options)
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                return response.json();
              })
              .then(windowSwich())
              .catch((error) => {});
          } else {
            // Display error message to the user
            if (!check) {
              const errorMessage = "Please enter valid inputs.";
              const errorContainer = newWindow.document.createElement("div");
              errorContainer.textContent = errorMessage;
              errorContainer.style.color = "red";
              newWindow.document.body.appendChild(errorContainer);
              check = true;
            }

            // Reset  inputs to defaultValue

            newWindow.document.getElementById("bankAccountNumber").value =
              rowData["bankAccountNumber"];
            newWindow.document.getElementById("bankName").value =
              rowData["bankName"];
            newWindow.document.getElementById("bonus").value = rowData["bonus"];
            newWindow.document.getElementById("outstandingDebt").value =
              rowData["outstandingDebt"];
            newWindow.document.getElementById("currentMonthPenalty").value =
              rowData["currentMonthPenalty"];
          }
        });

      newWindow.document
        .getElementById("closeButton")
        .addEventListener("click", () => {
          newWindow.close();
        });
    }
  };

  return (
    <>
      <button
        style={{
          backgroundColor: "rgb(0, 136, 214)",
          height: "100%",
          width: "60px",
        }}
        onClick={paySalary}
      >
        Pay
      </button>
      <button
        style={{
          backgroundColor: "rgb(22, 172, 55)",
          height: "100%",
          width: "60px",
        }}
        onClick={changeSalaryparameter}
      >
        Change
      </button>
    </>
  );
};

export default SimpleComp;
