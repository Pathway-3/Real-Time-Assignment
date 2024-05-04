"use client";

import { collection, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase.config";

export default function UpdateFormMessages({ info }) {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const infoRef = doc(db, "info", info.id);
      await updateDoc(infoRef, {
        user: user,
        email: email,
        phone: phone,
      });
    } catch (error) {
      console.error("Error on Submit", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label id="user" htmlFor="user">
          Name
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="phone">
          Phone:
          <input type="tel" onChange={(e) => setPhone(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
