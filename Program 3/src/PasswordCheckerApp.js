import React, { useState } from 'react';
import axios from 'axios';
import { isStrong, minStepsToMakeStrong } from './PasswordChecker'
import '../src/style.css'
const PasswordCheckerApp = () => {
  const [password, setPassword] = useState('');
  const [isPasswordStrong, setIsPasswordStrong] = useState(false);
  const [stepsToMakeStrong, setStepsToMakeStrong] = useState(0);

  const handleInputChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Check password strength and steps
    setIsPasswordStrong(isStrong(newPassword));
    setStepsToMakeStrong(minStepsToMakeStrong(newPassword));
  };

  const handleSubmit = async () => {
    try {
      // Make a POST request to the server endpoint to save password data
      const response = await axios.post('http://localhost:5000/api/password', {
        password,
        isPasswordStrong,
        stepsToMakeStrong,
      });
      console.log('Saved to MongoDB:', response.data);
    } catch (error) {
      console.error('Error saving to MongoDB:', error);
    }
  };

  return (
    <div className="container">
      <h1>ippo pay</h1>
      <h2>Password Checker</h2>
      <label>Password:</label>
      <div className="input-container">
        <input type="password" value={password} onChange={handleInputChange} />
      </div>
      <div className="button-container">
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="password-info">
        <p>Password Strength: {isPasswordStrong ? 'Strong' : 'Weak'}</p>
        <div className={`strength-bar ${isPasswordStrong ? 'strong' : 'weak'}`}></div>
        <br></br>
        <p>Steps to Make Strong: {stepsToMakeStrong}</p>
      </div>
    </div>
  );
};


export default PasswordCheckerApp;
