"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <p className=" text-white text-lg">{message}</p>
    </main>
  );
}
