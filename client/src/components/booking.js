import React, { useState } from "react";

function Booking() {
  const [bookingData, setBookingData] = useState({
    studentName: "",
    admissionNumber: "",
    school: "",
    destination: "",
    dateOfTravel: "",
  });

  const [bookingList, setBookingList] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleAddToList = (e) => {
    setBookingList([...bookingList, bookingData]);
    setBookingData({
      studentName: "",
      admissionNumber: "",
      school: "",
      destination: "",
      dateOfTravel: "",
    });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6">
        <h2 className="mb-4 text-center">Booking</h2>
        <form>
          <div className="form-group">
            <label htmlFor="studentName">Student Name</label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={bookingData.studentName}
              onChange={handleChange}
              className="form-control"
              style={{ width: "100%" }} // Reducing input box size
            />
          </div>
          <div className="form-group">
            <label htmlFor="admissionNumber">Admission Number</label>
            <input
              type="text"
              id="admissionNumber"
              name="admissionNumber"
              value={bookingData.admissionNumber}
              onChange={handleChange}
              className="form-control"
              style={{ width: "100%" }} // Reducing input box size
            />
          </div>
          <div className="form-group">
            <label htmlFor="school">School</label>
            <input
              type="text"
              id="school"
              name="school"
              value={bookingData.school}
              onChange={handleChange}
              className="form-control"
              style={{ width: "100%" }} // Reducing input box size
            />
          </div>
          <div className="form-group">
            <label htmlFor="destination">Destination</label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={bookingData.destination}
              onChange={handleChange}
              className="form-control"
              style={{ width: "100%" }} // Reducing input box size
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfTravel">Date of Travel</label>
            <input
              type="date"
              id="dateOfTravel"
              name="dateOfTravel"
              value={bookingData.dateOfTravel}
              onChange={handleChange}
              className="form-control"
              style={{ width: "100%" }} // Reducing input box size
            />
          </div>
          <button type="button" onClick={handleAddToList} className="btn btn-primary">
            Add to List
          </button>
        </form>
        <h3 className="mt-4">Booking List</h3>
        <ul>
          {bookingList.map((booking, index) => (
            <li key={index}>
              <strong>Student Name:</strong> {booking.studentName}<br />
              <strong>Admission Number:</strong> {booking.admissionNumber}<br />
              <strong>School:</strong> {booking.school}<br />
              <strong>Destination:</strong> {booking.destination}<br />
              <strong>Date of Travel:</strong> {booking.dateOfTravel}<br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Booking;
