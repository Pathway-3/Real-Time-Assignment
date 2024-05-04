"use client";

import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase.config";
import UpdateFormMessages from "./UpdateFormMessages";

export default function RealTimeMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const undoMessage = onSnapshot(collection(db, "info"), (snapshot) => {
      const messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messages);
    });
    return () => {
      undoMessage();
    };
  }, []);
  // Only run once because the dependency is an empty array

  async function handleDelete(id) {
    try {
      const infoRef = doc(db, "info", id);
      await deleteDoc(infoRef);
    } catch (error) {
      console.error("Error on deleting", error);
    }
  }

  const fetchMessage = async () => {
    const querySnapshot = await getDoc(doc(db, "info"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
    console.log(querySnapshot.data());
  };

  //   fetchMessage();

  return (
    <div>
      <h1>Real Time Messages</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            {message.user} - {message.email} - {message.phone}
            <button onClick={() => handleDelete(message.id)}>Delete</button>
            <UpdateFormMessages info={message} />
          </li>
        ))}
      </ul>
    </div>
  );
}
