import React, { useState } from 'react';
import { ref,set } from 'firebase/database';
import { db } from '../firebase';

const Main = () => {
  const [formData, setFormData] = useState({
    userId: '',
    userName: '',
    userEmail: '',
    userPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const addNewUser = (formData) =>{
    set(ref(db,`user/${formData.userId}`),{
        user_Name: formData.userName,
        user_Email: formData.userEmail,
        user_Password: formData.userPassword
      }).then(() => {

    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addNewUser(formData);

    setFormData({
        userId: '',
        userName: '',
        userEmail: '',
        userPassword: ''
      });

  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Form</h2>
      <div>
        <label>User ID:</label>
        <input
          type="text"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
         
        />
      </div>
      <div>
        <label>User Name:</label>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
         
        />
      </div>
      <div>
        <label>User Email:</label>
        <input
          type="email"
          name="userEmail"
          value={formData.userEmail}
          onChange={handleChange}
         
        />
      </div>
      <div>
        <label>User Password:</label>
        <input
          type="password"
          name="userPassword"
          value={formData.userPassword}
          onChange={handleChange}
         
        />
      </div>
      <button type="submit" >Submit</button>
    </form>
  );
};

export default Main;
