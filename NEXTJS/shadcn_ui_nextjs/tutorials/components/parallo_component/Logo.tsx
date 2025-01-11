import React from "react";
import Image from "next/image";
export default function Logo() {
  return (
    <div>
      <Image
        src="/logo.jpg"
        width={20}
        height={20}
        className="rounded-full"
        alt="Parallo"
      />
      <div>
        <h1>PARALLO</h1>
        <p>new app landing page.</p>
      </div>
    </div>
  );
}
