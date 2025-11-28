import React from "react";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2  group cursor-pointer">
      {/* Logo Image */}
      {/* <div className="relative w-14 h-14  transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo.png"
          alt="xGlobal Logo"
          fill
          className="object-contain"
          priority
        />
      </div> */}
      
      {/* Brand Name */}
      <span className="text-xl font-bold tracking-tight text-primary">
        xGlobal
      </span>
    </div>
  );
};
