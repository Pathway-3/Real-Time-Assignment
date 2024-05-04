"use client";

import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase.config";

export default function RealTimeForm() {
  const [userName, setUser] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phoneNumber, setNumber] = useState("");

  // This function adds the info to my page.
  const addInfo = async (info) => {
    try {
      const docRef = await addDoc(collection(db, "info"), info);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error on info", error);
    }
  };
  // This is my function for the form.
  async function handleSubmit(e) {
    const newInfo = { user: userName, email: userEmail, phone: phoneNumber };
    e.preventDefault();
    try {
      await addInfo(newInfo);
    } catch (error) {
      console.error("Error on Submit");
    }
  }
  // My form with the added functions above.
  return (
    <div>
      <h1>Real Time Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={userName}
          onChange={(e) => setUser(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <label htmlFor="number">Phone Number</label>
        <input
          type="tel"
          id="number"
          value={phoneNumber}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">Add Information</button>
      </form>
    </div>
  );
}
