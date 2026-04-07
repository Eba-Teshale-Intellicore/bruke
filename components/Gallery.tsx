"use client";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/photos")
      .then(res => res.json())
      .then(data => setPhotos(data));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      {photos.map((p: string, i) => (
        <img key={i} src={p} className="rounded-xl" />
      ))}
    </div>
  );
}