import React, { useState } from 'react';
import "./App.css";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  const calculateAge = () => {
    const birthDateObj = new Date(birthDate);
    const today = new Date();

    if (birthDateObj > today) {
      setError('Invalid birth date. Please enter a valid date.');
      setAge('');
    } else {
      const diffInMilliseconds = today - birthDateObj;
      const ageDate = new Date(diffInMilliseconds);
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      setAge(calculatedAge);
      setError('');
    }
  };

  return (
    <div>
      <h2>Age Calculator</h2>
      <label htmlFor="birthDate">Enter your birth date: </label> <br /><br />
      <input
        type="date"
        id="birthDate"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      /><br /><br />
      <button onClick={calculateAge}>Calculate</button><br /><br />
      {error && <p>{error}</p>}
      {age && !error && <p>Your age is: {age}</p>}
    </div>
  );
};

export default AgeCalculator;
