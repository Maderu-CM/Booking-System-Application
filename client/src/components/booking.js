import React, {useState} from "react";

function Booking (){
    const[bookingData, setBookingData] = useState({
        studentName:"",
        admissionNumber:"",
        school:"",
        destination:"",
        dateOfTravel:"",
    });

    const [bookingList, setBookingList]= useState([])
    const handleChange = (e) => {
        const{name, value} = e.target;
        setBookingData({...bookingData,[name]:value});

    };
    const handleAddToList = (e) =>{
        setBookingList([...bookingList,bookingData]);
        setBookingData({
            studentName:"",
            admissionNumber:"",
            school:"",
            destination:"",
            dateOfTravel:"",
        });
    };

    return(
        <div>
            <h2>Booking</h2>
            <form>
                <label htmlFor="studentName">Student Name</label>
                <input
                type="text"
                id="studentName"
                name="studentName"
                value={bookingData.studentName}
                onChange={handleChange}
                />
                <div>
                    <label htmlFor="admissionNumber">Admission Number</label>
                    <input
                    type="text"
                    id="admissionNumber"
                    name="admissionNumber"
                    value={bookingData.admissionNumber}
                    onChange={handleChange}
                    />
                    </div>
                <div>
                        <label htmlFor="school">School</label>
                        <input
                        type="text"
                        id="school"
                        name="school"
                        value={bookingData.school}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="destination">Destination</label>
                        <input
                        type="text"
                        id="destination"
                        name="destination"
                        value={bookingData.destination}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="dateOfTravel">Date of Travel</label>
                        <input
                        type="date"
                        id="dateOfTravel"
                        name="dateOfTravel"
                        value={bookingData.dateOfTravel}
                        onChange={handleChange}
                        />
                    </div>
                    <button type="button" onClick={handleAddToList}>
                        Add to List
                    </button>
                    </form>
                    <h3>Booking List</h3>
                    <ul>
                        {bookingList.map((booking, index) =>(
                            <li key={index}>
                                
                                {'Student Name:${booking.studentName}, Admission Number: ${booking.admissionNumber},School: ${booking.school},Destination: ${booking.destination},Date of Travel: ${booking.dateOfTravel}'}
                            </li>
                        ))}
                    </ul>
                </div>
    );
}

export default Booking;