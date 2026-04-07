"use client";
import { useEffect, useState } from "react";

export default function Verses() {
  const [verses, setVerses] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/verses")
      .then(res => res.json())
      .then(data => setVerses(data));
  }, []);

  return (
    <div className="grid gap-4 p-6">
      {verses.map((v: any, i) => (
        <div key={i} className="p-4 border rounded-2xl shadow">
          <p>{v.text}</p>
          <span className="text-sm text-gray-500">
            {v.ref}
          </span>
        </div>
      ))}
    </div>
  );
}