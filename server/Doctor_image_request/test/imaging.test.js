const request = require("supertest");
const app = require("../app"); // Update with your Express app path
//TEst
// Test case for successful request
test("It should respond with 200 for successful POST request", (done) => {
  request(app)
    .post("/api/doctor_image_request")
    .send({
      patient_name: "John Doe",
      physician_name: "Dr. Smith",
      physician_contact: "1234567890",
      dob: new Date(),
      gender: "Male",
      imaging_procedure: "CT Scan",
      clinical_indication: "Pain in the chest",
      special_instructions: "No special instructions",
    })
    .then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
});

// Test case for request with missing fields
test("It should respond with 500 for POST request with missing fields", (done) => {
  request(app)
    .post("/api/doctor_image_request")
    .send({
      patient_name: "John Doe",
      physician_name: "Dr. Smith",
      // physician_contact field is missing
      dob: new Date(),
      gender: "Male",
      imaging_procedure: "CT Scan",
      clinical_indication: "Pain in the chest",
      special_instructions: "No special instructions",
    })
    .then((response) => {
      expect(response.statusCode).toBe(500);
      done();
    });
});

// Test case for request with invalid data
test("It should respond with 400 for POST request with invalid data", (done) => {
  request(app)
    .post("/api/doctor_image_request")
    .send({
      patient_name: "John Doe",
      physician_name: "Dr. Smith",
      physician_contact: "1234567890",
      dob: new Date(),
      gender: "Invalid Gender", // Invalid gender
      imaging_procedure: "CT Scan",
      clinical_indication: "Pain in the chest",
      special_instructions: "No special instructions",
    })
    .then((response) => {
      expect(response.statusCode).toBe(500);
      done();
    });
});








test("It should respond with 200 for successful GET request", (done) => {
  request(app)
    .get("/api/list_patient") // replace with your endpoint
    .send()
    .then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
}, 10000); // 10 seconds timeout
