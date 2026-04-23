"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>

      {/* Navbar */}
      <div className="w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Convert.png"
            alt="Convert Logo"
            width={80}
            height={80}
          />
          <span className="hidden sm:block font-semibold text-1g text-gray-800">
            Convert
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setOpen(!open)} 
            className="text-gray-700 text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-gray-600 text-sm font-medium">
          <Link href="/compress-image" className="hover:text-blue-600">Compress</Link>
          <Link href="/image-to-pdf" className="hover:text-blue-600">PDF</Link>
          <Link href="/resize-image" className="hover:text-blue-600">Resize</Link>
          <Link href="/convert-image" className="hover:text-blue-600">Convert</Link>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-3 text-gray-700">
          <Link href="/compress-image">Compress</Link>
          <Link href="/image-to-pdf">PDF</Link>
          <Link href="/resize-image">Resize</Link>
          <Link href="/convert-image">Convert</Link>
        </div>
      )}

    </div>
  );
}