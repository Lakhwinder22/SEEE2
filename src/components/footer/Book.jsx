import React, { useState } from 'react';

function AppointmentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [candidatePhotoId, setCandidatePhotoId] = useState('');
  const [guardianPhotoId, setGuardianPhotoId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission here, such as sending the data to a server or performing other actions

    // Reset form fields after submission
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    setTime('');
    setCandidatePhotoId('');
    setGuardianPhotoId('');
  };

  return (
    <>
      <div className='pagesection' id='Reach'>
        <div className='container' >
          <div className='row'>
            <div className='col'>
              <ul>
                <div className='appon'>
                  <br></br>
                  <br></br>
                  <ul><h2>BOOK AN APPOINTMENT</h2></ul>
                </div>
                <br>
                </br>
                <form onSubmit={handleSubmit}>
                  <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                  </label>

                  <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </label>

                  <label>
                    Phone Number:
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </label>

                  <label>
                    Appointment Date:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                  </label>

                  <label>
                    Appointment Time:
                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                  </label>

                  <label>
                    Candidate Photo ID:
                    <input type="file" onChange={(e) => setCandidatePhotoId(e.target.files[0])} />
                  </label>

                  <label>
                    Guardian Photo ID:
                    <input type="file" onChange={(e) => setGuardianPhotoId(e.target.files[0])} />
                  </label>

                  <button type="submit">Submit</button>
                </form>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppointmentForm;
