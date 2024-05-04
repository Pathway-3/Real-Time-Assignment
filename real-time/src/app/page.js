"use client";

import Image from "next/image";
import RealTimeForm from "./componets/RealTimeForm";
import RealTimeMessages from "./componets/RealTimeMessages";

export default function Home() {

  
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen">
        <RealTimeForm />
        <RealTimeMessages />
      </div>
    </main>
  );
}
