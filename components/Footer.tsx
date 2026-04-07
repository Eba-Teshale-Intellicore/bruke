"use client";
import { useState } from "react";

export default function Surprise() {
  const [show, setShow] = useState(false);

  return (
    <div className="text-center py-10">
      <button
        onClick={() => setShow(true)}
        className="px-6 py-3 bg-yellow-500 rounded-xl"
      >
        🎁 Open Surprise
      </button>

      {show && (
        <p className="mt-6 text-xl">
          You are blessed 🙏
        </p>
      )}
    </div>
  );
}